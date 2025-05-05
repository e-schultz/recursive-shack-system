
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp, Maximize2, Minimize2 } from 'lucide-react';

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
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [expandedSource, setExpandedSource] = useState<number | null>(null);
  const [isFullHeight, setIsFullHeight] = useState(false);
  
  if (!sources || sources.length === 0) {
    return null;
  }

  const toggleSourceExpand = (index: number) => {
    if (expandedSource === index) {
      setExpandedSource(null);
    } else {
      setExpandedSource(index);
    }
  };

  const toggleHeight = () => {
    setIsFullHeight(!isFullHeight);
  };

  return (
    <div 
      className={`fixed inset-x-0 bottom-0 z-30 backdrop-blur-md bg-black/40 border-t border-tech-grey
      ${isFullHeight ? 'h-screen pt-16 pb-4' : 'h-1/4'}`}
    >
      {/* Dev Tools Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-tech-black border-b border-tech-grey">
        <div className="flex items-center space-x-4">
          <div className="font-mono text-tech-cyan">
            FLOAT.DEVTOOLS <span className="text-tech-yellow text-xs">v0.1</span>
          </div>
          <div className="flex space-x-1">
            <button 
              className={`px-3 py-1 text-xs rounded-t font-mono ${activeTabIndex === 0 ? 'bg-tech-dark text-tech-cyan border-tech-grey border-t border-l border-r' : 'text-tech-grey'}`}
              onClick={() => setActiveTabIndex(0)}
            >
              Sources
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-t font-mono ${activeTabIndex === 1 ? 'bg-tech-dark text-tech-cyan border-tech-grey border-t border-l border-r' : 'text-tech-grey'}`}
              onClick={() => setActiveTabIndex(1)}
            >
              Console
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded-t font-mono ${activeTabIndex === 2 ? 'bg-tech-dark text-tech-cyan border-tech-grey border-t border-l border-r' : 'text-tech-grey'}`}
              onClick={() => setActiveTabIndex(2)}
            >
              Network
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs text-tech-grey font-mono">
            INSPECTING::{sectionId}
          </div>
          <button 
            onClick={toggleHeight} 
            className="text-tech-grey hover:text-tech-cyan"
            aria-label={isFullHeight ? "Minimize panel" : "Maximize panel"}
          >
            {isFullHeight ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4">
            {activeTabIndex === 0 ? (
              <div>
                <div className="mb-4">
                  <div className="text-xs text-tech-grey font-mono mb-2">
                    {sources.length} SOURCE{sources.length !== 1 ? 'S' : ''} FOUND
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
                    className="mb-4 border border-tech-grey rounded-md overflow-hidden"
                  >
                    <div 
                      className="bg-tech-black/30 p-3 border-b border-tech-grey flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSourceExpand(index)}
                    >
                      <h4 className="text-tech-cyan font-mono text-sm">
                        {source.title}
                      </h4>
                      <button className="text-tech-grey hover:text-tech-cyan">
                        {expandedSource === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>

                    <div className={`transition-all duration-200 ${expandedSource === index ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
                      <div className="p-4 bg-tech-dark/50">
                        <div className="text-tech-white text-sm mb-4 font-mono">
                          {source.excerpt}
                        </div>
                        <div className="text-tech-grey text-xs flex justify-between">
                          <span>Origin: <span className="text-tech-yellow">{source.origin}</span></span>
                          <a href="/sources" className="text-tech-cyan hover:underline">View full article →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-center mt-6">
                  <div className="inline-block border border-tech-grey px-3 py-1 rounded text-xs text-tech-cyan font-mono">
                    END OF SOURCE INSPECTION
                  </div>
                </div>
              </div>
            ) : activeTabIndex === 1 ? (
              <div className="font-mono p-4 text-tech-white">
                <div className="text-tech-grey">{'>'} console.log('Inspecting section:', '{sectionId}')</div>
                <div className="text-tech-cyan mt-1">Inspecting section: {sectionId}</div>
                <div className="text-tech-grey mt-2">{'>'} console.log('Found', {sources.length}, 'sources')</div>
                <div className="text-tech-cyan mt-1">Found {sources.length} sources</div>
                <div className="text-tech-grey mt-2">{'>'} _</div>
              </div>
            ) : (
              <div className="font-mono p-4 text-tech-white">
                <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 text-xs border-b border-tech-grey pb-2">
                  <span className="text-tech-grey">Name</span>
                  <span className="text-tech-grey">Path</span>
                  <span className="text-tech-grey">Status</span>
                  <span className="text-tech-grey">Size</span>
                </div>
                {sources.map((source, i) => (
                  <div key={i} className="grid grid-cols-[auto_1fr_auto_auto] gap-4 text-xs py-2 border-b border-tech-grey">
                    <span className="text-tech-cyan">{source.title.toLowerCase().replace(/\s+/g, '-')}.md</span>
                    <span className="text-tech-white">/sources/{source.title.toLowerCase().replace(/\s+/g, '-')}</span>
                    <span className="text-tech-green">200</span>
                    <span className="text-tech-white">{(source.excerpt.length * 1.2).toFixed(2)} KB</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
      
      {/* Dev Tools Footer */}
      <div className="px-4 py-2 border-t border-tech-grey bg-tech-black">
        <div className="flex justify-between items-center text-xs font-mono">
          <div className="text-tech-grey">FLOAT.DEVTOOLS::v0.1</div>
          <div>
            <span className="text-tech-cyan mr-2">●</span>
            <span className="text-tech-grey">CONNECTION SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraceMode;
