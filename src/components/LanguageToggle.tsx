import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP_LANGUAGE_STORAGE_KEY } from "@/i18n";
import { ESupportedLanguages } from "@/types/common.types";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
    {
        code: ESupportedLanguages.PORTUGUESE,
        label: "Português",
        flag: "🇵🇹",
    },
    {
        code: ESupportedLanguages.ENGLISH,
        label: "English",
        flag: "🇬🇧",
    },
];

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const currentLanguage =
        languages.find((lang) => lang.code === i18n.language) || languages[0];

    const changeLanguage = (lang: ESupportedLanguages) => {
        i18n.changeLanguage(lang);
        localStorage.setItem(APP_LANGUAGE_STORAGE_KEY, lang);
    };

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <button className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-cappuccino hover:text-cream transition-all duration-300 focus:outline-none">
                    <Globe className="w-5 h-5" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[140px]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`cursor-pointer ${
                            currentLanguage.code === lang.code
                                ? "bg-accent"
                                : ""
                        }`}
                    >
                        <span className="mr-2">{lang.flag}</span>
                        <span>{lang.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageToggle;
