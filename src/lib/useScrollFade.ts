import { useEffect, useState } from "react";

export const useScrollFade = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = (start: number, end: number) => {
    if (scrollY <= start) return 0;
    if (scrollY >= end) return 1;
    return (scrollY - start) / (end - start);
  };

  const fadeOut = (start: number, end: number) => {
    if (scrollY <= start) return 1;
    if (scrollY >= end) return 0;
    return 1 - (scrollY - start) / (end - start);
  };

  return { scrollY, fadeIn, fadeOut };
};
