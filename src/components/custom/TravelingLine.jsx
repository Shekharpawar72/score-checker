import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TravelingLine() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    const dashSize = 180;

    gsap.set(path, {
      strokeDasharray: `${dashSize} ${length}`,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: -length,
      duration: 6,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <svg
      viewBox="0 0 300 400"
      className="absolute left-0 top-0 w-72 h-96 opacity-70"
    >
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00ccff" stopOpacity="0" />
          <stop offset="100%" stopColor="#00ccff" stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        ref={pathRef}
        d="M 150 0 V 100 Q 150 150 200 150 H 250 V 400"
        stroke="url(#grad1)"
        strokeWidth="2"
        fill="none"
        style={{ filter: "drop-shadow(0 0 6px #00ccff)" }}
      />
    </svg>
  );
}
