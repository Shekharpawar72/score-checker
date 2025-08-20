import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GalaxyBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const stars = [];
    const colors = ["#00ffff", "#ff00ff", "#ffd700", "#7fff00", "#ff4500", "#ffffff"];

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 4 + 4; // 2px to 6px
      const color = colors[Math.floor(Math.random() * colors.length)];

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = color;

      container.appendChild(star);
      stars.push(star);

      // Twinkle effect
      gsap.to(star, {
        opacity: Math.random() * 0.8 + 0.2,
        duration: 1 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5,
      });
    }

    // Rotate whole container
    const rotateTween = gsap.to(container, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    return () => {
      stars.forEach((star) => {
        gsap.killTweensOf(star);
        if (container.contains(star)) container.removeChild(star);
      });
      rotateTween.kill();
    };
  }, []);

  return <div ref={containerRef} className="galaxy-bg" />;
}