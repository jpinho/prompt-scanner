import type { ScanResult, ScannerConfig } from "./types.js";

const DEFAULT_RESULT: ScanResult = {
	risk: "none",
	score: 0,
	blocked: false,
	findings: [],
	scanDuration: 0,
	rulesEvaluated: 0,
	inputLength: 0,
	preprocessed: false,
};

export async function scan(_input: string, _config?: ScannerConfig): Promise<ScanResult> {
	// TODO: implement in PR 7
	return { ...DEFAULT_RESULT, inputLength: _input.length };
}

export function createScanner(_config?: ScannerConfig) {
	return {
		scan: (input: string) => scan(input, _config),
	};
}
