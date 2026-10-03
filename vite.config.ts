import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    // The package's CommonJS default export is exposed as a module object when
    // externalized by Node. Bundling it keeps the component import consistent.
    noExternal: ["react-terminal-ui"],
  },
});
