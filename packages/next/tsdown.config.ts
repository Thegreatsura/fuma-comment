import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	dts: true,
	target: "es2023",
	format: "esm",
	fixedExtension: false,
	deps: {
		onlyBundle: [],
	},
});
