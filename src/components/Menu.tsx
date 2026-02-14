import { cn } from "@/lib/utils";
import { useState } from "react";

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

const foodCategories: MenuCategory[] = [
    {
        id: "para-partilhar",
        label: "Para Partilhar",
        items: [
            {
                name: "English Muffin",
                description: "Manteiga de ervas",
                price: "3.50€",
                image: "",
            },
            {
                name: "Nachos",
                description: "Guacamole e cheddar",
                price: "5.00€",
                image: "",
            },
            {
                name: "Nachos",
                description: "Guacamole e camarão",
                price: "6.50€",
                image: "",
            },
            {
                name: "Shakshuka",
                description: "Ovos, tomate e especiarias",
                price: "6.50€",
                image: "",
            },
        ],
    },
    {
        id: "ovos",
        label: "Ovos",
        items: [
            {
                name: "Ovos Mexidos",
                description: "C/ tosta e 1 acompanhamento",
                price: "4.50€",
                image: "",
            },
            {
                name: "Ovos Benedict",
                description: "Ovos escalfados, molho holandês e bacon",
                price: "8.50€",
                image: "",
            },
            {
                name: "Ovos Royale",
                description: "Ovos escalfados, molho holandês e salmão",
                price: "9.00€",
                image: "",
            },
            {
                name: "Ovos Turkish (Çilbir)",
                description: "Iogurte, ovos escalfados e manteiga picante",
                price: "8.50€",
                tag: "BEST SELLER",
                image: "",
            },
        ],
    },
    {
        id: "tostas",
        label: "Tostas",
        items: [
            {
                name: "Tosta Abacate",
                description: "Abacate, ovos escalfados e sementes",
                price: "7.00€",
                image: "",
            },
            {
                name: "Tosta Salmão",
                description: "Salmão fumado, cream cheese e rúcula",
                price: "8.50€",
                image: "",
            },
            {
                name: "Tosta Presunto",
                description: "Presunto, queijo e rúcula",
                price: "8.00€",
                image: "",
            },
            {
                name: "Tosta Vegan",
                description: "Húmus, abacate e legumes grelhados",
                price: "7.50€",
                tag: "NEW",
                image: "",
            },
        ],
    },
    {
        id: "croissants-salgados",
        label: "Croissants Salgados",
        items: [
            {
                name: "Croissant Misto",
                description: "Fiambre e queijo",
                price: "4.00€",
                image: "",
            },
            {
                name: "Croissant Mozzarella",
                description: "Mozzarella, tomate e pesto",
                price: "4.50€",
                image: "",
            },
            {
                name: "Croissant Salmão",
                description: "Salmão fumado e queijo creme",
                price: "5.50€",
                image: "",
            },
            {
                name: "Croissant Abacate",
                description: "Abacate e ovo",
                price: "6.00€",
                image: "",
            },
        ],
    },
    {
        id: "croissants-doces",
        label: "Croissants Doces",
        items: [
            { name: "Nutella", description: "", price: "4.50€", image: "" },
            {
                name: "Kinder Bueno",
                description: "",
                price: "4.50€",
                image: "",
            },
            {
                name: "Banoffee",
                description: "Doce de leite, banana e chantilly",
                price: "5.00€",
                image: "",
            },
            {
                name: "Pistachio",
                description: "Creme de pistachio",
                price: "5.00€",
                image: "",
            },
        ],
    },
    {
        id: "panquecas",
        label: "Panquecas",
        items: [
            {
                name: "Clássica",
                description: "Xarope de ácer",
                price: "4.50€",
                image: "",
            },
            {
                name: "Nutella",
                description: "Nutella e banana",
                price: "6.00€",
                image: "",
            },
            {
                name: "Kinder Bueno",
                description: "Kinder bueno e gelado de baunilha",
                price: "6.00€",
                image: "",
            },
            {
                name: "Pistachio",
                description: "Creme de pistachio",
                price: "7.00€",
                tag: "BEST SELLER",
                image: "",
            },
        ],
    },
    {
        id: "waffles",
        label: "Waffles",
        items: [
            {
                name: "Clássica",
                description: "Xarope de ácer",
                price: "5.50€",
                image: "",
            },
            {
                name: "Nutella",
                description: "Nutella e morango",
                price: "6.00€",
                image: "",
            },
            {
                name: "Kinder Bueno",
                description: "Kinder bueno e gelado",
                price: "6.00€",
                image: "",
            },
            {
                name: "Pistachio",
                description: "Creme de pistachio",
                price: "7.00€",
                image: "",
            },
        ],
    },
    {
        id: "bowls-iogurte",
        label: "Bowls Iogurte",
        items: [
            {
                name: "Bowl de Fruta",
                description: "Granola, fruta da época e mel",
                price: "5.00€",
                image: "",
            },
            {
                name: "Bowl de Fruta Vegan",
                description: "Granola, fruta e agave",
                price: "6.00€",
                image: "",
            },
        ],
    },
    {
        id: "menus-brunch",
        label: "Menus Brunch",
        items: [
            {
                name: "Menu Kids",
                description: "Sumo + panqueca",
                price: "6.50€",
                image: "",
            },
            {
                name: "Menu American Breakfast",
                description: "Ovos, bacon e bebida",
                price: "8.50€",
                image: "",
            },
            {
                name: "Menu Cappuccino",
                description: "Panqueca + bebida",
                price: "12.50€",
                image: "",
            },
            {
                name: "Menu Green",
                description: "Matcha latte + tosta abacate",
                price: "13.00€",
                image: "",
            },
        ],
    },
    {
        id: "extras",
        label: "Extras",
        items: [
            { name: "Ovo", description: "", price: "1.00€", image: "" },
            { name: "Bacon", description: "", price: "1.50€", image: "" },
            { name: "Abacate", description: "", price: "2.00€", image: "" },
            {
                name: "Salmão Fumado",
                description: "",
                price: "2.50€",
                image: "",
            },
            { name: "Gelado", description: "", price: "1.50€", image: "" },
        ],
    },
];

const drinkCategories: MenuCategory[] = [
    {
        id: "cafeteria",
        label: "Cafetaria",
        items: [
            {
                name: "Carioca de Café",
                description: "",
                price: "0.70€",
                image: "",
            },
            {
                name: "Carioca de Limão",
                description: "",
                price: "1.00€",
                image: "",
            },
            { name: "Pingo", description: "", price: "0.80€", image: "" },
            { name: "Café", description: "", price: "0.90€", image: "" },
            { name: "Café Duplo", description: "", price: "1.80€", image: "" },
            {
                name: "Descafeinado",
                description: "",
                price: "1.00€",
                image: "",
            },
            { name: "Cevada", description: "", price: "0.80€", image: "" },
            {
                name: "Copo de Leite",
                description: "",
                price: "1.00€",
                image: "",
            },
            { name: "Americano", description: "", price: "1.50€", image: "" },
            { name: "Chá", description: "", price: "2.00€", image: "" },
            { name: "Uccino", description: "", price: "2.00€", image: "" },
            {
                name: "Macchiato Caramel",
                description: "",
                price: "3.00€",
                image: "",
            },
            { name: "Cappuccino", description: "", price: "2.50€", image: "" },
            {
                name: "Cappuccino Caramel",
                description: "",
                price: "3.00€",
                image: "",
            },
            {
                name: "Chocolate Quente",
                description: "",
                price: "3.00€",
                image: "",
            },
            { name: "Flat White", description: "", price: "3.00€", image: "" },
            { name: "Chai Latte", description: "", price: "3.50€", image: "" },
        ],
    },
    {
        id: "iced-coffees",
        label: "Iced Coffees",
        items: [
            { name: "Frappé", description: "", price: "2.70€", image: "" },
            {
                name: "Dalgona Coffee",
                description: "",
                price: "3.00€",
                image: "",
            },
            {
                name: "Caramel Frappé",
                description: "",
                price: "3.20€",
                image: "",
            },
            {
                name: "Spanish Latte",
                description: "",
                price: "3.50€",
                tag: "NEW",
                image: "",
            },
            {
                name: "Kinder Latte",
                description: "",
                price: "4.00€",
                image: "",
            },
        ],
    },
    {
        id: "matcha",
        label: "Matcha",
        items: [
            {
                name: "Matcha Latte",
                description: "",
                price: "3.50€",
                image: "",
            },
            {
                name: "Iced Matcha Latte",
                description: "",
                price: "3.80€",
                image: "",
            },
            {
                name: "Iced Dalgona Matcha",
                description:
                    "Com geleia de frutos vermelhos, maracujá ou morango",
                price: "4.50€",
                tag: "NEW",
                image: "",
            },
        ],
    },
    {
        id: "smoothies",
        label: "Smoothies",
        items: [
            { name: "Morango", description: "", price: "4.50€", image: "" },
            {
                name: "Frutos Vermelhos",
                description: "",
                price: "4.50€",
                image: "",
            },
            { name: "Maracujá", description: "", price: "4.50€", image: "" },
            {
                name: "Morango e Banana",
                description: "",
                price: "5.00€",
                tag: "NEW",
                image: "",
            },
        ],
    },
    {
        id: "sumos-naturais",
        label: "Sumos Naturais",
        items: [
            { name: "Limonada", description: "", price: "2.20€", image: "" },
            { name: "Laranja", description: "", price: "2.80€", image: "" },
            {
                name: "Laranja e Frutos Vermelhos",
                description: "",
                price: "3.20€",
                image: "",
            },
            {
                name: "Limonada de Morango",
                description: "",
                price: "3.20€",
                image: "",
            },
        ],
    },
    {
        id: "bebidas",
        label: "Bebidas",
        items: [
            { name: "Água", description: "", price: "1.10€", image: "" },
            { name: "Pedras", description: "", price: "1.20€", image: "" },
            {
                name: "Pedras Limão",
                description: "",
                price: "1.40€",
                image: "",
            },
            { name: "Compal", description: "", price: "1.80€", image: "" },
            { name: "Coca-Cola", description: "", price: "1.80€", image: "" },
            {
                name: "Coca-Cola Zero",
                description: "",
                price: "1.80€",
                image: "",
            },
            { name: "Ice Tea", description: "", price: "1.80€", image: "" },
            {
                name: "San Pellegrino",
                description: "",
                price: "2.80€",
                image: "",
            },
            { name: "Água Tónica", description: "", price: "5.50€", image: "" },
        ],
    },
    {
        id: "bebidas-alcool",
        label: "Bebidas c/ Álcool",
        items: [
            { name: "Super Bock", description: "", price: "1.80€", image: "" },
            {
                name: "Super Bock Stout",
                description: "",
                price: "1.90€",
                image: "",
            },
            { name: "Panaché", description: "", price: "2.00€", image: "" },
            {
                name: "Somersby Apple",
                description: "",
                price: "3.00€",
                image: "",
            },
            {
                name: "Somersby Blackberry",
                description: "",
                price: "3.00€",
                image: "",
            },
        ],
    },
    {
        id: "sangrias",
        label: "Sangrias 1L/2L",
        items: [
            {
                name: "Branca (1L)",
                description: "",
                price: "12.00€",
                image: "",
            },
            {
                name: "Branca (2L)",
                description: "",
                price: "20.00€",
                image: "",
            },
            { name: "Tinta (1L)", description: "", price: "12.00€", image: "" },
            { name: "Tinta (2L)", description: "", price: "20.00€", image: "" },
            {
                name: "Espumante Rosé (1L)",
                description: "",
                price: "15.00€",
                image: "",
            },
            {
                name: "Espumante Rosé (2L)",
                description: "",
                price: "25.00€",
                image: "",
            },
        ],
    },
    {
        id: "vinhos",
        label: "Vinhos",
        items: [
            {
                name: "Esteva 37.5cl",
                description: "",
                price: "5.00€",
                image: "",
            },
            { name: "Esteva 75cl", description: "", price: "9.00€", image: "" },
            {
                name: "Planalto 37.5cl",
                description: "",
                price: "5.50€",
                image: "",
            },
            {
                name: "Planalto 75cl",
                description: "",
                price: "10.00€",
                image: "",
            },
            {
                name: "Mateus Rosé 37.5cl",
                description: "",
                price: "5.50€",
                image: "",
            },
            {
                name: "Mateus Rosé 75cl",
                description: "",
                price: "10.00€",
                image: "",
            },
        ],
    },
    {
        id: "cocktails",
        label: "Cocktails",
        items: [
            { name: "Screwdriver", description: "", price: "6.50€", image: "" },
            { name: "Gin", description: "", price: "7.00€", image: "" },
            {
                name: "Aperol Spritz",
                description: "",
                price: "8.00€",
                image: "",
            },
            {
                name: "Espresso Martini",
                description: "",
                price: "8.00€",
                image: "",
            },
        ],
    },
];

const Menu = () => {
    const [activeType, setActiveType] = useState<"food" | "drink">("food");
    const [activeCategory, setActiveCategory] = useState("signatures");

    const categories = activeType === "food" ? foodCategories : drinkCategories;
    const currentCategory = categories.find((cat) => cat.id === activeCategory);

    const handleTypeChange = (type: "food" | "drink") => {
        setActiveType(type);
        const cats = type === "food" ? foodCategories : drinkCategories;
        setActiveCategory(cats[0].id);
    };

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
                        Cada prato é uma obra de arte culinária, criado com
                        ingredientes frescos e muito amor.
                    </p>
                </div>

                {/* Type Tabs (Comida / Bebida) */}
                <div className="flex justify-center gap-4 mb-6 sm:mb-8 px-2">
                    <button
                        onClick={() => handleTypeChange("food")}
                        className={cn(
                            "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 border-b-2",
                            activeType === "food"
                                ? "border-cappuccino text-cappuccino"
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-cappuccino/30",
                        )}
                    >
                        Comidas
                    </button>
                    <button
                        onClick={() => handleTypeChange("drink")}
                        className={cn(
                            "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 border-b-2",
                            activeType === "drink"
                                ? "border-cappuccino text-cappuccino"
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-cappuccino/30",
                        )}
                    >
                        Bebidas
                    </button>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                                activeCategory === category.id
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-cream text-foreground hover:bg-cappuccino/10",
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
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
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
                        Tens alergias ou preferências alimentares? Fala
                        connosco!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Menu;
