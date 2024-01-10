import "server-only";

import type { Locale } from "./i18n";

const dictionaries = {
    en: () => import("./en.json").then(module => module.default),
    zh: () => import("./zh.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
