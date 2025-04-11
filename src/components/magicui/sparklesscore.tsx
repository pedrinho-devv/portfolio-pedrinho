"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  count?: number;
}

export const SparklesCore = ({
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 1.5,
  count = 40,
}: SparklesCoreProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * (maxSize - minSize) + minSize,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
  }, [count, minSize, maxSize]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ background }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [-10, 10],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            repeatType: "mirror",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
