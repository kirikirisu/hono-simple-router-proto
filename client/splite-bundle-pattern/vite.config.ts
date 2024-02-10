import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../../assets/static/js",
    rollupOptions: {
      input: {
        top: "src/features/top/index.tsx",
        dashbord: "src/features/dashbord/index.tsx",
        profile: "src/features/profile/index.tsx",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react()],
});
