import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  typingSpeed?: number; // ms per character
  startDelay?: number; // ms delay before starting
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypingText({
  text,
  className,
  typingSpeed = 50,
  startDelay = 0,
  showCursor = true,
  onComplete
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    
    // Reset and add delay before starting
    setDisplayText("");
    setIsTyping(true);
    
    timeout = setTimeout(() => {
      const typeNextChar = () => {
        if (charIndex < text.length) {
          setDisplayText(text.substring(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeNextChar, typingSpeed);
        } else {
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      };
      
      typeNextChar();
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [text, typingSpeed, startDelay, onComplete]);
  
  return (
    <span className={cn("font-mono", className)}>
      {displayText}
      {showCursor && isTyping && (
        <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse">
          &nbsp;
        </span>
      )}
    </span>
  );
}