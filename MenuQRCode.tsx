import { useState, useEffect } from "react";
import { categories } from "@/data/featuredData";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const categoryTranslationKeys: Record<string, string> = {
  featured: "nav.featured",
  "hot-coffee": "nav.cafes",
  "iced-coffee": "nav.icedCoffee",
  tea: "nav.tea",
  "iced-tea": "nav.icedTea",
  "fresh-juice": "nav.freshJuice",
  mojitos: "nav.mojitos",
  sweets: "nav.sweets",
  drinks: "nav.drinks",
};

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const { t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-500 mb-10 ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border py-4 px-4"
          : "relative"
      }`}
      dir={dir}
    >
      <div className={`${isSticky ? "max-w-4xl mx-auto" : ""}`}>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-body whitespace-nowrap transition-all duration-300 rounded-sm ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span className="uppercase tracking-wider text-xs">
                {t(categoryTranslationKeys[category.id] || category.label)}
              </span>
              
              {/* Active indicator */}
              {activeCategory === category.id && (
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
