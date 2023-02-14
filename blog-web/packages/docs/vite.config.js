import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    SearchPlugin({
      encode: false,
      tokenize: 'full'
    })
  ],
  // esbuild: {
  //   pure: ['console.log'],
  //   minify: true
  // },
});
