import bowlFruta from "@/assets/menu/bowlFruta.jpeg";
import caprese from "@/assets/menu/caprese.jpeg";
import croissantAvocado from "@/assets/menu/croissantAvocado.jpeg";
import croissantBacon from "@/assets/menu/croissantBacon.jpeg";
import croissantBanoffee from "@/assets/menu/croissantBanoffee.jpeg";
import croissantKinder from "@/assets/menu/croissantKinder.jpeg";
import croissantMozzarella from "@/assets/menu/croissantMozzarella.jpeg";
import croissantPistachio from "@/assets/menu/croissantPistachio.jpeg";
import croissantSalmao from "@/assets/menu/croissantSalmao.jpeg";
import englishMuffinManteigaDeErvas from "@/assets/menu/englishMuffinManteigaDeErvas.jpeg";
import frenchToastFrutosDoBosque from "@/assets/menu/frenchToastFrutosDoBosque.jpeg";
import frenchToastPistachio from "@/assets/menu/frenchToastPistachio.jpeg";
import menuAmericanBreakfast from "@/assets/menu/menuAmericanBreakfast.jpeg";
import menuTabuaCappuccino from "@/assets/menu/menuTabuaCappuccino.jpeg";
import nachosGuacamole from "@/assets/menu/nachosGuacamole.jpeg";
import ovosBenedictEnglishMuffin from "@/assets/menu/ovosBenedictEnglishMuffin.jpeg";
import ovosMexidosComBacon from "@/assets/menu/ovosMexidosComBacon.jpeg";
import ovosRoyalePaoBrioche from "@/assets/menu/ovosRoyalePaoBrioche.jpeg";
import ovosTurkish from "@/assets/menu/ovosTurkish.jpeg";
import panquecaAmericana from "@/assets/menu/panquecaAmericana.jpeg";
import panquecaAnanasHortela from "@/assets/menu/panquecaAnanasHortela.jpeg";
import panquecaBanoffee from "@/assets/menu/panquecaBanoffee.jpeg";
import panquecaClassicaMapleSyrup from "@/assets/menu/panquecaClassicaMapleSyrup.jpeg";
import panquecaKinder from "@/assets/menu/panquecaKinder.jpeg";
import panquecaLotus from "@/assets/menu/panquecaLotus.jpeg";
import panquecaNewYork from "@/assets/menu/panquecaNewYork.jpeg";
import panquecaNutella from "@/assets/menu/panquecaNutella.jpeg";
import panquecaOreo from "@/assets/menu/panquecaOreo.jpeg";
import panquecaPistachio from "@/assets/menu/panquecaPistachio.jpeg";
import saladaCappuccino from "@/assets/menu/saladaCappuccino.jpeg";
import shrimpBites from "@/assets/menu/shrimpBites.jpeg";
import tostaAbacate from "@/assets/menu/tostaAbacate.jpeg";
import tostaBaconJam from "@/assets/menu/tostaBaconJam.jpeg";
import tostaCampestre from "@/assets/menu/tostaCampestre.jpeg";
import tostaCappuccinoPaoBrioche from "@/assets/menu/tostaCappuccinoPaoBrioche.jpeg";
import tostaPresunto from "@/assets/menu/tostaPresunto.jpeg";
import tostaSeul from "@/assets/menu/tostaSeul.jpeg";
import tostaTomatoJam from "@/assets/menu/tostaTomatoJam.jpeg";
import tostaVegan from "@/assets/menu/tostaVegan.jpeg";
import waffleAmericano from "@/assets/menu/waffleAmericano.jpeg";
import waffleBanoffee from "@/assets/menu/waffleBanoffee.jpeg";
import waffleClassicoMel from "@/assets/menu/waffleClassicoMel.jpeg";
import waffleLotus from "@/assets/menu/waffleLotus.jpeg";
import waffleNutella from "@/assets/menu/waffleNutella.jpeg";
import wafflePistachio from "@/assets/menu/wafflePistachio.jpeg";
import { MenuTagType } from "@/components/Menu/components/MenuTag";

export interface MenuItem {
    nameKey: string;
    descriptionKey?: string;
    price: string;
    tags?: MenuTagType[];
    image: string;
}

interface MenuCategory {
    id: string;
    labelKey: string;
    descriptionKey?: string;
    items: MenuItem[];
}

export enum MENU_TYPES {
    FOOD = "food",
    DRINK = "drink",
}

export const FOODS_MENU: MenuCategory[] = [
    {
        id: "menu-executivo",
        labelKey: "menu.food.executive_menu.title",
        items: [
            {
                nameKey: "menu.food.executive_menu.items.daily.name",
                descriptionKey:
                    "menu.food.executive_menu.items.daily.description",
                price: "10.00€",
                image: "",
            },
        ],
    },
    {
        id: "para-partilhar",
        labelKey: "menu.food.to_share.title",
        items: [
            {
                nameKey: "menu.food.to_share.items.english_muffin.name",
                descriptionKey:
                    "menu.food.to_share.items.english_muffin.description",
                price: "3.50€",
                image: englishMuffinManteigaDeErvas,
            },
            {
                nameKey: "English Muffin Gratinado",
                descriptionKey:
                    "C/ manteiga de alho e ervas e queijo gratinado",
                price: "4.00€",
                image: "",
            },
            {
                nameKey: "Caprese",
                descriptionKey: "Tomate cherry, mini mozzarella e pesto",
                price: "5.00€",
                image: caprese,
            },
            {
                nameKey: "Nachos",
                descriptionKey: "Com guacamole",
                price: "5.50€",
                image: nachosGuacamole,
            },
            {
                nameKey: "Shrimp Bites",
                descriptionKey: "Ships, guacamole e camarão",
                price: "6.50€",
                image: shrimpBites,
            },
        ],
    },
    {
        id: "ovos",
        labelKey: "Ovos",
        descriptionKey:
            "Acompanham mix de salada e sementes variadas (excepto Ovos Turkish)",
        items: [
            {
                nameKey: "Ovos Mexidos c/ Tosta",
                descriptionKey: "",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "Ovos Mexidos c/ Tosta e Bacon",
                descriptionKey: "",
                price: "5.00€",
                image: ovosMexidosComBacon,
            },
            {
                nameKey: "Ovos Benedict c/ English Muffin",
                descriptionKey:
                    "Manteiga de alho e ervas, presunto, ovo escalfado, molho holandês e cebola frita.  ",
                price: "8.00€",
                image: ovosBenedictEnglishMuffin,
            },
            {
                nameKey: "Ovos Benedict c/ Pão de Forma Brioche",
                descriptionKey:
                    "Manteiga de alho e ervas, presunto, ovo escalfado, molho holandês e cebola frita.  ",
                price: "9.00€",
                image: "",
            },
            {
                nameKey: "Ovos Turkish (Çilbir)",
                descriptionKey:
                    "Creme de iogurte temperado com alho, ovos escalfados e azeite aromatizado com especiarias e tosta",
                price: "8.50€",
                image: ovosTurkish,
            },
            {
                nameKey: "Ovos Royale c/ English Muffin",
                descriptionKey:
                    "Manteiga de alho e ervas, salmão fumado, ovos escalfados, molho holandês e cebola frita. ",
                price: "9.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: "",
            },
            {
                nameKey: "Ovos Royale c/ Pão de Forma Brioche",
                descriptionKey:
                    "Manteiga de alho e ervas, salmão fumado, ovos escalfados, molho holandês e cebola frita. ",
                price: "10.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: ovosRoyalePaoBrioche,
            },
        ],
    },
    {
        id: "tostas",
        labelKey: "Tostas",
        descriptionKey:
            "Todas as tostas acompanham mix de salada e sementes variadas",
        items: [
            {
                nameKey: "Tosta Cappuccino",
                descriptionKey:
                    "C/ English Muffin e manteiga de alho e ervas, bacon inglês, cogumelos, ovos escalfados, molho holandês triturado e cebola frita",
                price: "9.00€",
                tags: [MenuTagType.LONG_COOKING],
                image: "",
            },
            {
                nameKey: "Tosta Cappuccino C/ Pão de Forma Brioche",
                descriptionKey:
                    "C/ Pão de Forma Brioche e manteiga de alho e ervas, bacon inglês, cogumelos, ovos escalfados, molho holandês triturado e cebola frita",
                price: "10.00€",
                tags: [MenuTagType.LONG_COOKING],
                image: tostaCappuccinoPaoBrioche,
            },
            {
                nameKey: "Tosta Campestre",
                descriptionKey:
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
                nameKey: "Tosta Seul",
                descriptionKey:
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
                nameKey: "Tosta Salmão",
                descriptionKey:
                    "Massa mãe, queijo creme, rúcula, salmão fumado e cebola frita",
                price: "8.50€",
                image: "",
            },
            {
                nameKey: "Tosta Tomato Jam",
                descriptionKey:
                    "Massa mãe, geleia de tomate, ovos mexidos, bacon, rúcula e abacate laminado",
                price: "8.00€",
                image: tostaTomatoJam,
            },
            {
                nameKey: "Tosta Abacate",
                descriptionKey:
                    "Massa mãe, pasta de abacate, ovos escalfados e sementes",
                price: "7.00€",
                image: tostaAbacate,
            },
            {
                nameKey: "Tosta Abacate c/ Salmão Fumado",
                descriptionKey:
                    "Massa mãe, pasta de abacate, ovos escalfados, sementes e salmão fumado",
                price: "8.50€",
                image: "",
            },
            {
                nameKey: "Tosta Presunto",
                descriptionKey:
                    "Massa mãe, geleia de ananás e hortelã, rúcula, presunto e queijo brie maçaricado",
                price: "8.00€",
                image: tostaPresunto,
            },
            {
                nameKey: "Tosta Vegan",
                descriptionKey:
                    "Massa mãe, pasta de abacate, tomate cherry, cogumelos, molho balsâmico e granola salgada artesanal",
                price: "7.50€",
                tags: [MenuTagType.VEGAN],
                image: tostaVegan,
            },
            {
                nameKey: "Tosta Bacon Jam",
                descriptionKey: "Massa mãe, geleia de bacon e ovos mexidos",
                price: "7.00€",
                image: tostaBaconJam,
            },
        ],
    },
    {
        id: "bowls-salada",
        labelKey: "Bowls Salada",
        items: [
            {
                nameKey: "Salada Cappuccino",
                descriptionKey:
                    "<b>Base</b>: mix de folhas, tomate, cebola frita, pepino, mini mozzarella e croutons. \n<b>Escolha a proteína</b>: frango, camarão, ovos (escalfados/estrelados) ou salmão fumado (+2€). \n<b>Escolha o molho</b>: iogurte, vinagrete, balsâmico ou azeite piri-piri",
                price: "8.00€",
                image: saladaCappuccino,
            },
            {
                nameKey: "Salada Vegan",
                descriptionKey:
                    "<b>Base</b>: mix de folhas, tomate, cebola frita, pepino, abacate e granola salgada artesanal. \n<b>Escolha o molho</b>: vinagrete, balsâmico ou azeite piri-piri",
                price: "7.00€",
                tags: [MenuTagType.VEGAN],
                image: "",
            },
        ],
    },
    {
        id: "croissants-salgados",
        labelKey: "Croissants Salgados",
        descriptionKey: "Acompanham mix de salada e sementes variadas",
        items: [
            {
                nameKey: "Croissant Bacon",
                descriptionKey: "Ovos mexidos e bacon",
                price: "4.50€",
                image: croissantBacon,
            },
            {
                nameKey: "Croissant Mozzarella",
                descriptionKey: "Presunto, pesto e mini mozzarella",
                price: "5.00€",
                image: croissantMozzarella,
            },
            {
                nameKey: "Croissant Salmão",
                descriptionKey: "Queijo creme, cebola frita e salmão fumado",
                price: "5.50€",
                image: croissantSalmao,
            },
            {
                nameKey: "Croissant Avocado",
                descriptionKey:
                    "Geleia de tomate, ovos mexidos, bacon, queijo e avocado",
                price: "6.00€",
                tags: [MenuTagType.BEST_SELLER, MenuTagType.LONG_COOKING],
                image: croissantAvocado,
            },
        ],
    },
    {
        id: "croissants-doces",
        labelKey: "Croissants Doces",
        items: [
            {
                nameKey: "Croissant Nutella",
                descriptionKey: "Morangos e Nutella",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "Croissant Kinder Bueno",
                descriptionKey: "Framboesa e creme Kinder Bueno",
                price: "4.50€",
                image: croissantKinder,
            },
            {
                nameKey: "Croissant Banoffee",
                descriptionKey: "Banana, doce de leite cremoso e bolacha Maria",
                price: "4.50€",
                tags: [MenuTagType.BEST_SELLER],
                image: croissantBanoffee,
            },
            {
                nameKey: "Croissant Pistachio",
                descriptionKey:
                    "Framboesa, creme pistachio e pistachio triturado",
                price: "5.00€",
                image: croissantPistachio,
            },
        ],
    },
    {
        id: "panquecas",
        labelKey: "Panquecas",
        items: [
            {
                nameKey: "Panqueca Clássica c/ Manteiga e Mel",
                descriptionKey: "Manteiga e mel",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "Panqueca Clássica c/ Maple Syrup",
                descriptionKey: "Manteiga e maple syrup",
                price: "5.00€",
                image: panquecaClassicaMapleSyrup,
            },
            {
                nameKey: "Panqueca Nutella",
                descriptionKey: "Morango, banana e Nutella",
                price: "6.00€",
                image: panquecaNutella,
            },
            {
                nameKey: "Panqueca Ananás Hortelã",
                descriptionKey: "Mirtilos e geleia de ananás e hortelã",
                price: "6.00€",
                image: panquecaAnanasHortela,
            },
            {
                nameKey: "Panqueca Banoffee",
                descriptionKey:
                    "Banana, doce de leite cremoso, bolacha Maria e chantilly",
                price: "6.00€",
                image: panquecaBanoffee,
            },
            {
                nameKey: "Panqueca Oreo",
                descriptionKey: "Framboesa e creme Oreo",
                price: "6.00€",
                image: panquecaOreo,
            },
            {
                nameKey: "Panqueca Kinder Bueno",
                descriptionKey: "Creme Kinder Bueno e gelado de baunilha",
                price: "7.00€",
                image: panquecaKinder,
            },
            {
                nameKey: "Panqueca New York",
                descriptionKey:
                    "Compota de mirtilo e caramelo de maple syrup aquecido",
                price: "7.00€",
                image: panquecaNewYork,
            },
            {
                nameKey: "Panqueca Lotus",
                descriptionKey:
                    "Mirtilo, framboesa, gelado de baunilha, creme Lotus e maple syrup",
                price: "7.00€",
                image: panquecaLotus,
            },
            {
                nameKey: "Panqueca Pistachio",
                descriptionKey:
                    "Morango, gelado de baunilha, creme de pistachio e pistachio",
                price: "8.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: panquecaPistachio,
            },
            {
                nameKey: "Panqueca Americana",
                descriptionKey:
                    "Bacon, cheddar, ovo estrelado, cebola frita e maple syrup",
                price: "7.50€",
                image: panquecaAmericana,
            },
        ],
    },
    {
        id: "waffles",
        labelKey: "Waffles",
        descriptionKey:
            "Acompanham gelado de baunilha(exceto Waffle Americano)",
        items: [
            {
                nameKey: "Waffle Clássico c/ Manteiga e Mel",
                descriptionKey: "Manteiga e mel",
                price: "4.50€",
                image: waffleClassicoMel,
            },
            {
                nameKey: "Waffle Clássico c/ Maple Syrup",
                descriptionKey: "Manteiga e maple syrup",
                price: "5.00€",
                image: "",
            },
            {
                nameKey: "Waffle Nutella",
                descriptionKey: "Morango e Nutella",
                price: "6.00€",
                image: waffleNutella,
            },
            {
                nameKey: "Waffle Kinder Bueno",
                descriptionKey: "Creme Kinder Bueno",
                price: "6.00€",
                image: "",
            },
            {
                nameKey: "Waffle Banoffee",
                descriptionKey:
                    "Banana, doce de leite cremoso, bolacha Maria e chantilly",
                price: "6.00€",
                image: waffleBanoffee,
            },
            {
                nameKey: "Waffle Lotus",
                descriptionKey: "Mirtilos, creme Lotus e bolacha",
                price: "6.50€",
                image: waffleLotus,
            },
            {
                nameKey: "Waffle Pistachio",
                descriptionKey: "Coco e creme de pistachio",
                price: "7.00€",
                image: wafflePistachio,
            },
            {
                nameKey: "Waffle Americano",
                descriptionKey:
                    "Salada, bacon, cheddar, ovo estrelado, cebola frita e maple syrup",
                price: "7.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: waffleAmericano,
            },
        ],
    },
    {
        id: "french-toast",
        labelKey: "French Toast",
        items: [
            {
                nameKey: "French Toast Frutos do Bosque",
                descriptionKey:
                    "Compota de frutos vermelhos, morangos, framboesas e mirtilos",
                price: "7.00€",
                image: frenchToastFrutosDoBosque,
            },
            {
                nameKey: "French Toast Pistachio",
                descriptionKey:
                    "Creme de pistachio, morangos, pistachio triturado e gelado",
                price: "8.00€",
                tags: [MenuTagType.CHEF_SUGGESTION],
                image: frenchToastPistachio,
            },
        ],
    },
    {
        id: "bowls-iogurte",
        labelKey: "Bowls Iogurte",
        items: [
            {
                nameKey: "Bowl de Fruta",
                descriptionKey: "Iogurte, granola artesanal, frutas e mel",
                price: "5.00€",
                image: bowlFruta,
            },
            {
                nameKey: "Bowl de Fruta Vegan",
                descriptionKey:
                    "Iogurte vegan, granola artesanal, frutas e agave",
                price: "6.00€",
                tags: [MenuTagType.VEGAN],
                image: "",
            },
        ],
    },
    {
        id: "menus-brunch",
        labelKey: "Menus Brunch",
        descriptionKey: "Não sujeito a alterações",
        items: [
            {
                nameKey: "Menu Kids",
                descriptionKey:
                    "<b>Até 12 anos</b>. \n<b>À escolha</b>: Bowl de Iogurte c/ compota de morango ou frutos vermelhos, ou Panqueca c/ Nutella, creme Kinder Bueno ou mel",
                price: "6.50€",
                image: "",
            },
            {
                nameKey: "Menu American Breakfast",
                descriptionKey:
                    "<b>Prato</b>: panqueca clássica, 2 ovos estrelados, bacon e torrada. \n<b>Bebida à escolha</b>: Coca-Cola, Compal ou Ice Tea",
                price: "8.50€",
                image: menuAmericanBreakfast,
            },
            {
                nameKey: "Menu Cappuccino",
                descriptionKey:
                    "Sumo à escolha. \nPanqueca Clássica c/ maple syrup. \nTosta Bacon Jam ou Tosta Abacate (massa mãe, geleia de bacon e ovos mexidos ou massa mãe, pasta de abacate, ovos escalfados e sementes). \n<b>Bebida quente</b>: abatanado, café, cappuccino ou chá",
                price: "12.50€",
                image: "",
            },
            {
                nameKey: "Menu Green",
                descriptionKey:
                    "Matcha Latte ou Iced Matcha. \nTosta Abacate (massa mãe, pasta de abacate, ovos escalfados e sementes). \nCroissant Pistachio (framboesa e creme pistachio)",
                price: "13.00€",
                image: "",
            },
            {
                nameKey: "Menu Tábua Cappuccino",
                descriptionKey:
                    "<b>2 Bebidas quentes</b>: abatanado, café, cappuccino ou chá. \n<b>Jarra de Sumo 1L:</b> laranja. \n2 Croissants folhados simples. Torrada em pão chapata c/ geleia de ananás e hortelã ou geleia de mirtilo. \n<b>Bowl de Fruta:</b> iogurte, granola artesanal, frutas e mel. \n<b>Panqueca Clássica:</b> manteiga e mel ou maple syrup",
                price: "33.00€",
                image: menuTabuaCappuccino,
            },
        ],
    },
    {
        id: "extras",
        labelKey: "Extras",
        items: [
            {
                nameKey: "Frutas ",
                descriptionKey: "Banana/Morango/Mirtilo/Framboesa",
                price: "1.50€",
                image: "",
            },
            {
                nameKey: "Gelado de Baunilha",
                descriptionKey: "",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "Toppings",
                descriptionKey:
                    "Nutella, Creme Kinder Bueno, Creme Lotus, Compota de Mirtilo, Mel, Maple Syrup",
                price: "2.50€",
                image: "",
            },
            {
                nameKey: "Creme de pistachio",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Ovo",
                descriptionKey: "",
                price: "1.50€",
                image: "",
            },
            {
                nameKey: "Bacon",
                descriptionKey: "",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "Cogumelo Salteado",
                descriptionKey: "",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "Avocado",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Salmão Fumado",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Queijo Brie",
                descriptionKey: "",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "Waffle",
                descriptionKey: "",
                price: "2.50€",
                image: "",
            },
            {
                nameKey: "Pão Chapata",
                descriptionKey: "",
                price: "1.50€",
                image: "",
            },
        ],
    },
];

export const DRINKS_MENU: MenuCategory[] = [
    {
        id: "cafetaria",
        labelKey: "Cafetaria",
        items: [
            {
                nameKey: "Carioca de Café",
                descriptionKey: "",
                price: "0.70€",
                image: "",
            },
            {
                nameKey: "Carioca de Limão",
                descriptionKey: "",
                price: "1.00€",
                image: "",
            },
            { nameKey: "Pingo", descriptionKey: "", price: "0.80€", image: "" },
            { nameKey: "Café", descriptionKey: "", price: "0.90€", image: "" },
            {
                nameKey: "Café Duplo",
                descriptionKey: "",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "Descafeinado",
                descriptionKey: "",
                price: "1.00€",
                image: "",
            },
            {
                nameKey: "Cevada",
                descriptionKey: "",
                price: "0.80€",
                image: "",
            },
            {
                nameKey: "Copo de Leite",
                descriptionKey: "",
                price: "1.00€",
                image: "",
            },
            {
                nameKey: "Americano",
                descriptionKey: "",
                price: "1.50€",
                image: "",
            },
            { nameKey: "Chá", descriptionKey: "", price: "2.00€", image: "" },
            { nameKey: "Lical", descriptionKey: "", price: "2.00€", image: "" },
            {
                nameKey: "Machiato",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Machiato Caramel",
                descriptionKey: "",
                price: "3.50€",
                image: "",
            },
            {
                nameKey: "Cappuccino",
                descriptionKey: "",
                price: "2.50€",
                image: "",
            },
            {
                nameKey: "Cappuccino Caramel",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Chocolate Quente",
                descriptionKey: "",
                price: "3.20€",
                image: "",
            },
            {
                nameKey: "Flat White",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Chai Latte",
                descriptionKey: "",
                price: "3.50€",
                image: "",
            },
        ],
    },
    {
        id: "iced-coffees",
        labelKey: "Iced Coffees",
        items: [
            {
                nameKey: "Frappé",
                descriptionKey: "",
                price: "2.70€",
                image: "",
            },
            {
                nameKey: "Dalgona Coffee",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Caramel Frappé",
                descriptionKey: "",
                price: "3.20€",
                image: "",
            },
            {
                nameKey: "Spanish Latte",
                descriptionKey: "",
                price: "3.50€",
                tags: [MenuTagType.NEW],
                image: "",
            },
            {
                nameKey: "Kinder Latte",
                descriptionKey: "",
                price: "4.00€",
                image: "",
            },
        ],
    },
    {
        id: "matcha",
        labelKey: "Matcha",
        items: [
            {
                nameKey: "Matcha Latte",
                descriptionKey: "",
                price: "3.50€",
                image: "",
            },
            {
                nameKey: "Iced Matcha Latte",
                descriptionKey: "",
                price: "3.50€",
                image: "",
            },
            {
                nameKey: "Iced Dalgona Matcha",
                descriptionKey:
                    "C/ geleia de frutos vermelhos / maracujá / morango",
                price: "4.50€",
                tags: [MenuTagType.NEW],
                image: "",
            },
        ],
    },
    {
        id: "smoothies",
        labelKey: "Smoothies",
        items: [
            {
                nameKey: "Morango",
                descriptionKey: "",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "Frutos Vermelhos",
                descriptionKey: "",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "Maracujá",
                descriptionKey: "",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "Morango e Banana",
                descriptionKey: "",
                price: "5.00€",
                tags: [MenuTagType.NEW],
                image: "",
            },
        ],
    },
    {
        id: "sumos-naturais",
        labelKey: "Sumos Naturais",
        items: [
            {
                nameKey: "Limonada",
                descriptionKey: "",
                price: "2.20€",
                image: "",
            },
            {
                nameKey: "Laranja",
                descriptionKey: "",
                price: "2.80€",
                image: "",
            },
            {
                nameKey: "Laranja e Frutos Vermelhos",
                descriptionKey: "",
                price: "3.20€",
                image: "",
            },
            {
                nameKey: "Limonada de Morango",
                descriptionKey: "",
                price: "3.20€",
                image: "",
            },
        ],
    },
    {
        id: "bebidas",
        labelKey: "Bebidas",
        items: [
            { nameKey: "Água", descriptionKey: "", price: "1.10€", image: "" },
            {
                nameKey: "Pedras",
                descriptionKey: "",
                price: "1.20€",
                image: "",
            },
            {
                nameKey: "Pedras de Limão",
                descriptionKey: "",
                price: "1.40€",
                image: "",
            },
            {
                nameKey: "Compal",
                descriptionKey: "",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "Coca-Cola",
                descriptionKey: "",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "Coca-Cola Zero",
                descriptionKey: "",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "Ice Tea",
                descriptionKey: "",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "San Pellegrino",
                descriptionKey: "",
                price: "2.90€",
                image: "",
            },
            {
                nameKey: "Água Tónica",
                descriptionKey: "",
                price: "3.50€",
                image: "",
            },
        ],
    },
    {
        id: "bebidas-alcool",
        labelKey: "Bebidas c/ Álcool",
        items: [
            {
                nameKey: "Super Bock",
                descriptionKey: "",
                price: "1.90€",
                image: "",
            },
            {
                nameKey: "Super Bock Stout",
                descriptionKey: "",
                price: "1.90€",
                image: "",
            },
            {
                nameKey: "Panaché",
                descriptionKey: "",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "Somersby Apple",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "Somersby Blackberry",
                descriptionKey: "",
                price: "3.00€",
                image: "",
            },
        ],
    },
    {
        id: "sangrias",
        labelKey: "Sangrias 1L/2L",
        items: [
            {
                nameKey: "Sangria Branca",
                descriptionKey: "",
                price: "12.00€/20.00€",
                image: "",
            },
            {
                nameKey: "Sangria Tinta",
                descriptionKey: "",
                price: "12.00€/20.00€",
                image: "",
            },
            {
                nameKey: "Sangria Espumante Rosé",
                descriptionKey: "",
                price: "15.00€/25.00€",
                image: "",
            },
        ],
    },
    {
        id: "vinhos",
        labelKey: "Vinhos",
        items: [
            {
                nameKey: "Esteva 37.5CL / 75CL",
                descriptionKey: "",
                price: "5.00€/9.00€",
                image: "",
            },
            {
                nameKey: "Planalto 37.5CL / 75CL",
                descriptionKey: "",
                price: "5.50€/10.00€",
                image: "",
            },
            {
                nameKey: "Mateus Rosé 37.5CL / 75CL",
                descriptionKey: "",
                price: "5.50€/10.00€",
                image: "",
            },
        ],
    },
    {
        id: "cocktails",
        labelKey: "Cocktails",
        items: [
            {
                nameKey: "Screwdriver",
                descriptionKey: "",
                price: "6.50€",
                image: "",
            },
            { nameKey: "Gin", descriptionKey: "", price: "7.00€", image: "" },
            {
                nameKey: "Aperol Spritz",
                descriptionKey: "",
                price: "8.00€",
                image: "",
            },
            {
                nameKey: "Espresso Martini",
                descriptionKey: "",
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
