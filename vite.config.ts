import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({ registerType: "autoUpdate" }),
    react({ jsxRuntime: "classic" }),
    VitePluginFonts({
      google: {
        families: ["Carter One", "Montserrat", "Permanent Marker"],
      },
    }),
  ],
});
