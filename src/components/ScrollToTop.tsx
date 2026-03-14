import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top whenever the route changes.
 * Ensures every new page opens at the top for a professional experience.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
