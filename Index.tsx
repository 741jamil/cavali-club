import coffeeHero from "@/assets/coffee-hero.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import freshJuice from "@/assets/fresh-juice.jpg";
import mojito from "@/assets/mojito.jpg";
import dessert from "@/assets/dessert.jpg";
import tea from "@/assets/tea.jpg";

interface FeaturedItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const featuredItems: FeaturedItem[] = [
  {
    id: "hot-coffee",
    name: "Cappuccino",
    description: "Rich espresso with creamy milk foam",
    price: "5.000",
    image: coffeeHero,
    category: "Cafés",
  },
  {
    id: "iced-coffee",
    name: "Iced Caramel",
    description: "Smooth espresso with caramel drizzle",
    price: "7.000",
    image: icedCoffee,
    category: "Iced Coffee",
  },
  {
    id: "tea",
    name: "Thé au Pignon",
    description: "Traditional aromatic tea with pine nuts",
    price: "7.500",
    image: tea,
    category: "Thé",
  },
  {
    id: "fresh-juice",
    name: "Orange",
    description: "Freshly squeezed citrus goodness",
    price: "4.000",
    image: freshJuice,
    category: "Jus Frais",
  },
  {
    id: "mojito",
    name: "Vergin Mojito",
    description: "Refreshing mint & lime mocktail",
    price: "6.000",
    image: mojito,
    category: "Mojitos",
  },
  {
    id: "dessert",
    name: "Cheesecake",
    description: "Creamy New York style dessert",
    price: "8.500",
    image: dessert,
    category: "Viennoiserie",
  },
];

export const categories = [
  { id: "featured", label: "Featured", icon: "✨" },
  { id: "hot-coffee", label: "Cafés", icon: "☕" },
  { id: "iced-coffee", label: "Iced Coffee", icon: "🧊" },
  { id: "tea", label: "Thé", icon: "🍵" },
  { id: "iced-tea", label: "Iced Thé", icon: "🧋" },
  { id: "fresh-juice", label: "Jus Frais", icon: "🍊" },
  { id: "mojitos", label: "Mojitos", icon: "🍃" },
  { id: "sweets", label: "Viennoiserie", icon: "🥐" },
  { id: "drinks", label: "Drinks", icon: "💧" },
];
