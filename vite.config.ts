import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5100,
    host: "0.0.0.0",
    proxy: {
      "/login": {
        //服务器接口路径地址，根据路径设置
        target: "https://accounts.zoho.com.cn/oauth/v2/token", //你的服务器地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/login/, ""), // 重写路径把路径变成空字符
      },
      "/api": {
        //服务器接口路径地址，根据路径设置
        target:
          "https://creatorapp.zoho.com.cn/widgetapi/zhongtao.li/myapplication/report", //你的服务器地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径把路径变成空字符
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  base: "./",
});
