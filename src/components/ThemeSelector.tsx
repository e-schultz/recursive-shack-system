
import React from 'react';
import { useTheme, themes } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';

const ThemeSelector = () => {
  const { currentTheme, setTheme, randomizeTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <Button 
          variant="outline"
          size="sm"
          className="bg-tech-dark border border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-black"
          onClick={randomizeTheme}
          title="Randomize Theme"
        >
          <Shuffle size={16} className="mr-2" />
          <span className="hidden sm:inline">Change Theme</span>
        </Button>
        
        <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-tech-dark border border-tech-grey rounded-md shadow-lg overflow-hidden">
          {themes.map(theme => (
            <button
              key={theme.name}
              className={`w-full text-left px-4 py-2 hover:bg-tech-grey transition-colors ${
                theme.name === currentTheme.name ? 'bg-tech-grey text-tech-cyan' : 'text-tech-white'
              }`}
              onClick={() => setTheme(theme)}
            >
              <div className="font-mono text-sm">{theme.label}</div>
              <div className="text-xs text-muted-foreground">{theme.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
