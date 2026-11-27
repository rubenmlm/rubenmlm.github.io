import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  base: "./", // Asegura que las rutas funcionen al subirlo a GitHub Pages
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
    emptyOutDir: true,
  },
});