import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHome from "./locales/en/home.json";
import enNavigation from "./locales/en/navigation.json";

import plHome from "./locales/pl/home.json";
import plNavigation from "./locales/pl/naviagtion.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        navigation: enNavigation,
      },
      pl: {
        home: plHome,
        navigation: plNavigation,
      },
    },

    fallbackLng: "en",

    supportedLngs: ["en", "pl"],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
