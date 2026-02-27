import { MenuTag } from "@/components/Menu/components/MenuTag";
import type { MenuItem } from "@/components/Menu/config";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

interface MenuItemModalProps {
    item: MenuItem | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const MenuItemModal = ({ item, open, onOpenChange }: MenuItemModalProps) => {
    const { t } = useTranslation();

    if (!item) return null;

    const description = item.descriptionKey ? t(item.descriptionKey) : "";

    const hasVariants = item.variants && item.variants.length > 0;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-md p-0 overflow-hidden gap-0 max-h-[90vh] sm:max-h-[85vh] rounded-xl sm:rounded-lg">
                {item.image && (
                    <div className="w-full aspect-[4/3] overflow-hidden">
                        <img
                            src={item.image}
                            alt={t(item.nameKey)}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto">
                    <DialogHeader className="space-y-2">
                        <DialogTitle className="font-serif text-xl sm:text-2xl font-semibold text-foreground pr-8">
                            {t(item.nameKey)}
                        </DialogTitle>
                    </DialogHeader>

                    {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {item.tags.map((tag) => (
                                <MenuTag key={tag} type={tag} />
                            ))}
                        </div>
                    )}

                    {description && !hasVariants && (
                        <DialogDescription
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: description.replace(/\n/g, "<br>"),
                            }}
                        />
                    )}

                    {hasVariants ? (
                        <div className="space-y-3">
                            <p className="text-sm font-medium text-foreground">
                                {t("menu.variants_title")}
                            </p>
                            <div className="space-y-3">
                                {item.variants!.map((variant, index) => {
                                    const variantDescription =
                                        variant.descriptionKey
                                            ? t(variant.descriptionKey)
                                            : "";
                                    return (
                                        <div
                                            key={index}
                                            className="p-3 bg-cream/50 rounded-lg border border-border"
                                        >
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className=" font-bold text-foreground">
                                                    {t(variant.nameKey)}
                                                </h4>
                                                <span className="text-base font-semibold text-cappuccino flex-shrink-0">
                                                    {variant.price}
                                                </span>
                                            </div>
                                            {variantDescription && (
                                                <p
                                                    className="text-sm text-muted-foreground mt-1"
                                                    dangerouslySetInnerHTML={{
                                                        __html: variantDescription.replace(
                                                            /\n/g,
                                                            "<br>",
                                                        ),
                                                    }}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="pt-2 border-t border-border">
                            <span className="text-lg sm:text-xl font-semibold text-cappuccino">
                                {item.price}
                            </span>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MenuItemModal;
