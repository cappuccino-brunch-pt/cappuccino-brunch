import tostaAbacate from "@/assets/tostaAbacate.jpeg";
import tostaBaconJam from "@/assets/tostaBaconJam.jpeg";
import tostaCampestre from "@/assets/tostaCampestre.jpeg";
import tostaCappuccino from "@/assets/tostaCappuccino.jpeg";
import tostaPresunto from "@/assets/tostaPresunto.jpeg";
import tostaSeul from "@/assets/tostaSeul.jpeg";
import tostaTomatoJam from "@/assets/tostaTomatoJam.jpeg";
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
                description: "C/ tosta e bacon",
                price: "5.00€",
                image: "",
            },
            {
                name: "Ovos Benedict",
                description:
                    "C/ pão de forma brioche, manteiga de alho e ervas, presunto, ovo escalfado, molho holandês e cebola frita",
                price: "9.00€",
                image: "",
            },
            {
                name: "Ovos Turkish (Çilbir)",
                description:
                    "Creme de iogurte temperado com alho, ovos escalfados, azeite aromatizado com especiarias e tosta",
                price: "8.50€",
                image: "",
            },
            {
                name: "Ovos Royale",
                description:
                    "C/ pão de forma brioche, manteiga de alho e ervas, queijo creme, salmão fumado, ovos escalfados, molho holandês e cebola frita",
                price: "10.00€",
                image: "",
                tag: "Mais Vendido",
            },
        ],
    },
    {
        id: "tostas",
        label: "Tostas",
        items: [
            {
                name: "Tosta Cappuccino",
                description:
                    "C/ pão de forma brioche, manteiga de alho e ervas, bacon ingles, cogumelos, ovos escalfados, molho holandes trufado e cebola frita",
                price: "10.00€",
                image: tostaCappuccino,
            },
            {
                name: "Tosta Campestre",
                description:
                    "Massa mãe, queijo creme, rúcula, frango e cogumelos salteados com manteiga de alho e ervas, granola salgada artesanal e creme balsâmico",
                price: "9.50€",
                tag: "Sugestão do Chef - Novo - Demorado",
                image: tostaCampestre,
            },
            {
                name: "Tosta Seul",
                description:
                    "Pão de forma com manteiga de alho e ervas, ovos mexidos, bacon, queijo cheddar, maionese de sriracha e molho coreano de maionese com leite condensado",
                price: "9.00€",
                tag: "Best Seller - Picante - Demorado",
                image: tostaSeul,
            },
            {
                name: "Tosta Salmão",
                description:
                    "Massa mãe, queijo creme, rúcula, salmão fumado e cebola frita",
                price: "8.50€",
                image: "",
            },
            {
                name: "Tosta Tomato Jam",
                description:
                    "Massa mãe, geleia de tomate, ovos mexidos, bacon, rúcula e abacate laminado",
                price: "8.00€",
                image: tostaTomatoJam,
            },
            {
                name: "Tosta Abacate",
                description:
                    "Massa mãe, pasta de abacate, ovos escalfados e sementes c/ salmão fumado",
                price: "8.50€",
                image: tostaAbacate,
            },
            {
                name: "Tosta Presunto",
                description:
                    "Massa mãe, geleia de ananás e hortelã, rúcula, presunto e queijo brie maçaricado",
                price: "8.00€",
                image: tostaPresunto,
            },
            {
                name: "Tosta Vegan",
                description:
                    "Massa mãe, pasta de abacate, tomate cherry, cogumelos, molho balsâmico e granola salgada artesanal",
                price: "7.50€",
                tag: "Vegan",
                image: "",
            },
            {
                name: "Tosta Bacon Jam",
                description: "Massa mãe, geleia de bacon e ovos mexidos",
                price: "7.00€",
                image: tostaBaconJam,
            },
        ],
    },
    {
        id: "bowls-salada",
        label: "Bowls Salada",
        items: [
            {
                name: "Salada Cappuccino",
                description:
                    "Base: mix de folhas, tomate, cebola frita, pepino, mini mozzarella e croutons. Escolha a proteína: frango, camarão, ovos (escalfados/estrelados) ou salmão fumado (+2€). Escolha o molho: iogurte, vinagrete, balsâmico ou azeite piri-piri",
                price: "8.00€",
                image: "",
            },
            {
                name: "Salada Vegan",
                description:
                    "Base: mix de folhas, tomate, cebola frita, pepino, abacate e granola salgada artesanal. Escolha o molho: vinagrete, balsâmico ou azeite piri-piri",
                price: "7.00€",
                tag: "Vegan",
                image: "",
            },
        ],
    },
    {
        id: "croissants-salgados",
        label: "Croissants Salgados",
        items: [
            {
                name: "Croissant Bacon",
                description: "Ovos mexidos e bacon",
                price: "4.50€",
                image: "",
            },
            {
                name: "Croissant Mozzarella",
                description: "Presunto, pesto e mini mozzarella",
                price: "5.00€",
                image: "",
            },
            {
                name: "Croissant Salmão",
                description: "Queijo creme, cebola frita e salmão fumado",
                price: "5.50€",
                image: "",
            },
            {
                name: "Croissant Avocado",
                description:
                    "Geleia de tomate, ovos mexidos, bacon, queijo e avocado",
                price: "6.00€",
                tag: "Best Seller - Demorado",
                image: "",
            },
        ],
    },
    {
        id: "croissants-doces",
        label: "Croissants Doces",
        items: [
            {
                name: "Croissant Nutella",
                description: "Morangos e Nutella",
                price: "4.50€",
                image: "",
            },
            {
                name: "Croissant Kinder Bueno",
                description: "Framboesa e creme Kinder Bueno",
                price: "4.50€",
                image: "",
            },
            {
                name: "Croissant Banoffee",
                description: "Banana, doce de leite cremoso e bolacha Maria",
                price: "4.50€",
                tag: "Best Seller",
                image: "",
            },
            {
                name: "Croissant Pistachio",
                description: "Framboesa, creme pistachio e pistachio triturado",
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
                name: "Panqueca Clássica c/ Manteiga e Mel",
                description: "Manteiga e mel",
                price: "4.50€",
                image: "",
            },
            {
                name: "Panqueca Clássica c/ Maple Syrup",
                description: "Manteiga e maple syrup",
                price: "5.00€",
                image: "",
            },
            {
                name: "Panqueca Nutella",
                description: "Morango, banana e Nutella",
                price: "6.00€",
                image: "",
            },
            {
                name: "Panqueca Ananás Hortelã",
                description: "Mirtilos e geleia de ananás e hortelã",
                price: "6.00€",
                image: "",
            },
            {
                name: "Panqueca Banoffee",
                description:
                    "Banana, doce de leite cremoso, bolacha Maria e chantilly",
                price: "6.00€",
                image: "",
            },
            {
                name: "Panqueca Oreo",
                description: "Framboesa e creme Oreo",
                price: "6.00€",
                image: "",
            },
            {
                name: "Panqueca Kinder Bueno",
                description: "Creme Kinder Bueno e gelado de baunilha",
                price: "7.00€",
                image: "",
            },
            {
                name: "Panqueca New York",
                description:
                    "Compota de mirtilo e caramelo de maple syrup aquecido",
                price: "7.00€",
                image: "",
            },
            {
                name: "Panqueca Lotus",
                description:
                    "Mirtilo, framboesa, gelado de baunilha, creme Lotus e maple syrup",
                price: "7.00€",
                image: "",
            },
            {
                name: "Panqueca Pistachio",
                description:
                    "Morango, gelado de baunilha, creme de pistachio e pistachio",
                price: "8.00€",
                tag: "Best Seller",
                image: "",
            },
            {
                name: "Panqueca Americana",
                description:
                    "Bacon, cheddar, ovo estrelado, cebola frita e maple syrup",
                price: "7.50€",
                image: "",
            },
        ],
    },
    {
        id: "waffles",
        label: "Waffles",
        items: [
            {
                name: "Waffle Clássico c/ Manteiga e Mel",
                description: "Manteiga e mel. Acompanha gelado de baunilha",
                price: "4.50€",
                image: "",
            },
            {
                name: "Waffle Clássico c/ Maple Syrup",
                description:
                    "Manteiga e maple syrup. Acompanha gelado de baunilha",
                price: "5.00€",
                image: "",
            },
            {
                name: "Waffle Nutella",
                description: "Morango e Nutella. Acompanha gelado de baunilha",
                price: "6.00€",
                image: "",
            },
            {
                name: "Waffle Kinder Bueno",
                description: "Creme Kinder Bueno. Acompanha gelado de baunilha",
                price: "6.00€",
                image: "",
            },
            {
                name: "Waffle Banoffee",
                description:
                    "Banana, doce de leite cremoso, bolacha Maria e chantilly. Acompanha gelado de baunilha",
                price: "6.00€",
                image: "",
            },
            {
                name: "Waffle Lotus",
                description:
                    "Mirtilos, creme Lotus e bolacha. Acompanha gelado de baunilha",
                price: "6.50€",
                image: "",
            },
            {
                name: "Waffle Pistachio",
                description:
                    "Coco e creme de pistachio. Acompanha gelado de baunilha",
                price: "7.00€",
                image: "",
            },
            {
                name: "Waffle Americano",
                description:
                    "Salada, bacon, cheddar, ovo estrelado, cebola frita e maple syrup",
                price: "7.00€",
                tag: "Best Seller",
                image: "",
            },
        ],
    },
    {
        id: "french-toast",
        label: "French Toast",
        items: [
            {
                name: "French Toast Frutos do Bosque",
                description:
                    "Compota de frutos vermelhos, morangos, framboesas e mirtilos",
                price: "7.00€",
                image: "",
            },
            {
                name: "French Toast Pistachio",
                description:
                    "Creme de pistachio, morangos, pistachio triturado e gelado",
                price: "8.00€",
                tag: "Sugestão do Chef",
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
                description: "Iogurte, granola artesanal, frutas e mel",
                price: "5.00€",
                image: "",
            },
            {
                name: "Bowl de Fruta Vegan",
                description: "Iogurte vegan, granola artesanal, frutas e agave",
                price: "6.00€",
                tag: "Vegan",
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
                description:
                    "Até 12 anos. À escolha: Bowl de Iogurte c/ compota de morango ou frutos vermelhos, ou Panqueca c/ Nutella, creme Kinder Bueno ou mel",
                price: "6.50€",
                image: "",
            },
            {
                name: "Menu American Breakfast",
                description:
                    "Prato: panqueca clássica, 2 ovos estrelados, bacon e torrada. Bebida à escolha: Coca-Cola, Compal ou Ice Tea",
                price: "8.50€",
                image: "",
            },
            {
                name: "Menu Cappuccino",
                description:
                    "Sumo à escolha. Panqueca Clássica c/ maple syrup. Tosta Bacon Jam ou Tosta Abacate (massa mãe, geleia de bacon e ovos mexidos ou massa mãe, pasta de abacate, ovos escalfados e sementes). Bebida quente: abatanado, café, cappuccino ou chá",
                price: "12.50€",
                image: "",
            },
            {
                name: "Menu Green",
                description:
                    "Matcha Latte ou Iced Matcha. Tosta Abacate (massa mãe, pasta de abacate, ovos escalfados e sementes). Croissant Pistachio (framboesa e creme pistachio)",
                price: "13.00€",
                tag: "Vegan",
                image: "",
            },
            {
                name: "Menu Tábua Cappuccino",
                description:
                    "2 Bebidas quentes: abatanado, café, cappuccino ou chá. Jarra de Sumo 1L: laranja. 2 Croissants folhados simples. Torrada em pão chapata c/ geleia de ananás e hortelã ou geleia de mirtilo. Bowl de Fruta: iogurte, granola artesanal, frutas e mel. Panqueca Clássica: manteiga e mel ou maple syrup",
                price: "33.00€",
                image: "",
            },
        ],
    },
    {
        id: "extras",
        label: "Extras",
        items: [
            {
                name: "Frutas ",
                description: "Banana/Morango/Mirtilo/Framboesa",
                price: "1.50€",
                image: "",
            },
            {
                name: "Gelado de Baunilha",
                description: "",
                price: "2.00€",
                image: "",
            },
            {
                name: "Toppings",
                description:
                    "Nutella, Creme Kinder Bueno, Creme Lotus, Compota de Mirtilo, Mel, Maple Syrup",
                price: "2.50€",
                image: "",
            },
            {
                name: "Ovo",
                description: "",
                price: "1.50€",
                image: "",
            },
            {
                name: "Bacon",
                description: "",
                price: "2.00€",
                image: "",
            },
            {
                name: "Cogumelo Salteado",
                description: "",
                price: "2.00€",
                image: "",
            },
            {
                name: "Avocado",
                description: "",
                price: "3.00€",
                image: "",
            },
            {
                name: "Salmão Fumado",
                description: "",
                price: "3.00€",
                image: "",
            },
            {
                name: "Queijo Brie",
                description: "",
                price: "2.00€",
                image: "",
            },
            {
                name: "Waffle",
                description: "",
                price: "2.50€",
                image: "",
            },
            {
                name: "Pão Chapata",
                description: "",
                price: "1.50€",
                image: "",
            },
        ],
    },
];

const drinkCategories: MenuCategory[] = [
    {
        id: "cafetaria",
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
            { name: "Lical", description: "", price: "2.00€", image: "" },
            { name: "Machiato", description: "", price: "3.00€", image: "" },
            {
                name: "Machiato Caramel",
                description: "",
                price: "3.50€",
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
                price: "3.20€",
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
                tag: "New",
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
                price: "3.50€",
                image: "",
            },
            {
                name: "Iced Dalgona Matcha",
                description:
                    "C/ geleia de frutos vermelhos / maracujá / morango",
                price: "4.50€",
                tag: "New",
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
                tag: "New",
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
                name: "Pedras de Limão",
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
                price: "2.90€",
                image: "",
            },
            { name: "Água Tónica", description: "", price: "3.50€", image: "" },
        ],
    },
    {
        id: "bebidas-alcool",
        label: "Bebidas c/ Álcool",
        items: [
            { name: "Super Bock", description: "", price: "1.90€", image: "" },
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
                name: "Sangria Branca",
                description: "",
                price: "12.00€/20.00€",
                image: "",
            },
            {
                name: "Sangria Tinta",
                description: "",
                price: "12.00€/20.00€",
                image: "",
            },
            {
                name: "Sangria Espumante Rosé",
                description: "",
                price: "15.00€/25.00€",
                image: "",
            },
        ],
    },
    {
        id: "vinhos",
        label: "Vinhos",
        items: [
            {
                name: "Esteva 37.5CL / 75CL",
                description: "",
                price: "5.00€/9.00€",
                image: "",
            },
            {
                name: "Planalto 37.5CL / 75CL",
                description: "",
                price: "5.50€/10.00€",
                image: "",
            },
            {
                name: "Mateus Rosé 37.5CL / 75CL",
                description: "",
                price: "5.50€/10.00€",
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
    const [activeCategory, setActiveCategory] = useState("para-partilhar");

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
