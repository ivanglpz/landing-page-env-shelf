import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://env-shelf.vercel.app",
  integrations: [tailwind()],
});
