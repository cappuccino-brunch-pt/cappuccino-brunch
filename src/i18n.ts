import { ESupportedLanguages } from "@/types/common.types";
import i18next, { ReactOptions } from "i18next";
import LanguageDetector, {
    DetectorOptions,
} from "i18next-browser-languagedetector";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const buildNumber = import.meta.env.VITE_BUILD_NUMBER;

export const APP_LANGUAGE_STORAGE_KEY = "cappuccino-brunch-language";

i18next
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init<HttpBackendOptions & DetectorOptions & ReactOptions>({
        react: {
            useSuspense: true,
        },
        backend: {
            loadPath: `/locales/{{ns}}.{{lng}}.json`,
            queryStringParams: { v: buildNumber ?? crypto.randomUUID() },
        },
        debug: false, // process.env.NODE_ENV === 'development',
        lng:
            localStorage.getItem(APP_LANGUAGE_STORAGE_KEY) ||
            ESupportedLanguages.PORTUGUESE,
        fallbackLng: ESupportedLanguages.PORTUGUESE,
        returnEmptyString: false,
        returnNull: false, // ensure to update this value in "src/i18n-declaration.d.ts" before making changes.
        ns: ["translations"],
        defaultNS: "translations",
        detection: {
            // order and from where user language should be detected
            order: ["localStorage", "cookie"],
            // keys or params to lookup language from
            lookupCookie: "i18nextLng",
            lookupQuerystring: "i18nextLng",
            // cache user language on
            caches: ["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });
