import { useState } from "react";
import { cn } from "@/lib/utils";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "signatures",
    label: "Assinaturas",
    items: [
      {
        name: "Cappuccino Royale",
        description: "Ovos benedict com salmão fumado, hollandaise de trufa negra e micro-ervas",
        price: "€16",
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1608039829572-9b43c9c4a2bb?w=400"
      },
      {
        name: "Avocado Toast Deluxe",
        description: "Abacate cremoso, ovo pochê, sementes de sésamo e molho de shoyu",
        price: "€14",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400"
      },
      {
        name: "Fluffy Pancakes",
        description: "Torre de panquecas com frutos vermelhos, mascarpone e maple syrup",
        price: "€13",
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400"
      },
      {
        name: "Açaí Power Bowl",
        description: "Açaí brasileiro com granola caseira, frutas frescas e manteiga de amendoim",
        price: "€12",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400"
      }
    ]
  },
  {
    id: "salty",
    label: "Salgados",
    items: [
      {
        name: "Croissant Presunto & Queijo",
        description: "Croissant artesanal com presunto ibérico e queijo gruyère gratinado",
        price: "€11",
        image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400"
      },
      {
        name: "Shakshuka",
        description: "Ovos pochê em molho de tomate especiado com pão tostado",
        price: "€13",
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=400"
      },
      {
        name: "Breakfast Burrito",
        description: "Tortilha com ovos mexidos, bacon, feijão preto e guacamole",
        price: "€14",
        tag: "Novo",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400"
      },
      {
        name: "Bagel de Salmão",
        description: "Bagel com cream cheese, salmão fumado, alcaparras e cebola roxa",
        price: "€15",
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=400"
      }
    ]
  },
  {
    id: "sweet",
    label: "Doces",
    items: [
      {
        name: "French Toast",
        description: "Brioche caramelizado com canela, frutas grelhadas e chantilly",
        price: "€12",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400"
      },
      {
        name: "Waffle Belga",
        description: "Waffle crocante com nutella, morangos frescos e amêndoas",
        price: "€11",
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400"
      },
      {
        name: "Croissant de Pistacho",
        description: "Croissant folhado recheado com creme de pistácio e framboesas",
        price: "€7",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
      },
      {
        name: "Granola Bowl",
        description: "Iogurte grego com granola caseira, mel e frutas da época",
        price: "€9",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400"
      }
    ]
  },
  {
    id: "drinks",
    label: "Bebidas",
    items: [
      {
        name: "Specialty Cappuccino",
        description: "Café de especialidade com leite vaporizado e arte latte",
        price: "€4",
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400"
      },
      {
        name: "Matcha Latte",
        description: "Matcha japonês ceremonial com leite de aveia",
        price: "€5",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400"
      },
      {
        name: "Fresh Juice",
        description: "Sumo natural de laranja, manga ou frutos vermelhos",
        price: "€5",
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400"
      },
      {
        name: "Mimosa",
        description: "Espumante com sumo de laranja fresco",
        price: "€8",
        image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=400"
      }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("signatures");

  const currentCategory = menuData.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-cappuccino tracking-wider uppercase mb-4">
            O Nosso Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Pratos que Contam Histórias
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada prato é uma obra de arte culinária, criado com ingredientes 
            frescos e muito amor.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-cream text-foreground hover:bg-cappuccino/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {currentCategory?.items.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                    <h3 className="font-serif text-base sm:text-xl font-semibold text-foreground line-clamp-1">
                      {item.name}
                    </h3>
                    <span className="text-sm sm:text-lg font-semibold text-cappuccino flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  {item.tag && (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-berry/10 text-berry rounded-full mb-1 sm:mb-2">
                      {item.tag}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tens alergias ou preferências alimentares? Fala connosco!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
