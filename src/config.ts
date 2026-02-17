import type { ScannerConfig } from "./types.js";

export const DEFAULT_CONFIG: Required<
	Pick<ScannerConfig, "thresholds" | "preprocessor" | "performance">
> & { rules: Required<Pick<NonNullable<ScannerConfig["rules"]>, "builtin">> } = {
	rules: {
		builtin: true,
	},
	thresholds: {
		block: 0.8,
		warn: 0.4,
	},
	preprocessor: {
		enabled: true,
		decodeBase64: true,
		normalizeUnicode: true,
		stripZeroWidth: true,
		maxInputLength: 10_000,
	},
	performance: {
		timeout: 100,
		earlyExit: false,
	},
};
