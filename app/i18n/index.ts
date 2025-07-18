import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./en/common.json";
import enNav from "./en/navigation.json";
import enBlogs from "./en/blogs.json";

import jaCommon from "./ja/common.json";
import jaNav from "./ja/navigation.json";
import jaBlogs from "./ja/blogs.json";

const resources = {
  en: {
    common: enCommon,
    navigation: enNav,
    blogs: enBlogs,
  },
  ja: {
    common: jaCommon,
    navigation: jaNav,
    blogs: jaBlogs,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "ja",
    debug: process.env.NODE_ENV === "development",
    ns: ["common", "navigation", "blogs"], // Add namespaces
    defaultNS: "common", // Set default
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "kuroco-language",
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;
