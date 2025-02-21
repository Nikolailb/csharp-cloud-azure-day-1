import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL), // Read from Azure
  },
});
console.log("ENV VARIABLES:", process.env);
