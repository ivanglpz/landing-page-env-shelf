import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://env-shelf.dev",
  integrations: [tailwind()]
});
