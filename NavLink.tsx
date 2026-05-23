import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ar", label: "ع", flag: "🇸🇦" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-background/50 backdrop-blur-sm border border-border rounded-full px-2 py-1">
      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
      <div className="flex gap-0.5">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              px-2 py-1 rounded-full text-xs font-medium transition-all duration-300
              ${
                language === lang.code
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }
            `}
            aria-label={`Switch to ${lang.label}`}
          >
            <span className="hidden sm:inline">{lang.flag}</span>
            <span className="sm:ml-1">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
