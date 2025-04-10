import React from "react";
import { cn } from "@/lib/utils";

interface RedactedTextProps {
  text: string;
  redactPercent?: number; // 0-100, percentage of text to redact
  className?: string;
  redactionChar?: string;
  showRedactedHint?: boolean; // Show original text on hover
}

export function RedactedText({
  text,
  redactPercent = 70,
  className,
  redactionChar = "█",
  showRedactedHint = true
}: RedactedTextProps) {
  // Function to determine if a character should be redacted
  const shouldRedact = () => Math.random() * 100 < redactPercent;
  
  // Process the text to redact random portions
  const processedText = text.split('').map((char, index) => {
    // Don't redact spaces to preserve text structure
    if (char === ' ') return ' ';
    
    // Determine if this character should be redacted
    const isRedacted = shouldRedact();
    
    if (isRedacted) {
      // Replace with redaction characters
      return redactionChar;
    }
    
    return char;
  }).join('');
  
  return (
    <span 
      className={cn(
        "font-mono relative transition-colors duration-300",
        showRedactedHint && "cursor-help hover:bg-gray-800",
        className
      )}
      title={showRedactedHint ? text : undefined}
    >
      {processedText}
    </span>
  );
}