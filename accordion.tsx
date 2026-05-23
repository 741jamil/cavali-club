interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  delay?: number;
}

const MenuItem = ({ name, description, price }: MenuItemProps) => {
  return (
    <div 
      className="group relative flex justify-between items-baseline py-3 hover:bg-primary/5 px-3 -mx-3 rounded-sm transition-all duration-300 border-l-2 border-transparent hover:border-primary"
    >
      <div className="flex-1 min-w-0">
        <span className="font-body font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-300 tracking-wide">
          {name}
        </span>
        {description && (
          <span className="block text-xs text-muted-foreground mt-1 italic leading-relaxed">
            {description}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-3 ml-4">
        <div className="flex-1 min-w-8 border-b border-dotted border-muted-foreground/20 group-hover:border-primary/30 transition-colors duration-300" />
        <span className="font-display text-primary font-semibold text-base tabular-nums group-hover:scale-105 transition-transform duration-300">
          {price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
