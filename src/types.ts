export type Severity = "critical" | "high" | "medium" | "low" | "info";
export type Confidence = "high" | "medium" | "low";
export type RiskLevel = "critical" | "high" | "medium" | "low" | "none";

export interface RulePattern {
	type: "regex";
	value: string;
	flags?: string;
}

export interface Rule {
	id: string;
	name: string;
	description: string;
	category: string;
	severity: Severity;
	confidence: Confidence;
	patterns: RulePattern[];
	tags?: string[];
	examples?: {
		malicious?: string[];
		benign?: string[];
	};
}

export interface Finding {
	ruleId: string;
	ruleName: string;
	category: string;
	severity: Severity;
	confidence: Confidence;
	matchedPattern: string;
	matchedText: string;
	position: { start: number; end: number };
	description: string;
}

export interface ScanResult {
	risk: RiskLevel;
	score: number;
	blocked: boolean;
	findings: Finding[];
	scanDuration: number;
	rulesEvaluated: number;
	inputLength: number;
	preprocessed: boolean;
}

export interface ScannerConfig {
	rules?: {
		builtin?: boolean;
		custom?: string | Rule[];
		disable?: string[];
		enable?: string[];
		categories?: string[];
	};
	thresholds?: {
		block?: number;
		warn?: number;
	};
	preprocessor?: {
		enabled?: boolean;
		decodeBase64?: boolean;
		normalizeUnicode?: boolean;
		stripZeroWidth?: boolean;
		maxInputLength?: number;
	};
	performance?: {
		timeout?: number;
		earlyExit?: boolean;
	};
}
