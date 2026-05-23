import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="text-center py-12 relative opacity-0 animate-fade-in-up">
      {/* Controls - positioned top right */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rtl:right-auto rtl:left-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Art Deco geometric pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-96 h-96 border border-primary/10 rotate-45 absolute" />
        <div className="w-80 h-80 border border-primary/5 rotate-45 absolute" />
        <div className="w-64 h-64 border border-primary/5 rotate-45 absolute" />
      </div>

      {/* Decorative top line */}
      <div className="flex items-center justify-center gap-6 mb-8 relative">
        <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-primary to-primary" />
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-primary rotate-45" />
          <div className="w-1.5 h-1.5 bg-primary/60 rotate-45" />
          <div className="w-1.5 h-1.5 bg-primary rotate-45" />
        </div>
        <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-primary to-primary" />
      </div>

      {/* Main title */}
      <div className="relative">
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-[0.2em] mb-4 bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
          Cavalli
        </h1>
        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-[0.4em] text-foreground/80 -mt-2">
          Club
        </h2>
      </div>

      {/* Tagline */}
      <p className="font-display italic text-muted-foreground text-lg tracking-wider mt-6">
        {t("header.tagline")}
      </p>

      {/* Bottom decorative element */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60" />
        <div className="w-2 h-2 border border-primary rotate-45" />
        <div className="w-24 h-px bg-primary/40" />
        <div className="w-2 h-2 border border-primary rotate-45" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/60" />
      </div>
    </header>
  );
};

export default MenuHeader;
