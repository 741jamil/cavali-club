import { featuredItems } from "@/data/featuredData";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const descriptionKeys: Record<string, string> = {
  "hot-coffee": "featured.cappuccino.desc",
  "iced-coffee": "featured.icedCaramel.desc",
  "tea": "featured.theAuPignon.desc",
  "fresh-juice": "featured.orange.desc",
  "mojito": "featured.mojito.desc",
  "dessert": "featured.cheesecake.desc",
};

const FeaturedSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const { t, dir } = useLanguage();

  return (
    <section className="mb-16" dir={dir}>
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className={`flex-1 h-px bg-gradient-to-r from-transparent to-border transition-all duration-1000 delay-200 origin-right ${
          headerVisible ? "scale-x-100" : "scale-x-0"
        }`} />
        <div className="flex items-center gap-3">
          <div className={`w-1.5 h-1.5 bg-primary transition-all duration-500 delay-300 ${
            headerVisible ? "opacity-100 rotate-45 scale-100" : "opacity-0 rotate-0 scale-0"
          }`} />
          <h2 className={`font-display text-primary text-xl uppercase tracking-[0.3em] transition-all duration-500 delay-400 ${
            headerVisible ? "opacity-100" : "opacity-0"
          }`}>
            {t("section.featured")}
          </h2>
          <div className={`w-1.5 h-1.5 bg-primary transition-all duration-500 delay-300 ${
            headerVisible ? "opacity-100 rotate-45 scale-100" : "opacity-0 rotate-0 scale-0"
          }`} />
        </div>
        <div className={`flex-1 h-px bg-gradient-to-l from-transparent to-border transition-all duration-1000 delay-200 origin-left ${
          headerVisible ? "scale-x-100" : "scale-x-0"
        }`} />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {featuredItems.map((item, index) => (
          <FeaturedCard key={item.id} item={item} index={index} descriptionKey={descriptionKeys[item.id]} />
        ))}
      </div>
    </section>
  );
};

interface FeaturedCardProps {
  item: typeof featuredItems[0];
  index: number;
  descriptionKey?: string;
}

const FeaturedCard = ({ item, index, descriptionKey }: FeaturedCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px",
  });
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-sm bg-card cursor-pointer transition-all duration-700 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
            isVisible ? "scale-100" : "scale-110"
          }`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Copper accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-all duration-700 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-primary font-body mb-2 border border-primary/30 px-2 py-0.5 rounded-sm">
          {item.category}
        </span>
        <h3 className="font-display text-foreground text-base md:text-lg leading-tight group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-xs mt-1.5 line-clamp-2">
          {descriptionKey ? t(descriptionKey) : item.description}
        </p>
        <div className="flex items-baseline justify-between mt-3 pt-3 border-t border-border/50">
          <span className="font-display text-primary font-bold text-lg">
            {item.price}
          </span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
            TND
          </span>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default FeaturedSection;
