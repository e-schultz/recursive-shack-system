
import React from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/contexts/ThemeContext';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText = ({ text, className, as: Component = 'div' }: GlitchTextProps) => {
  const { currentTheme } = useTheme();
  
  // Different glitch effects based on theme
  const getGlitchStyle = () => {
    switch(currentTheme.name) {
      case 'vhs-edition':
        return { 
          className: "relative inline-block",
          style: { 
            textShadow: '3px 0 0 rgba(255,0,255,0.75), -3px -2px 0 rgba(0,255,255,0.75)',
            fontFamily: "'Rubik Glitch', cursive"
          },
          animationClass: "animate-[vhs-track_4s_ease-in-out_infinite]"
        };
      case 'digital-garden':
        return { 
          className: "relative inline-block",
          style: { 
            textShadow: '0 0 10px rgba(51,255,102,0.8), 0 0 20px rgba(51,255,102,0.4)',
            fontFamily: "'IBM Plex Mono', monospace"
          },
          animationClass: "animate-pulse"
        };
      default: // tech-noir
        return { 
          className: "relative inline-block",
          style: { 
            textShadow: '0.05em 0 0 rgba(255,0,255,0.75), -0.05em -0.025em 0 rgba(0,255,255,0.75)' 
          },
          animationClass: "animate-glitch"
        };
    }
  };
  
  const glitchEffect = getGlitchStyle();
  
  return (
    <Component
      className={cn(glitchEffect.className, className)}
      style={glitchEffect.style}
    >
      <span className="relative z-10">{text}</span>
      <span 
        className={`absolute left-0 top-0 opacity-70 text-tech-glitch ${glitchEffect.animationClass}`} 
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;
