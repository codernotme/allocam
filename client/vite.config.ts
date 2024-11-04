import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional, for cleaner imports
    },
  },
  ssr: {
    noExternal: [/react/, /react-dom/], // Adjust based on dependencies
  },
});
