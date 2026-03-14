import { useState, useRef } from "react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ before, after, beforeLabel = "Before", afterLabel = "After" }: Props) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-col-resize select-none"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After (full background) */}
      <img src={after} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current?.offsetWidth }} />
      </div>

      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-warm-white shadow-lg" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm-white/90 flex items-center justify-center shadow-lg">
          <span className="text-charcoal text-xs font-heading font-bold">⟨⟩</span>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-charcoal/70 backdrop-blur-sm text-warm-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-charcoal/70 backdrop-blur-sm text-warm-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
