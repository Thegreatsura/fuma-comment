import { defineConfig } from "tsdown";

const config = defineConfig({
	entry: ["./src/index.tsx", "./src/atom.tsx", "./src/uploadthing/index.ts"],
	format: "esm",
	dts: true,
	target: "es2023",
	fixedExtension: false,
	platform: "browser",
	deps: {
		onlyBundle: [],
	},
});

export default config;
