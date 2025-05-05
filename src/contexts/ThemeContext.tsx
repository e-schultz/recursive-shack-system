
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available themes
export type ThemeName = 'tech-noir' | 'vhs-edition' | 'digital-garden';

export interface Theme {
  name: ThemeName;
  label: string;
  description: string;
}

export const themes: Theme[] = [
  {
    name: 'tech-noir',
    label: 'Tech-Noir',
    description: 'Cyberpunk-inspired dark theme with cyan and yellow accents'
  },
  {
    name: 'vhs-edition',
    label: 'VHS Edition',
    description: 'Glitchy 80s-90s analog aesthetic with hot pink'
  },
  {
    name: 'digital-garden',
    label: 'Digital Garden',
    description: 'Neon green and pink cyberpunk digital garden'
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  randomizeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  // Apply theme class to body element
  useEffect(() => {
    document.body.className = currentTheme.name;
  }, [currentTheme]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('shacks-theme', theme.name);
  };

  const randomizeTheme = () => {
    const otherThemes = themes.filter(theme => theme.name !== currentTheme.name);
    const randomTheme = otherThemes[Math.floor(Math.random() * otherThemes.length)];
    setTheme(randomTheme);
  };

  // Load saved theme from localStorage on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('shacks-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    } else {
      // Optional: Start with a random theme
      const randomIndex = Math.floor(Math.random() * themes.length);
      setCurrentTheme(themes[randomIndex]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, randomizeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
