import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: { index: "src/index.ts" },
		format: ["esm", "cjs"],
		dts: true,
		sourcemap: true,
		clean: true,
	},
	{
		entry: { cli: "cli/index.ts" },
		format: ["esm"],
		banner: { js: "#!/usr/bin/env node" },
		sourcemap: true,
	},
]);
