import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,        // 🔒 Always use 5174
    strictPort: true,  // ❌ Fail if port is in use
  },
  define: {
    "process.env": process.env,
  },
});
