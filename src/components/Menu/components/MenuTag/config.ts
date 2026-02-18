import { MenuTagType } from "./types";

export const MenuTagConfig: Record<
    MenuTagType,
    { label: string; bgColor: string; textColor: string }
> = {
    [MenuTagType.BEST_SELLER]: {
        label: "Best Seller",
        bgColor: "bg-gold/15",
        textColor: "text-gold",
    },
    [MenuTagType.NEW]: {
        label: "Novo",
        bgColor: "bg-salmon/15",
        textColor: "text-salmon",
    },
    [MenuTagType.VEGAN]: {
        label: "Vegan",
        bgColor: "bg-sage/15",
        textColor: "text-sage",
    },
    [MenuTagType.SPICY]: {
        label: "Picante",
        bgColor: "bg-berry/15",
        textColor: "text-berry",
    },
    [MenuTagType.LONG_COOKING]: {
        label: "Demorado",
        bgColor: "bg-cappuccino/15",
        textColor: "text-cappuccino",
    },
    [MenuTagType.CHEF_SUGGESTION]: {
        label: "Sugestão do Chef",
        bgColor: "bg-espresso/15",
        textColor: "text-espresso",
    },
};
