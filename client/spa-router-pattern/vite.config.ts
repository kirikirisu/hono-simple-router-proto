import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../../assets/static/js",
    rollupOptions: {
      input: {
        router: "src/router.tsx",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react()],
});
