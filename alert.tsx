import MenuItem from "./MenuItem";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface MenuItemData {
  name: string;
  description?: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItemData[];
  baseDelay?: number;
}

const MenuSection = ({ title, items, baseDelay = 0 }: MenuSectionProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
  });

  return (
    <div 
      ref={ref}
      className={`mb-8 transition-all duration-700 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${baseDelay}ms` }}
    >
      {/* Card container with Art Deco styling */}
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/60 rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
        {/* Top decorative border */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`} />
        
        {/* Corner accents */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/40 transition-all duration-500 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`} />
        <div className={`absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/40 transition-all duration-500 delay-600 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`} />
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/40 transition-all duration-500 delay-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`} />
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/40 transition-all duration-500 delay-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`} />
        
        {/* Section header */}
        <div className="px-5 pt-5 pb-3 border-b border-border/40">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 bg-primary rotate-45 flex-shrink-0 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 scale-100 rotate-45" : "opacity-0 scale-0 rotate-0"
            }`} />
            <h2 className={`font-display text-foreground text-lg uppercase tracking-wider transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}>
              {title}
            </h2>
            <div className={`flex-1 h-px bg-gradient-to-r from-border/60 to-transparent transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 scale-x-100 origin-left" : "opacity-0 scale-x-0 origin-left"
            }`} />
          </div>
        </div>
        
        {/* Items container */}
        <div className="px-5 py-3 space-y-0.5">
          {items.map((item, index) => (
            <div
              key={item.name}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: isVisible ? `${400 + index * 80}ms` : "0ms" }}
            >
              <MenuItem
                name={item.name}
                description={item.description}
                price={item.price}
                delay={0}
              />
            </div>
          ))}
        </div>
        
        {/* Bottom decorative border */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`} />
      </div>
    </div>
  );
};

export default MenuSection;
