import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import liveReload from "vite-plugin-live-reload";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/legislator-2023-f2e/",
	plugins: [vue(), liveReload()],
	server: {
		// 啟動 server 時預設開啟的頁面
		open: "./",
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
