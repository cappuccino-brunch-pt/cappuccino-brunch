import { MenuItemModal } from "@/components/Menu/components/MenuItemModal";
import { MenuTag } from "@/components/Menu/components/MenuTag";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { MenuItem } from "./config";
import { MENU_CONFIG, MENU_TYPES } from "./config";

const Menu = () => {
    const { t } = useTranslation();
    const [activeType, setActiveType] = useState<MENU_TYPES>(MENU_TYPES.FOOD);
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    // Auto select the first category of the active type
    const [activeCategoryId, setActiveCategoryId] = useState(
        MENU_CONFIG[activeType][0].id,
    );

    const currentCategoryConfig = MENU_CONFIG[activeType].find(
        (cat) => cat.id === activeCategoryId,
    );

    const handleTypeChange = (type: MENU_TYPES) => {
        setActiveType(type);
        setActiveCategoryId(MENU_CONFIG[type][0].id);
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
                        onClick={() => handleTypeChange(MENU_TYPES.FOOD)}
                        className={cn(
                            "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 border-b-2",
                            activeType === MENU_TYPES.FOOD
                                ? "border-cappuccino text-cappuccino"
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-cappuccino/30",
                        )}
                    >
                        Comidas
                    </button>
                    <button
                        onClick={() => handleTypeChange(MENU_TYPES.DRINK)}
                        className={cn(
                            "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 border-b-2",
                            activeType === MENU_TYPES.DRINK
                                ? "border-cappuccino text-cappuccino"
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-cappuccino/30",
                        )}
                    >
                        Bebidas
                    </button>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
                    {MENU_CONFIG[activeType].map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategoryId(category.id)}
                            className={cn(
                                "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                                activeCategoryId === category.id
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-cream text-foreground hover:bg-cappuccino/10",
                            )}
                        >
                            {t(category.labelKey)}
                        </button>
                    ))}
                </div>

                {/* Category Description Badge */}
                {currentCategoryConfig?.descriptionKey && (
                    <div className="flex justify-center mb-6 sm:mb-8 px-2">
                        <div className="bg-cream/50 border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-2xl text-center">
                            <p className="text-sm sm:text-base text-muted-foreground">
                                {t(currentCategoryConfig.descriptionKey)}
                            </p>
                        </div>
                    </div>
                )}

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {currentCategoryConfig?.items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedItem(item)}
                            className="group bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
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
                                            {t(item.nameKey)}
                                        </h3>
                                        <span className="text-sm sm:text-lg font-semibold text-cappuccino flex-shrink-0">
                                            {item.price}
                                        </span>
                                    </div>
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-1 sm:mb-2">
                                            {item.tags.map((tag) => (
                                                <MenuTag key={tag} type={tag} />
                                            ))}
                                        </div>
                                    )}
                                    <p
                                        className="text-xs sm:text-sm text-muted-foreground line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: (
                                                t(item.descriptionKey) ?? ""
                                            ).replace(/\n/g, " "),
                                        }}
                                    />
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

            <MenuItemModal
                item={selectedItem}
                open={!!selectedItem}
                onOpenChange={(open) => !open && setSelectedItem(null)}
            />
        </section>
    );
};

export default Menu;
