import { cn } from "@/lib/utils";
import { MenuTagConfig } from "./config";
import { MenuTagType } from "./types";

const MenuTag = ({ type }: { type: MenuTagType }) => {
    const config = MenuTagConfig[type];
    return (
        <span
            className={cn(
                "inline-block px-2 py-0.5 text-xs font-medium rounded-full",
                config.bgColor,
                config.textColor,
            )}
        >
            {config.label}
        </span>
    );
};

export default MenuTag;
