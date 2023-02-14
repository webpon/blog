import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
  // 占用体积太大了，先不使用本地搜索
  // plugins: [
  //   SearchPlugin({
  //     encode: false,
  //     tokenize: 'full'
  //   })
  // ],
  // esbuild: {
  //   pure: ['console.log'],
  //   minify: true
  // },
});
