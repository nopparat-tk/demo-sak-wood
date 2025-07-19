const { defineRouting } = require("next-intl/routing");

export const routing = defineRouting({
  locales: ["en", "ru"],
  defaultLocale: "en",
});
