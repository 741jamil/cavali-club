import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-sm border border-border/50 bg-card/50">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative p-2.5 rounded-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
            theme === "dark" 
              ? "rotate-90 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
            theme === "dark" 
              ? "rotate-0 scale-100 opacity-100" 
              : "-rotate-90 scale-0 opacity-0"
          }`} 
        />
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;
