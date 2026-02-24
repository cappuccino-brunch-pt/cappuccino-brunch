import bowlFruta from "@/assets/menu/bowlFruta.jpeg";
import caprese from "@/assets/menu/caprese.jpeg";
import croissantAvocado from "@/assets/menu/croissantAvocado.jpeg";
import croissantBacon from "@/assets/menu/croissantBacon.jpeg";
import croissantBanoffee from "@/assets/menu/croissantBanoffee.jpeg";
import croissantKinder from "@/assets/menu/croissantKinder.jpeg";
import croissantMozzarella from "@/assets/menu/croissantMozzarella.jpeg";
import croissantNutella from "@/assets/menu/croissantNutella.jpeg";
import croissantPistachio from "@/assets/menu/croissantPistachio.jpeg";
import croissantSalmao from "@/assets/menu/croissantSalmao.jpeg";
import englishMuffinManteigaDeErvas from "@/assets/menu/englishMuffinManteigaDeErvas.jpeg";
import frenchToastFrutosDoBosque from "@/assets/menu/frenchToastFrutosDoBosque.jpeg";
import frenchToastPistachio from "@/assets/menu/frenchToastPistachio.jpeg";
import menuAmericanBreakfast from "@/assets/menu/menuAmericanBreakfast.jpeg";
import menuExecutivo from "@/assets/menu/menuExecutivo.jpeg";
import menuTabuaCappuccino from "@/assets/menu/menuTabuaCappuccino.jpeg";
import nachosGuacamole from "@/assets/menu/nachosGuacamole.jpeg";
import ovosBenedictEnglishMuffin from "@/assets/menu/ovosBenedictEnglishMuffin.jpeg";
import ovosBenedictPaoBrioche from "@/assets/menu/ovosBenedictPaoBrioche.jpeg";
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
        id: "executive_menu",
        labelKey: "menu.food.executive_menu.title",
        items: [
            {
                nameKey: "menu.food.executive_menu.items.daily.name",
                descriptionKey:
                    "menu.food.executive_menu.items.daily.description",
                price: "10.00€",
                image: menuExecutivo,
            },
        ],
    },
    {
        id: "to_share",
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
                nameKey: "menu.food.to_share.items.english_muffin_gratin.name",
                descriptionKey:
                    "menu.food.to_share.items.english_muffin_gratin.description",
                price: "4.00€",
                image: "",
            },
            {
                nameKey: "menu.food.to_share.items.caprese.name",
                descriptionKey: "menu.food.to_share.items.caprese.description",
                price: "5.00€",
                image: caprese,
            },
            {
                nameKey: "menu.food.to_share.items.nachos.name",
                descriptionKey: "menu.food.to_share.items.nachos.description",
                price: "5.50€",
                image: nachosGuacamole,
            },
            {
                nameKey: "menu.food.to_share.items.shrimp_bites.name",
                descriptionKey:
                    "menu.food.to_share.items.shrimp_bites.description",
                price: "6.50€",
                image: shrimpBites,
            },
        ],
    },
    {
        id: "eggs",
        labelKey: "menu.food.eggs.title",
        descriptionKey: "menu.food.eggs.description",
        items: [
            {
                nameKey: "menu.food.eggs.items.scrambled_toast.name",
                descriptionKey:
                    "menu.food.eggs.items.scrambled_toast.description",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "menu.food.eggs.items.scrambled_toast_bacon.name",
                descriptionKey:
                    "menu.food.eggs.items.scrambled_toast_bacon.description",
                price: "5.00€",
                image: ovosMexidosComBacon,
            },
            {
                nameKey: "menu.food.eggs.items.benedict_english_muffin.name",
                descriptionKey:
                    "menu.food.eggs.items.benedict_english_muffin.description",
                price: "8.00€",
                image: ovosBenedictEnglishMuffin,
            },
            {
                nameKey: "menu.food.eggs.items.benedict_brioche.name",
                descriptionKey:
                    "menu.food.eggs.items.benedict_brioche.description",
                price: "9.00€",
                image: ovosBenedictPaoBrioche,
            },
            {
                nameKey: "menu.food.eggs.items.turkish.name",
                descriptionKey: "menu.food.eggs.items.turkish.description",
                price: "8.50€",
                image: ovosTurkish,
            },
            {
                nameKey: "menu.food.eggs.items.royale_english_muffin.name",
                descriptionKey:
                    "menu.food.eggs.items.royale_english_muffin.description",
                price: "9.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: "",
            },
            {
                nameKey: "menu.food.eggs.items.royale_brioche.name",
                descriptionKey:
                    "menu.food.eggs.items.royale_brioche.description",
                price: "10.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: ovosRoyalePaoBrioche,
            },
        ],
    },
    {
        id: "toasts",
        labelKey: "menu.food.toasts.title",
        descriptionKey: "menu.food.toasts.description",
        items: [
            {
                nameKey: "menu.food.toasts.items.cappuccino.name",
                descriptionKey: "menu.food.toasts.items.cappuccino.description",
                price: "9.00€",
                tags: [MenuTagType.LONG_COOKING],
                image: "",
            },
            {
                nameKey: "menu.food.toasts.items.cappuccino_brioche.name",
                descriptionKey:
                    "menu.food.toasts.items.cappuccino_brioche.description",
                price: "10.00€",
                tags: [MenuTagType.LONG_COOKING],
                image: tostaCappuccinoPaoBrioche,
            },
            {
                nameKey: "menu.food.toasts.items.campestre.name",
                descriptionKey: "menu.food.toasts.items.campestre.description",
                price: "9.50€",
                tags: [
                    MenuTagType.CHEF_SUGGESTION,
                    MenuTagType.NEW,
                    MenuTagType.LONG_COOKING,
                ],
                image: tostaCampestre,
            },
            {
                nameKey: "menu.food.toasts.items.seul.name",
                descriptionKey: "menu.food.toasts.items.seul.description",
                price: "9.00€",
                tags: [
                    MenuTagType.BEST_SELLER,
                    MenuTagType.SPICY,
                    MenuTagType.LONG_COOKING,
                ],
                image: tostaSeul,
            },
            {
                nameKey: "menu.food.toasts.items.salmon.name",
                descriptionKey: "menu.food.toasts.items.salmon.description",
                price: "8.50€",
                image: "",
            },
            {
                nameKey: "menu.food.toasts.items.tomato_jam.name",
                descriptionKey: "menu.food.toasts.items.tomato_jam.description",
                price: "8.00€",
                image: tostaTomatoJam,
            },
            {
                nameKey: "menu.food.toasts.items.avocado.name",
                descriptionKey: "menu.food.toasts.items.avocado.description",
                price: "7.00€",
                image: tostaAbacate,
            },
            {
                nameKey: "menu.food.toasts.items.avocado_salmon.name",
                descriptionKey:
                    "menu.food.toasts.items.avocado_salmon.description",
                price: "8.50€",
                image: "",
            },
            {
                nameKey: "menu.food.toasts.items.presunto.name",
                descriptionKey: "menu.food.toasts.items.presunto.description",
                price: "8.00€",
                image: tostaPresunto,
            },
            {
                nameKey: "menu.food.toasts.items.vegan.name",
                descriptionKey: "menu.food.toasts.items.vegan.description",
                price: "7.50€",
                tags: [MenuTagType.VEGAN],
                image: tostaVegan,
            },
            {
                nameKey: "menu.food.toasts.items.bacon_jam.name",
                descriptionKey: "menu.food.toasts.items.bacon_jam.description",
                price: "7.00€",
                image: tostaBaconJam,
            },
        ],
    },
    {
        id: "salad_bowls",
        labelKey: "menu.food.salad_bowls.title",
        items: [
            {
                nameKey: "menu.food.salad_bowls.items.cappuccino.name",
                descriptionKey:
                    "menu.food.salad_bowls.items.cappuccino.description",
                price: "8.00€",
                image: saladaCappuccino,
            },
            {
                nameKey: "menu.food.salad_bowls.items.vegan.name",
                descriptionKey: "menu.food.salad_bowls.items.vegan.description",
                price: "7.00€",
                tags: [MenuTagType.VEGAN],
                image: "",
            },
        ],
    },
    {
        id: "savory_croissants",
        labelKey: "menu.food.savory_croissants.title",
        descriptionKey: "menu.food.savory_croissants.description",
        items: [
            {
                nameKey: "menu.food.savory_croissants.items.bacon.name",
                descriptionKey:
                    "menu.food.savory_croissants.items.bacon.description",
                price: "4.50€",
                image: croissantBacon,
            },
            {
                nameKey: "menu.food.savory_croissants.items.mozzarella.name",
                descriptionKey:
                    "menu.food.savory_croissants.items.mozzarella.description",
                price: "5.00€",
                image: croissantMozzarella,
            },
            {
                nameKey: "menu.food.savory_croissants.items.salmon.name",
                descriptionKey:
                    "menu.food.savory_croissants.items.salmon.description",
                price: "5.50€",
                image: croissantSalmao,
            },
            {
                nameKey: "menu.food.savory_croissants.items.avocado.name",
                descriptionKey:
                    "menu.food.savory_croissants.items.avocado.description",
                price: "6.00€",
                tags: [MenuTagType.BEST_SELLER, MenuTagType.LONG_COOKING],
                image: croissantAvocado,
            },
        ],
    },
    {
        id: "sweet_croissants",
        labelKey: "menu.food.sweet_croissants.title",
        items: [
            {
                nameKey: "menu.food.sweet_croissants.items.nutella.name",
                descriptionKey:
                    "menu.food.sweet_croissants.items.nutella.description",
                price: "4.50€",
                image: croissantNutella,
            },
            {
                nameKey: "menu.food.sweet_croissants.items.kinder.name",
                descriptionKey:
                    "menu.food.sweet_croissants.items.kinder.description",
                price: "4.50€",
                image: croissantKinder,
            },
            {
                nameKey: "menu.food.sweet_croissants.items.banoffee.name",
                descriptionKey:
                    "menu.food.sweet_croissants.items.banoffee.description",
                price: "4.50€",
                tags: [MenuTagType.BEST_SELLER],
                image: croissantBanoffee,
            },
            {
                nameKey: "menu.food.sweet_croissants.items.pistachio.name",
                descriptionKey:
                    "menu.food.sweet_croissants.items.pistachio.description",
                price: "5.00€",
                image: croissantPistachio,
            },
        ],
    },
    {
        id: "pancakes",
        labelKey: "menu.food.pancakes.title",
        items: [
            {
                nameKey: "menu.food.pancakes.items.classic_honey.name",
                descriptionKey:
                    "menu.food.pancakes.items.classic_honey.description",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "menu.food.pancakes.items.classic_maple.name",
                descriptionKey:
                    "menu.food.pancakes.items.classic_maple.description",
                price: "5.00€",
                image: panquecaClassicaMapleSyrup,
            },
            {
                nameKey: "menu.food.pancakes.items.nutella.name",
                descriptionKey: "menu.food.pancakes.items.nutella.description",
                price: "6.00€",
                image: panquecaNutella,
            },
            {
                nameKey: "menu.food.pancakes.items.pineapple_mint.name",
                descriptionKey:
                    "menu.food.pancakes.items.pineapple_mint.description",
                price: "6.00€",
                image: panquecaAnanasHortela,
            },
            {
                nameKey: "menu.food.pancakes.items.banoffee.name",
                descriptionKey: "menu.food.pancakes.items.banoffee.description",
                price: "6.00€",
                image: panquecaBanoffee,
            },
            {
                nameKey: "menu.food.pancakes.items.oreo.name",
                descriptionKey: "menu.food.pancakes.items.oreo.description",
                price: "6.00€",
                image: panquecaOreo,
            },
            {
                nameKey: "menu.food.pancakes.items.kinder.name",
                descriptionKey: "menu.food.pancakes.items.kinder.description",
                price: "7.00€",
                image: panquecaKinder,
            },
            {
                nameKey: "menu.food.pancakes.items.new_york.name",
                descriptionKey: "menu.food.pancakes.items.new_york.description",
                price: "7.00€",
                image: panquecaNewYork,
            },
            {
                nameKey: "menu.food.pancakes.items.lotus.name",
                descriptionKey: "menu.food.pancakes.items.lotus.description",
                price: "7.00€",
                image: panquecaLotus,
            },
            {
                nameKey: "menu.food.pancakes.items.pistachio.name",
                descriptionKey:
                    "menu.food.pancakes.items.pistachio.description",
                price: "8.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: panquecaPistachio,
            },
            {
                nameKey: "menu.food.pancakes.items.american.name",
                descriptionKey: "menu.food.pancakes.items.american.description",
                price: "7.50€",
                image: panquecaAmericana,
            },
        ],
    },
    {
        id: "waffles",
        labelKey: "menu.food.waffles.title",
        descriptionKey: "menu.food.waffles.description",
        items: [
            {
                nameKey: "menu.food.waffles.items.classic_honey.name",
                descriptionKey:
                    "menu.food.waffles.items.classic_honey.description",
                price: "4.50€",
                image: waffleClassicoMel,
            },
            {
                nameKey: "menu.food.waffles.items.classic_maple.name",
                descriptionKey:
                    "menu.food.waffles.items.classic_maple.description",
                price: "5.00€",
                image: "",
            },
            {
                nameKey: "menu.food.waffles.items.nutella.name",
                descriptionKey: "menu.food.waffles.items.nutella.description",
                price: "6.00€",
                image: waffleNutella,
            },
            {
                nameKey: "menu.food.waffles.items.kinder.name",
                descriptionKey: "menu.food.waffles.items.kinder.description",
                price: "6.00€",
                image: "",
            },
            {
                nameKey: "menu.food.waffles.items.banoffee.name",
                descriptionKey: "menu.food.waffles.items.banoffee.description",
                price: "6.00€",
                image: waffleBanoffee,
            },
            {
                nameKey: "menu.food.waffles.items.lotus.name",
                descriptionKey: "menu.food.waffles.items.lotus.description",
                price: "6.50€",
                image: waffleLotus,
            },
            {
                nameKey: "menu.food.waffles.items.pistachio.name",
                descriptionKey: "menu.food.waffles.items.pistachio.description",
                price: "7.00€",
                image: wafflePistachio,
            },
            {
                nameKey: "menu.food.waffles.items.american.name",
                descriptionKey: "menu.food.waffles.items.american.description",
                price: "7.00€",
                tags: [MenuTagType.BEST_SELLER],
                image: waffleAmericano,
            },
        ],
    },
    {
        id: "french_toast",
        labelKey: "menu.food.french_toast.title",
        items: [
            {
                nameKey: "menu.food.french_toast.items.berries.name",
                descriptionKey:
                    "menu.food.french_toast.items.berries.description",
                price: "7.00€",
                image: frenchToastFrutosDoBosque,
            },
            {
                nameKey: "menu.food.french_toast.items.pistachio.name",
                descriptionKey:
                    "menu.food.french_toast.items.pistachio.description",
                price: "8.00€",
                tags: [MenuTagType.CHEF_SUGGESTION],
                image: frenchToastPistachio,
            },
        ],
    },
    {
        id: "yogurt_bowls",
        labelKey: "menu.food.yogurt_bowls.title",
        items: [
            {
                nameKey: "menu.food.yogurt_bowls.items.fruit.name",
                descriptionKey:
                    "menu.food.yogurt_bowls.items.fruit.description",
                price: "5.00€",
                image: bowlFruta,
            },
            {
                nameKey: "menu.food.yogurt_bowls.items.fruit_vegan.name",
                descriptionKey:
                    "menu.food.yogurt_bowls.items.fruit_vegan.description",
                price: "6.00€",
                tags: [MenuTagType.VEGAN],
                image: "",
            },
        ],
    },
    {
        id: "brunch_menus",
        labelKey: "menu.food.brunch_menus.title",
        descriptionKey: "menu.food.brunch_menus.description",
        items: [
            {
                nameKey: "menu.food.brunch_menus.items.kids.name",
                descriptionKey: "menu.food.brunch_menus.items.kids.description",
                price: "6.50€",
                image: "",
            },
            {
                nameKey: "menu.food.brunch_menus.items.american_breakfast.name",
                descriptionKey:
                    "menu.food.brunch_menus.items.american_breakfast.description",
                price: "8.50€",
                image: menuAmericanBreakfast,
            },
            {
                nameKey: "menu.food.brunch_menus.items.cappuccino.name",
                descriptionKey:
                    "menu.food.brunch_menus.items.cappuccino.description",
                price: "12.50€",
                image: "",
            },
            {
                nameKey: "menu.food.brunch_menus.items.green.name",
                descriptionKey:
                    "menu.food.brunch_menus.items.green.description",
                price: "13.00€",
                image: "",
            },
            {
                nameKey: "menu.food.brunch_menus.items.tabua_cappuccino.name",
                descriptionKey:
                    "menu.food.brunch_menus.items.tabua_cappuccino.description",
                price: "33.00€",
                image: menuTabuaCappuccino,
            },
        ],
    },
    {
        id: "pastry",
        labelKey: "menu.food.pastry.title",
        items: [
            {
                nameKey: "menu.food.pastry.items.flaky_croissant.name",
                descriptionKey:
                    "menu.food.pastry.items.flaky_croissant.description",
                price: "1.50€",
                image: "",
            },
            {
                nameKey:
                    "menu.food.pastry.items.ciabatta_bread_toast_with_butter.name",
                descriptionKey:
                    "menu.food.pastry.items.ciabatta_bread_toast_with_butter.description",
                price: "2.50€",
                image: "",
            },
            {
                nameKey:
                    "menu.food.pastry.items.ciabatta_bread_toast_with_jam.name",
                descriptionKey:
                    "menu.food.pastry.items.ciabatta_bread_toast_with_jam.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey:
                    "menu.food.pastry.items.mixed_toast_on_ciabatta_bread.name",
                descriptionKey:
                    "menu.food.pastry.items.mixed_toast_on_ciabatta_bread.description",
                price: "3.90€",
                image: "",
            },
        ],
    },
    {
        id: "extras",
        labelKey: "menu.food.extras.title",
        items: [
            {
                nameKey: "menu.food.extras.items.fruits.name",
                descriptionKey: "menu.food.extras.items.fruits.description",
                price: "1.50€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.vanilla_ice_cream.name",
                descriptionKey:
                    "menu.food.extras.items.vanilla_ice_cream.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.toppings.name",
                descriptionKey: "menu.food.extras.items.toppings.description",
                price: "2.50€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.pistachio_cream.name",
                descriptionKey:
                    "menu.food.extras.items.pistachio_cream.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.egg.name",
                descriptionKey: "menu.food.extras.items.egg.description",
                price: "1.50€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.bacon.name",
                descriptionKey: "menu.food.extras.items.bacon.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.sauteed_mushroom.name",
                descriptionKey:
                    "menu.food.extras.items.sauteed_mushroom.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.avocado.name",
                descriptionKey: "menu.food.extras.items.avocado.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.smoked_salmon.name",
                descriptionKey:
                    "menu.food.extras.items.smoked_salmon.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.brie_cheese.name",
                descriptionKey:
                    "menu.food.extras.items.brie_cheese.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.waffle.name",
                descriptionKey: "menu.food.extras.items.waffle.description",
                price: "2.50€",
                image: "",
            },
            {
                nameKey: "menu.food.extras.items.ciabatta_bread.name",
                descriptionKey:
                    "menu.food.extras.items.ciabatta_bread.description",
                price: "1.50€",
                image: "",
            },
        ],
    },
];

export const DRINKS_MENU: MenuCategory[] = [
    {
        id: "coffee_shop",
        labelKey: "menu.drink.coffee_shop.title",
        items: [
            {
                nameKey: "menu.drink.coffee_shop.items.carioca_coffee.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.carioca_coffee.description",
                price: "0.70€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.carioca_lemon.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.carioca_lemon.description",
                price: "1.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.pingo.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.pingo.description",
                price: "0.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.coffee.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.coffee.description",
                price: "0.90€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.double_coffee.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.double_coffee.description",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.decaf.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.decaf.description",
                price: "1.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.barley.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.barley.description",
                price: "0.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.milk_glass.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.milk_glass.description",
                price: "1.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.americano.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.americano.description",
                price: "1.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.tea.name",
                descriptionKey: "menu.drink.coffee_shop.items.tea.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.lical.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.lical.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.machiato.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.machiato.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.machiato_caramel.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.machiato_caramel.description",
                price: "3.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.cappuccino.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.cappuccino.description",
                price: "2.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.cappuccino_caramel.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.cappuccino_caramel.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.hot_chocolate.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.hot_chocolate.description",
                price: "3.20€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.flat_white.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.flat_white.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.coffee_shop.items.chai_latte.name",
                descriptionKey:
                    "menu.drink.coffee_shop.items.chai_latte.description",
                price: "3.50€",
                image: "",
            },
        ],
    },
    {
        id: "iced_coffees",
        labelKey: "menu.drink.iced_coffees.title",
        items: [
            {
                nameKey: "menu.drink.iced_coffees.items.frappe.name",
                descriptionKey:
                    "menu.drink.iced_coffees.items.frappe.description",
                price: "2.70€",
                image: "",
            },
            {
                nameKey: "menu.drink.iced_coffees.items.dalgona.name",
                descriptionKey:
                    "menu.drink.iced_coffees.items.dalgona.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.iced_coffees.items.caramel_frappe.name",
                descriptionKey:
                    "menu.drink.iced_coffees.items.caramel_frappe.description",
                price: "3.20€",
                image: "",
            },
            {
                nameKey: "menu.drink.iced_coffees.items.spanish_latte.name",
                descriptionKey:
                    "menu.drink.iced_coffees.items.spanish_latte.description",
                price: "3.50€",
                tags: [MenuTagType.NEW],
                image: "",
            },
            {
                nameKey: "menu.drink.iced_coffees.items.kinder_latte.name",
                descriptionKey:
                    "menu.drink.iced_coffees.items.kinder_latte.description",
                price: "4.00€",
                image: "",
            },
        ],
    },
    {
        id: "matcha",
        labelKey: "menu.drink.matcha.title",
        items: [
            {
                nameKey: "menu.drink.matcha.items.matcha_latte.name",
                descriptionKey:
                    "menu.drink.matcha.items.matcha_latte.description",
                price: "3.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.matcha.items.iced_matcha_latte.name",
                descriptionKey:
                    "menu.drink.matcha.items.iced_matcha_latte.description",
                price: "3.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.matcha.items.iced_dalgona_matcha.name",
                descriptionKey:
                    "menu.drink.matcha.items.iced_dalgona_matcha.description",
                price: "4.50€",
                tags: [MenuTagType.NEW],
                image: "",
            },
        ],
    },
    {
        id: "smoothies",
        labelKey: "menu.drink.smoothies.title",
        items: [
            {
                nameKey: "menu.drink.smoothies.items.strawberry.name",
                descriptionKey:
                    "menu.drink.smoothies.items.strawberry.description",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.smoothies.items.red_fruits.name",
                descriptionKey:
                    "menu.drink.smoothies.items.red_fruits.description",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.smoothies.items.passion_fruit.name",
                descriptionKey:
                    "menu.drink.smoothies.items.passion_fruit.description",
                price: "4.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.smoothies.items.strawberry_banana.name",
                descriptionKey:
                    "menu.drink.smoothies.items.strawberry_banana.description",
                price: "5.00€",
                tags: [MenuTagType.NEW],
                image: "",
            },
        ],
    },
    {
        id: "natural_juices",
        labelKey: "menu.drink.natural_juices.title",
        items: [
            {
                nameKey: "menu.drink.natural_juices.items.lemonade.name",
                descriptionKey:
                    "menu.drink.natural_juices.items.lemonade.description",
                price: "2.20€",
                image: "",
            },
            {
                nameKey: "menu.drink.natural_juices.items.orange.name",
                descriptionKey:
                    "menu.drink.natural_juices.items.orange.description",
                price: "2.80€",
                image: "",
            },
            {
                nameKey:
                    "menu.drink.natural_juices.items.orange_red_fruits.name",
                descriptionKey:
                    "menu.drink.natural_juices.items.orange_red_fruits.description",
                price: "3.20€",
                image: "",
            },
            {
                nameKey:
                    "menu.drink.natural_juices.items.strawberry_lemonade.name",
                descriptionKey:
                    "menu.drink.natural_juices.items.strawberry_lemonade.description",
                price: "3.20€",
                image: "",
            },
        ],
    },
    {
        id: "beverages",
        labelKey: "menu.drink.beverages.title",
        items: [
            {
                nameKey: "menu.drink.beverages.items.water.name",
                descriptionKey: "menu.drink.beverages.items.water.description",
                price: "1.10€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.pedras.name",
                descriptionKey: "menu.drink.beverages.items.pedras.description",
                price: "1.20€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.pedras_lemon.name",
                descriptionKey:
                    "menu.drink.beverages.items.pedras_lemon.description",
                price: "1.40€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.compal.name",
                descriptionKey: "menu.drink.beverages.items.compal.description",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.coca_cola.name",
                descriptionKey:
                    "menu.drink.beverages.items.coca_cola.description",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.coca_cola_zero.name",
                descriptionKey:
                    "menu.drink.beverages.items.coca_cola_zero.description",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.ice_tea.name",
                descriptionKey:
                    "menu.drink.beverages.items.ice_tea.description",
                price: "1.80€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.san_pellegrino.name",
                descriptionKey:
                    "menu.drink.beverages.items.san_pellegrino.description",
                price: "2.90€",
                image: "",
            },
            {
                nameKey: "menu.drink.beverages.items.tonic_water.name",
                descriptionKey:
                    "menu.drink.beverages.items.tonic_water.description",
                price: "3.50€",
                image: "",
            },
        ],
    },
    {
        id: "alcoholic_beverages",
        labelKey: "menu.drink.alcoholic_beverages.title",
        items: [
            {
                nameKey: "menu.drink.alcoholic_beverages.items.super_bock.name",
                descriptionKey:
                    "menu.drink.alcoholic_beverages.items.super_bock.description",
                price: "1.90€",
                image: "",
            },
            {
                nameKey:
                    "menu.drink.alcoholic_beverages.items.super_bock_stout.name",
                descriptionKey:
                    "menu.drink.alcoholic_beverages.items.super_bock_stout.description",
                price: "1.90€",
                image: "",
            },
            {
                nameKey: "menu.drink.alcoholic_beverages.items.panache.name",
                descriptionKey:
                    "menu.drink.alcoholic_beverages.items.panache.description",
                price: "2.00€",
                image: "",
            },
            {
                nameKey:
                    "menu.drink.alcoholic_beverages.items.somersby_apple.name",
                descriptionKey:
                    "menu.drink.alcoholic_beverages.items.somersby_apple.description",
                price: "3.00€",
                image: "",
            },
            {
                nameKey:
                    "menu.drink.alcoholic_beverages.items.somersby_blackberry.name",
                descriptionKey:
                    "menu.drink.alcoholic_beverages.items.somersby_blackberry.description",
                price: "3.00€",
                image: "",
            },
        ],
    },
    {
        id: "sangrias",
        labelKey: "menu.drink.sangrias.title",
        items: [
            {
                nameKey: "menu.drink.sangrias.items.white.name",
                descriptionKey: "menu.drink.sangrias.items.white.description",
                price: "12.00€/20.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.sangrias.items.red.name",
                descriptionKey: "menu.drink.sangrias.items.red.description",
                price: "12.00€/20.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.sangrias.items.sparkling_rose.name",
                descriptionKey:
                    "menu.drink.sangrias.items.sparkling_rose.description",
                price: "15.00€/25.00€",
                image: "",
            },
        ],
    },
    {
        id: "wines",
        labelKey: "menu.drink.wines.title",
        items: [
            {
                nameKey: "menu.drink.wines.items.esteva.name",
                descriptionKey: "menu.drink.wines.items.esteva.description",
                price: "5.00€/9.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.wines.items.planalto.name",
                descriptionKey: "menu.drink.wines.items.planalto.description",
                price: "5.50€/10.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.wines.items.mateus_rose.name",
                descriptionKey:
                    "menu.drink.wines.items.mateus_rose.description",
                price: "5.50€/10.00€",
                image: "",
            },
        ],
    },
    {
        id: "cocktails",
        labelKey: "menu.drink.cocktails.title",
        items: [
            {
                nameKey: "menu.drink.cocktails.items.screwdriver.name",
                descriptionKey:
                    "menu.drink.cocktails.items.screwdriver.description",
                price: "6.50€",
                image: "",
            },
            {
                nameKey: "menu.drink.cocktails.items.gin.name",
                descriptionKey: "menu.drink.cocktails.items.gin.description",
                price: "7.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.cocktails.items.aperol_spritz.name",
                descriptionKey:
                    "menu.drink.cocktails.items.aperol_spritz.description",
                price: "8.00€",
                image: "",
            },
            {
                nameKey: "menu.drink.cocktails.items.espresso_martini.name",
                descriptionKey:
                    "menu.drink.cocktails.items.espresso_martini.description",
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
