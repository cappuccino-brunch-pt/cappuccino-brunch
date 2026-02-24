import { clsx, type ClassValue } from "clsx";
import { TFunction } from "i18next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Schedule utils
export const getOpeningHoursForHeroComponent = (): string => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    const summerMonths = [5, 6, 7, 8];

    // Summer schedule is from Jun 26th to September 30th
    const isSummer =
        month === 5
            ? summerMonths.includes(month) && day >= 26
            : summerMonths.includes(month);

    if (isSummer) {
        return "10h - 20h";
    }

    return "10h - 19h";
};

export const getScheduleInfoForContactComponent = (t: TFunction) => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    const summerMonths = [5, 6, 7, 8];

    // Summer schedule is from Jun 26th to September 30th
    const isSummer =
        month === 5
            ? summerMonths.includes(month) && day >= 26
            : summerMonths.includes(month);

    if (isSummer) {
        return {
            value: t("contact.features.schedule.value", {
                timespan: "10h - 20h",
            }),
            subvalue: t("contact.features.schedule.subvalue", {
                kitchen_closing_time: "19:30h",
            }),
        };
    }

    return {
        value: t("contact.features.schedule.value", { timespan: "10h - 19h" }),
        subvalue: t("contact.features.schedule.subvalue", {
            kitchen_closing_time: "18:30h",
        }),
    };
};
