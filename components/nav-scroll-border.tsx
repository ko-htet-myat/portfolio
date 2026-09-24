"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface NavScrollBorderProps {
  containerRef?: React.RefObject<HTMLElement | null>;
  scrolled?: boolean;
  strokeWidth?: number;
  className?: string;
}

export function NavScrollBorder({
  containerRef,
  scrolled = false,
  strokeWidth = 2,
  className = "",
}: NavScrollBorderProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rawId = useId();
  const gradientId = `nav-scroll-grad-${rawId.replace(/:/g, "")}`;

  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll();

  // Smoothly fade in as soon as scroll starts to prevent an isolated dot at 0 scroll
  const borderOpacity = useTransform(scrollYProgress, [0, 0.005], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.005, 1], [0, 0.35, 0.35]);

  useEffect(() => {
    const element =
      containerRef?.current || (svgRef.current?.parentElement as HTMLElement | null);
    if (!element) return;

    const measure = () => {
      const rect = element.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    resizeObserver.observe(element);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef]);

  const { width, height } = dimensions;

  // Offset by half strokeWidth so the stroke is centered on the border bounds
  const inset = strokeWidth / 2;
  const w = Math.max(0, width - strokeWidth);
  const h = Math.max(0, height - strokeWidth);
  const r = Math.min(w / 2, h / 2);

  const x0 = inset;
  const y0 = inset;
  const x1 = inset + w;
  const y1 = inset + h;

  // Clockwise rounded pill path starting at top-left curve:
  // Top edge (L -> R) -> Right cap -> Bottom edge (R -> L) -> Left cap -> Close
  const pathData =
    width > 0 && height > 0
      ? `M ${x0 + r} ${y0} L ${x1 - r} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y0 + r} L ${x1} ${y1 - r} A ${r} ${r} 0 0 1 ${x1 - r} ${y1} L ${x0 + r} ${y1} A ${r} ${r} 0 0 1 ${x0} ${y1 - r} L ${x0} ${y0 + r} A ${r} ${r} 0 0 1 ${x0 + r} ${y0} Z`
      : "";

  return (
    <svg
      ref={svgRef}
      viewBox={width > 0 && height > 0 ? `0 0 ${width} ${height}` : undefined}
      className={`absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-visible z-10 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Brand palette gradient: violet-500 -> fuchsia-500 -> orange-500 */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {pathData && (
        <>
          {/* Base track border */}
          <path
            d={pathData}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={`transition-colors duration-500 ${
              scrolled
                ? "text-zinc-200/60 dark:text-zinc-800/80"
                : "text-zinc-200/20 dark:text-zinc-800/30"
            }`}
          />

          {/* Ambient soft glow layer */}
          <motion.path
            d={pathData}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth + 2}
            strokeLinecap="round"
            className="blur-[2px]"
            style={{
              pathLength: scrollYProgress,
              opacity: glowOpacity,
            }}
          />

          {/* Screen scroll progress gradient border */}
          <motion.path
            d={pathData}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              opacity: borderOpacity,
            }}
          />
        </>
      )}
    </svg>
  );
}
