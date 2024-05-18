import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import formatters from "./formatters";

export const supportedLanguages = {
    en: "English",
    es: "Spanish",
    fr: "French",
    ar: "Arabic (العربية)",
}

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: Object.keys(supportedLanguages),
        interpolation: {
            escapeValue: false
        }
    });

Object.entries(formatters).forEach(([key, resolver]) => {
    i18next.services.formatter?.add(key, resolver);
});

export default i18next;