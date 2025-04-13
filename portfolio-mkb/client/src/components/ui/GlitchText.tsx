import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: "low" | "medium" | "high";
}

export function GlitchText({ text, className, glitchIntensity = "medium" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  
  // Glitch intensities
  const glitchChance = {
    low: 0.01,
    medium: 0.03,
    high: 0.08
  };
  
  // Characters to randomly replace during glitch effect
  const glitchChars = "!<>-_\\/[]{}—=+*^?#$%@";
  
  // Apply random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchChance[glitchIntensity]) {
        // Create glitched text
        const glitchedText = text
          .split("")
          .map(char => {
            if (Math.random() < 0.2) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join("");
        
        setDisplayText(glitchedText);
        
        // Reset after a short delay
        setTimeout(() => {
          setDisplayText(text);
        }, 100);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [text, glitchIntensity]);
  
  return (
    <motion.span
      className={cn("font-mono", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  );
}