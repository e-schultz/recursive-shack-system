import React, { useRef, useState, useEffect } from 'react';
import { format } from 'date-fns';
import SectionDivider from './SectionDivider';
import BlogNavigation from './BlogNavigation';
import GlitchText from './GlitchText';
import ThemeSelector from './ThemeSelector';
import { useTheme } from '@/contexts/ThemeContext';
import TraceMode from './TraceMode';
import { Book } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  author?: string;
  content: {
    id: string;
    title: string;
    body: React.ReactNode;
    sources?: {
      title: string;
      excerpt: string;
      origin: string;
    }[];
  }[];
}

const BlogPost = ({ title, date, author, content }: BlogPostProps) => {
  const [activeSection, setActiveSection] = useState(content[0]?.id || '');
  const [previousActiveSection, setPreviousActiveSection] = useState('');
  const [showTraceMode, setShowTraceMode] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { currentTheme } = useTheme();
  
  // Set up refs for each section and expose them to TraceMode
  useEffect(() => {
    content.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionRefs.current[section.id] = element;
      }
    });
  }, [content]);
  
  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for the navigation bar
      
      // Find the section that is currently in view
      let currentSection = content[0]?.id;
      
      for (let i = content.length - 1; i >= 0; i--) {
        const section = content[i];
        const element = sectionRefs.current[section.id];
        
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      
      // Store the previous active section when it changes
      if (currentSection !== activeSection) {
        setPreviousActiveSection(activeSection);
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [content, activeSection]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll to section with offset for the navigation bar
      window.scrollTo({ 
        top: element.offsetTop - 80, 
        behavior: 'smooth' 
      });
      setPreviousActiveSection(activeSection);
      setActiveSection(sectionId);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch {
      return dateString;
    }
  };

  const toggleTraceMode = () => {
    setShowTraceMode(!showTraceMode);
  };

  const getActiveSection = () => {
    return content.find(section => section.id === activeSection);
  };

  const getPreviousSection = () => {
    return content.find(section => section.id === previousActiveSection);
  };

  return (
    <div className={`glitch-container min-h-screen ${currentTheme.name}`}>
      <ThemeSelector />
      <div className="mb-12 pt-10">
        <div className="container max-w-4xl">
          <div className="flex flex-col items-center text-center mb-8">
            <p className="font-mono text-tech-yellow mb-2 text-sm">
              {formatDate(date)}
            </p>
            <h1 className="mb-4">
              <GlitchText text={title} as="span" />
            </h1>
            {author && <p className="text-muted-foreground">By {author}</p>}
          </div>
        </div>
      </div>
      
      <BlogNavigation 
        sections={content.map(section => ({ id: section.id, title: section.title }))} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <main className="container max-w-3xl py-6 relative">
        {/* Trace Mode Toggle Button */}
        <button 
          onClick={toggleTraceMode}
          className={`fixed bottom-4 right-4 z-40 p-2 rounded-full ${
            showTraceMode 
              ? 'bg-tech-cyan text-tech-black' 
              : 'bg-tech-dark border border-tech-grey text-tech-cyan'
          }`}
          title={showTraceMode ? "Hide X-Ray Mode" : "Show X-Ray Mode"}
        >
          <Book size={20} />
        </button>

        {/* Conditional Trace Mode Overlay */}
        {showTraceMode && (
          <TraceMode 
            sources={getActiveSection()?.sources || []} 
            sectionId={activeSection}
            previousSectionSources={getPreviousSection()?.sources || []}
            previousSectionId={previousActiveSection}
          />
        )}

        {content.map((section, index) => (
          <section key={section.id} id={section.id} className="mb-16">
            <h2 className="text-tech-cyan mb-6">{section.title}</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              {section.body}
            </div>
            {index < content.length - 1 && <SectionDivider />}
          </section>
        ))}

        <footer className="border-t border-tech-grey mt-24 pt-6 pb-12 text-center text-muted-foreground">
          <p className="font-mono text-sm">
            Published via FLOAT &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default BlogPost;
