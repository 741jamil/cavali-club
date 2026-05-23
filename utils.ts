import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.tagline": "Coffee • Lounge • Chill",
    
    // Navigation
    "nav.featured": "Featured",
    "nav.cafes": "Coffees",
    "nav.icedCoffee": "Iced Coffee",
    "nav.tea": "Tea",
    "nav.icedTea": "Iced Tea",
    "nav.freshJuice": "Fresh Juice",
    "nav.mojitos": "Mojitos",
    "nav.sweets": "Pastries",
    "nav.drinks": "Drinks",
    
    // Section titles
    "section.featured": "Featured",
    "section.fullMenu": "Full Menu",
    "section.cafes": "Coffees",
    "section.tea": "Tea",
    "section.icedCoffee": "Iced Coffee",
    "section.icedTea": "Iced Tea",
    "section.freshJuice": "Fresh Juice",
    "section.cocktails": "Cocktails",
    "section.frappe": "Frappuccino",
    "section.mojitos": "Mojitos",
    "section.viennoiserie": "Pastries",
    "section.drinks": "Drinks",
    
    // Featured items
    "featured.cappuccino.desc": "Rich espresso with creamy milk foam",
    "featured.icedCaramel.desc": "Smooth espresso with caramel drizzle",
    "featured.theAuPignon.desc": "Traditional aromatic tea with pine nuts",
    "featured.orange.desc": "Freshly squeezed citrus goodness",
    "featured.mojito.desc": "Refreshing mint & lime mocktail",
    "featured.cheesecake.desc": "Creamy New York style dessert",
    
    // Footer
    "footer.prices": "All prices in Tunisian Dinars",
    "footer.thanks": "Thank you for choosing Cavalli Club",
  },
  fr: {
    // Header
    "header.tagline": "Café • Lounge • Détente",
    
    // Navigation
    "nav.featured": "À la Une",
    "nav.cafes": "Cafés",
    "nav.icedCoffee": "Café Glacé",
    "nav.tea": "Thé",
    "nav.icedTea": "Thé Glacé",
    "nav.freshJuice": "Jus Frais",
    "nav.mojitos": "Mojitos",
    "nav.sweets": "Viennoiserie",
    "nav.drinks": "Boissons",
    
    // Section titles
    "section.featured": "À la Une",
    "section.fullMenu": "Menu Complet",
    "section.cafes": "Cafés",
    "section.tea": "Thé",
    "section.icedCoffee": "Café Glacé",
    "section.icedTea": "Thé Glacé",
    "section.freshJuice": "Jus Frais",
    "section.cocktails": "Cocktails",
    "section.frappe": "Frappuccino",
    "section.mojitos": "Mojitos",
    "section.viennoiserie": "Viennoiserie",
    "section.drinks": "Boissons",
    
    // Featured items
    "featured.cappuccino.desc": "Espresso riche avec mousse de lait crémeuse",
    "featured.icedCaramel.desc": "Espresso onctueux avec filet de caramel",
    "featured.theAuPignon.desc": "Thé aromatique traditionnel aux pignons",
    "featured.orange.desc": "Orange fraîchement pressée",
    "featured.mojito.desc": "Mocktail rafraîchissant menthe & citron vert",
    "featured.cheesecake.desc": "Dessert crémeux style New York",
    
    // Footer
    "footer.prices": "Tous les prix en Dinars Tunisiens",
    "footer.thanks": "Merci d'avoir choisi Cavalli Club",
  },
  ar: {
    // Header
    "header.tagline": "قهوة • صالة • استرخاء",
    
    // Navigation
    "nav.featured": "المميزات",
    "nav.cafes": "القهوة",
    "nav.icedCoffee": "قهوة مثلجة",
    "nav.tea": "الشاي",
    "nav.icedTea": "شاي مثلج",
    "nav.freshJuice": "عصائر طازجة",
    "nav.mojitos": "موهيتو",
    "nav.sweets": "المعجنات",
    "nav.drinks": "المشروبات",
    
    // Section titles
    "section.featured": "المميزات",
    "section.fullMenu": "القائمة الكاملة",
    "section.cafes": "القهوة",
    "section.tea": "الشاي",
    "section.icedCoffee": "قهوة مثلجة",
    "section.icedTea": "شاي مثلج",
    "section.freshJuice": "عصائر طازجة",
    "section.cocktails": "كوكتيلات",
    "section.frappe": "فرابتشينو",
    "section.mojitos": "موهيتو",
    "section.viennoiserie": "المعجنات",
    "section.drinks": "المشروبات",
    
    // Featured items
    "featured.cappuccino.desc": "إسبريسو غني مع رغوة الحليب الكريمية",
    "featured.icedCaramel.desc": "إسبريسو ناعم مع الكراميل",
    "featured.theAuPignon.desc": "شاي عطري تقليدي مع الصنوبر",
    "featured.orange.desc": "برتقال طازج معصور",
    "featured.mojito.desc": "موكتيل منعش بالنعناع والليمون",
    "featured.cheesecake.desc": "حلوى كريمية على طريقة نيويورك",
    
    // Footer
    "footer.prices": "جميع الأسعار بالدينار التونسي",
    "footer.thanks": "شكراً لاختياركم كافالي كلوب",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
