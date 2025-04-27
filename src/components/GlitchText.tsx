
import React from 'react';
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText = ({ text, className, as: Component = 'div' }: GlitchTextProps) => {
  return (
    <Component
      className={cn("relative inline-block", className)}
      style={{ textShadow: '0.05em 0 0 rgba(255,0,255,0.75), -0.05em -0.025em 0 rgba(0,255,255,0.75)' }}
    >
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute left-0 top-0 opacity-70 text-tech-glitch animate-glitch" 
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;
