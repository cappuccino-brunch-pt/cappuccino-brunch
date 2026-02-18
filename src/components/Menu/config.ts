import bowlFruta from "@/assets/bowlFruta.jpeg";
import croissantAvocado from "@/assets/croissantAvocado.jpeg";
import croissantBacon from "@/assets/croissantBacon.jpeg";
import croissantMozzarella from "@/assets/croissantMozzarella.jpeg";
import croissantPistachio from "@/assets/croissantPistachio.jpeg";
import croissantSalmao from "@/assets/croissantSalmao.jpeg";
import englishMuffinManteigaDeErvas from "@/assets/englishMuffinManteigaDeErvas.jpeg";
// import menuTabuaCappuccino from "@/assets/menuTabuaCappuccino.jpeg";
import nachosGuacamole from "@/assets/nachosGuacamole.jpeg";
import ovosBenedictEnglishMuffin from "@/assets/ovosBenedictEnglishMuffin.jpeg";
import ovosMexidosComBacon from "@/assets/ovosMexidosComBacon.jpeg";
import ovosRoyalePaoBrioche from "@/assets/ovosRoyalePaoBrioche.jpeg";
import ovosTurkish from "@/assets/ovosTurkish.jpeg";
import panquecaAmericana from "@/assets/panquecaAmericana.jpeg";
import panquecaAnanasHortela from "@/assets/panquecaAnanasHortela.jpeg";
import panquecaBanoffee from "@/assets/panquecaBanoffee.jpeg";
import panquecaKinder from "@/assets/panquecaKinder.jpeg";
import panquecaLotus from "@/assets/panquecaLotus.jpeg";
import panquecaNewYork from "@/assets/panquecaNewYork.jpeg";
import panquecaNutella from "@/assets/panquecaNutella.jpeg";
import panquecaOreo from "@/assets/panquecaOreo.jpeg";
import saladaCappuccino from "@/assets/saladaCappuccino.jpeg";
import shrimpBites from "@/assets/shrimpBites.jpeg";
import tostaAbacate from "@/assets/tostaAbacate.jpeg";
import tostaBaconJam from "@/assets/tostaBaconJam.jpeg";
import tostaCampestre from "@/assets/tostaCampestre.jpeg";
import tostaCappuccinoPaoBrioche from "@/assets/tostaCappuccinoPaoBrioche.jpeg";
import tostaPresunto from "@/assets/tostaPresunto.jpeg";
import tostaSeul from "@/assets/tostaSeul.jpeg";
import tostaTomatoJam from "@/assets/tostaTomatoJam.jpeg";
import waffleAmericano from "@/assets/waffleAmericano.jpeg";
import waffleBanoffee from "@/assets/waffleBanoffee.jpeg";
import wafflePistachio from "@/assets/wafflePistachio.jpeg";
import { MenuTagType } from "@/components/Menu/components/MenuTag";

interface MenuItem {
    name: string;
    description: string;
    price: string;
    tags?: MenuTagType[];
    image: string;
}

interface MenuCategory {
    id: string;
    label: string;
    description?: string;
    items: MenuItem[];
}

export enum MENU_TYPES {
    FOOD = "food",
    DRINK = "drink",
}

export const FOODS_MENU: MenuCategory[] = [
    {
        id: "para-partilhar",
        label: "Para Partilhar",
        items: [
            {
                name: "English Muffin",
                description: "C/ manteiga de alho e ervas",
                price: "3.50€",
                image: englishMuffinManteigaDeErvas,
            },
            {
                name: "English Muffin Gratinado",
                description: "C/ manteiga de alho e ervas e queijo gratinado",
                price: "4.00€",
                image: "",
            },
            {
                name: "Caprese",
                description: "Tomate cherry, mini mozzarella e pesto",
                price: "5.00€",
                image: "",
            },
            {
                name: "Nachos",
                description: "Com guacamole",
                price: "5.50€",
                image: nachosGuacamole,
            },
            {
                name: "Shrimp Bites",
                description: "Ships, guacamole e camarão",
                price: "6.50€",
                image: shrimpBites,
            },
        ],
    },
    {
        id: "ovos",
        label: "Ovos",
        description:
            "Acompanham mix de salada e sementes variadas (excepto Ovos Turkish)",
        items: [
            {
                name: "Ovos Mexidos c/ Tosta",
                description: "",
                price: "4.50€",
                image: "",
            },
            {
                name: "Ovos Mexidos c/ Tosta e Bacon",
                description: "",
                price: "5.00€",
                image: ovosMexidosComBacon,
            },
            {
                name: "Ovos Benedict c/ English Muffin",
                description:
                    "Maçã de alho e ervas, presunto, ovo escalfado, molho holandês e cebola frita.  ",
                price: "8.00€",
                image: ovosBenedictEnglishMuffin,
            },
            {
                name: "Ovos Benedict c/ Pão de Forma Brioche",
                description:
                    "Maçã de alho e ervas, presunto, ovo escalfado, molho holandês e cebola frita.  ",
                price: "9.00€",
                image: "",
            },
            {
                name: "Ovos Turkish (Çilbir)",
                description:
                    "Creme de iogurte temperado com alho, ovos escalfados e azeite aromatizado com especiarias e tosta",
                price: "8.50€",
                image: ovosTurkish,
            },
            {
                name: "Ovos Royale c/ English Muffin",
                description:
                    "Maçã de alho e ervas, salmão fumado, ovos escalfados, molho holandês e cebola frita. ",
                price: "9.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: "",
            },
            {
                name: "Ovos Royale c/ Pão de Forma Brioche",
                description:
                    "Maçã de alho e ervas, salmão fumado, ovos escalfados, molho holandês e cebola frita. ",
                price: "10.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: ovosRoyalePaoBrioche,
            },
        ],
    },
    {
        id: "tostas",
        label: "Tostas",
        description:
            "Todas as tostas acompanham mix de salada e sementes variadas",
        items: [
            {
                name: "Tosta Cappuccino",
                description:
                    "C/ English Muffin e manteiga de alho e ervas, bacon inglês, cogumelos, ovos escalfados, molho holandês triturado e cebola frita",
                price: "9.00€",
                tags: [MenuTagType.LONG_COOKING],
                image: "",
            },
            {
                name: "Tosta Cappuccino C/ Pão de Forma Brioche",
                description:
                    "C/ Pão de Forma Brioche e manteiga de alho e ervas, bacon inglês, cogumelos, ovos escalfados, molho holandês triturado e cebola frita",
                price: "10.00€",
                tags: [MenuTagType.LONG_COOKING],
                image: tostaCappuccinoPaoBrioche,
            },
            {
                name: "Tosta Campestre",
                description:
                    "Massa mãe, queijo creme, rúcula, frango e cogumelos salteados com manteiga de alho e ervas, granola salgada artesanal e crème balsâmico",
                price: "9.50€",
                tags: [
                    MenuTagType.CHEF_SUGGESTION,
                    MenuTagType.NEW,
                    MenuTagType.LONG_COOKING,
                ],
                image: tostaCampestre,
            },
            {
                name: "Tosta Seul",
                description:
                    "Pão de forma com manteiga de alho e ervas, ovos mexidos, bacon, queijo cheddar, maionese de sriracha e molho coreano de maionese com leite condensado",
                price: "9.00€",
                tags: [
                    MenuTagType.BEST_SELLER,
                    MenuTagType.SPICY,
                    MenuTagType.LONG_COOKING,
                ],
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
                    "Massa mãe, pasta de abacate, ovos escalfados e sementes",
                price: "7.00€",
                image: tostaAbacate,
            },
            {
                name: "Tosta Abacate c/ Salmão Fumado",
                description:
                    "Massa mãe, pasta de abacate, ovos escalfados, sementes e salmão fumado",
                price: "8.50€",
                image: "",
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
                tags: [MenuTagType.VEGAN],
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
                image: saladaCappuccino,
            },
            {
                name: "Salada Vegan",
                description:
                    "Base: mix de folhas, tomate, cebola frita, pepino, abacate e granola salgada artesanal. Escolha o molho: vinagrete, balsâmico ou azeite piri-piri",
                price: "7.00€",
                tags: [MenuTagType.VEGAN],
                image: "",
            },
        ],
    },
    {
        id: "croissants-salgados",
        label: "Croissants Salgados",
        description: "Acompanham mix de salada e sementes variadas",
        items: [
            {
                name: "Croissant Bacon",
                description: "Ovos mexidos e bacon",
                price: "4.50€",
                image: croissantBacon,
            },
            {
                name: "Croissant Mozzarella",
                description: "Presunto, pesto e mini mozzarella",
                price: "5.00€",
                image: croissantMozzarella,
            },
            {
                name: "Croissant Salmão",
                description: "Queijo creme, cebola frita e salmão fumado",
                price: "5.50€",
                image: croissantSalmao,
            },
            {
                name: "Croissant Avocado",
                description:
                    "Geleia de tomate, ovos mexidos, bacon, queijo e avocado",
                price: "6.00€",
                tags: [MenuTagType.BEST_SELLER, MenuTagType.LONG_COOKING],
                image: croissantAvocado,
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
                tags: [MenuTagType.BEST_SELLER],
                image: "",
            },
            {
                name: "Croissant Pistachio",
                description: "Framboesa, creme pistachio e pistachio triturado",
                price: "5.00€",
                image: croissantPistachio,
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
                image: panquecaNutella,
            },
            {
                name: "Panqueca Ananás Hortelã",
                description: "Mirtilos e geleia de ananás e hortelã",
                price: "6.00€",
                image: panquecaAnanasHortela,
            },
            {
                name: "Panqueca Banoffee",
                description:
                    "Banana, doce de leite cremoso, bolacha Maria e chantilly",
                price: "6.00€",
                image: panquecaBanoffee,
            },
            {
                name: "Panqueca Oreo",
                description: "Framboesa e creme Oreo",
                price: "6.00€",
                image: panquecaOreo,
            },
            {
                name: "Panqueca Kinder Bueno",
                description: "Creme Kinder Bueno e gelado de baunilha",
                price: "7.00€",
                image: panquecaKinder,
            },
            {
                name: "Panqueca New York",
                description:
                    "Compota de mirtilo e caramelo de maple syrup aquecido",
                price: "7.00€",
                image: panquecaNewYork,
            },
            {
                name: "Panqueca Lotus",
                description:
                    "Mirtilo, framboesa, gelado de baunilha, creme Lotus e maple syrup",
                price: "7.00€",
                image: panquecaLotus,
            },
            {
                name: "Panqueca Pistachio",
                description:
                    "Morango, gelado de baunilha, creme de pistachio e pistachio",
                price: "8.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: "",
            },
            {
                name: "Panqueca Americana",
                description:
                    "Bacon, cheddar, ovo estrelado, cebola frita e maple syrup",
                price: "7.50€",
                image: panquecaAmericana,
            },
        ],
    },
    {
        id: "waffles",
        label: "Waffles",
        description: "Acompanham gelado de baunilha(exceto Waffle Americano)",
        items: [
            {
                name: "Waffle Clássico c/ Manteiga e Mel",
                description: "Manteiga e mel",
                price: "4.50€",
                image: "",
            },
            {
                name: "Waffle Clássico c/ Maple Syrup",
                description: "Manteiga e maple syrup",
                price: "5.00€",
                image: "",
            },
            {
                name: "Waffle Nutella",
                description: "Morango e Nutella",
                price: "6.00€",
                image: "",
            },
            {
                name: "Waffle Kinder Bueno",
                description: "Creme Kinder Bueno",
                price: "6.00€",
                image: "",
            },
            {
                name: "Waffle Banoffee",
                description:
                    "Banana, doce de leite cremoso, bolacha Maria e chantilly",
                price: "6.00€",
                image: waffleBanoffee,
            },
            {
                name: "Waffle Lotus",
                description: "Mirtilos, creme Lotus e bolacha",
                price: "6.50€",
                image: "",
            },
            {
                name: "Waffle Pistachio",
                description: "Coco e creme de pistachio",
                price: "7.00€",
                image: wafflePistachio,
            },
            {
                name: "Waffle Americano",
                description:
                    "Salada, bacon, cheddar, ovo estrelado, cebola frita e maple syrup",
                price: "7.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: waffleAmericano,
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
                tags: [MenuTagType.CHEF_SUGGESTION],
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
                image: bowlFruta,
            },
            {
                name: "Bowl de Fruta Vegan",
                description: "Iogurte vegan, granola artesanal, frutas e agave",
                price: "6.00€",
                tags: [MenuTagType.VEGAN],
                image: "",
            },
        ],
    },
    {
        id: "menus-brunch",
        label: "Menus Brunch",
        description: "Não sujeito a alterações",
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
                image: "",
            },
            {
                name: "Menu Tábua Cappuccino",
                description:
                    "2 Bebidas quentes: abatanado, café, cappuccino ou chá. Jarra de Sumo 1L: laranja. 2 Croissants folhados simples. Torrada em pão chapata c/ geleia de ananás e hortelã ou geleia de mirtilo. Bowl de Fruta: iogurte, granola artesanal, frutas e mel. Panqueca Clássica: manteiga e mel ou maple syrup",
                price: "33.00€",
                image: "menuTabuaCappuccino",
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
                name: "Creme de pistachio",
                description: "",
                price: "3.00€",
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

export const DRINKS_MENU: MenuCategory[] = [
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
                tags: [MenuTagType.NEW],
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
                tags: [MenuTagType.NEW],
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
                tags: [MenuTagType.NEW],
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

export const MENU_CONFIG: Record<MENU_TYPES, MenuCategory[]> = {
    [MENU_TYPES.FOOD]: FOODS_MENU,
    [MENU_TYPES.DRINK]: DRINKS_MENU,
};
