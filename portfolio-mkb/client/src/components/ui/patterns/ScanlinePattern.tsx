import { motion } from "framer-motion";

export default function ScanlinePattern() {
  return (
    <svg
      className="absolute inset-0 -z-10 opacity-20"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="scanline"
          width="100%"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="100%"
            height="1"
            fill="rgba(0, 255, 0, 0.1)"
          />
        </pattern>
        {/* Terminal grid pattern */}
        <pattern
          id="terminal-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0.5h20M0 10.5h20M0.5 0v20M10.5 0v20"
            strokeWidth="0.5"
            stroke="rgba(0, 255, 0, 0.1)"
            fill="none"
          />
        </pattern>
      </defs>
      {/* Animate the scanline effect */}
      <motion.rect
        width="100%"
        height="100%"
        fill="url(#terminal-grid)"
      />
      <motion.rect
        width="100%"
        height="100%"
        fill="url(#scanline)"
        animate={{
          y: [0, 300, 0],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </svg>
  );
}