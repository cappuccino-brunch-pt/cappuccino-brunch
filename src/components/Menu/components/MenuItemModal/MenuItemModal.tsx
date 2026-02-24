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

    const description = item.descriptionKey
        ? t(item.descriptionKey)
        : item.description?.toString() ?? "";

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-md p-0 overflow-hidden gap-0 max-h-[90vh] sm:max-h-[85vh] rounded-xl sm:rounded-lg">
                {item.image && (
                    <div className="w-full aspect-[4/3] overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <DialogHeader className="space-y-2">
                        <DialogTitle className="font-serif text-xl sm:text-2xl font-semibold text-foreground pr-8">
                            {item.name}
                        </DialogTitle>
                    </DialogHeader>

                    {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {item.tags.map((tag) => (
                                <MenuTag key={tag} type={tag} />
                            ))}
                        </div>
                    )}

                    {description && (
                        <DialogDescription
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: description.replace(/\n/g, "<br>"),
                            }}
                        />
                    )}

                    <div className="pt-2 border-t border-border">
                        <span className="text-lg sm:text-xl font-semibold text-cappuccino">
                            {item.price}
                        </span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MenuItemModal;
