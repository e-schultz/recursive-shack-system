
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface SourceProps {
  title: string;
  excerpt: string;
  origin: string;
}

interface TraceModeProps {
  sources: SourceProps[];
  sectionId: string;
}

const TraceMode = ({ sources, sectionId }: TraceModeProps) => {
  const { currentTheme } = useTheme();
  
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 overflow-y-auto pt-16 pb-4 px-4 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className={`w-full max-w-2xl mx-auto bg-tech-dark border border-tech-grey rounded-md overflow-hidden`}>
        <div className="border-b border-tech-grey p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-tech-cyan font-mono">
              FLOAT.TRACE::X-RAY <span className="text-tech-yellow text-xs">v0.1</span>
            </h3>
            <div className="text-xs text-tech-grey font-mono">
              SECTION::{sectionId}
            </div>
          </div>
        </div>
        
        <div className="p-4 max-h-[70vh] overflow-y-auto">
          <div className="mb-4">
            <div className="text-xs text-tech-grey font-mono mb-2">
              ORIGINS::MAPPED
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 bg-tech-cyan rounded-full"></div>
              <div className="h-0.5 flex-1 bg-tech-grey"></div>
              <div className="h-2 w-2 bg-tech-yellow rounded-full"></div>
            </div>
          </div>

          {sources.map((source, index) => (
            <div 
              key={index} 
              className="mb-6 border border-tech-grey rounded-md overflow-hidden"
            >
              <div className="bg-tech-black/30 p-3 border-b border-tech-grey">
                <h4 className="text-tech-cyan font-mono text-sm">{source.title}</h4>
              </div>
              <div className="p-4">
                <div className="text-tech-white text-sm mb-4 font-mono">
                  {source.excerpt}
                </div>
                <div className="text-tech-grey text-xs">
                  Origin: <span className="text-tech-yellow">{source.origin}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-6">
            <div className="inline-block border border-tech-grey px-3 py-1 rounded text-xs text-tech-cyan font-mono">
              TRACING COMPLETE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraceMode;
