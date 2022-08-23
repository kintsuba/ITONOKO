import { defineConfig } from "windicss/helpers";
import { toRGB } from "windicss/utils";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        "hair-black": "#090909",
      },
      fontFamily: {
        sans: [
          "Segoe UI",
          "Meiryo",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: [
          "Segoe UI",
          "Meiryo",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        body: [
          "Segoe UI",
          "Meiryo",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    require("windicss/plugin/forms"),
    require("@windicss/plugin-animations")({
      settings: {
        animatedSpeed: 500,
        animationDelaySpeed: 1000,
      },
    }),
  ],
});
