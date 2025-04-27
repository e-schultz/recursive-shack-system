
import React from 'react';
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
}

interface BlogNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const BlogNavigation = ({ sections, activeSection, onSectionClick }: BlogNavigationProps) => {
  return (
    <nav className="sticky top-0 py-4 bg-tech-black/80 backdrop-blur-sm z-50 border-b border-tech-grey">
      <div className="container">
        <ul className="flex overflow-x-auto pb-2 gap-4 md:gap-6 no-scrollbar items-center justify-start md:justify-center">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={cn(
                  "whitespace-nowrap text-sm font-mono transition-colors",
                  activeSection === section.id
                    ? "text-tech-cyan"
                    : "text-muted-foreground hover:text-tech-white"
                )}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BlogNavigation;
