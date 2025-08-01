const { defineRouting } = require("next-intl/routing");

export const routing = defineRouting({
  locales: ["ru", "en"],
  defaultLocale: "ru",
});
