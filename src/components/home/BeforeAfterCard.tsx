import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BeforeAfterCardProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** When set, the whole card becomes a link to this path (e.g. /case-study/1). Slider drag does not trigger navigation. */
  to?: string;
};

const BeforeAfterCard = ({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  to,
}: BeforeAfterCardProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      isDragging.current = true;
      didDrag.current = false;
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      didDrag.current = true;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      didDrag.current = false;
    }
  }, []);

  const cardContent = (
    <>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="h-full w-full object-cover select-none pointer-events-none"
            draggable={false}
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${100 - position}%`, left: `${position}%` }}
        >
          <img
            src={afterSrc}
            alt={afterAlt}
            className="h-full object-cover object-left-top select-none pointer-events-none"
            style={{
              width: `${(100 / (100 - position)) * 100}%`,
              maxWidth: "none",
              marginLeft: position === 100 ? 0 : `${-(position / (100 - position)) * 100}%`,
            }}
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-8 cursor-ew-resize z-10 flex flex-col items-center justify-center -translate-x-1/2"
          style={{ left: `${position}%` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          role="slider"
          aria-valuenow={position}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Before after slider"
          tabIndex={0}
          onKeyDown={(e) => {
            const step = 2;
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - step));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + step));
          }}
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gold border-2 border-warm-white shadow-lg pointer-events-none">
            <ChevronLeft className="w-4 h-4 text-charcoal -ml-0.5" strokeWidth={2.5} />
            <ChevronRight className="w-4 h-4 text-charcoal -mr-0.5" strokeWidth={2.5} />
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-charcoal/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-heading font-semibold text-warm-white uppercase tracking-widest z-[1]">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-charcoal/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-heading font-semibold text-warm-white uppercase tracking-widest z-[1]">
          After
        </span>
      </div>
    </>
  );

  const className =
    "group/card block rounded-xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl hover:border-gold/20 transition-all duration-300";

  if (to) {
    return (
      <Link to={to} className={className} onClick={handleLinkClick}>
        {cardContent}
      </Link>
    );
  }

  return <div className={className}>{cardContent}</div>;
};

export default BeforeAfterCard;
