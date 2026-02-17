// Risk score aggregation — implemented in PR 6
import type { Finding, RiskLevel } from "./types.js";

export function computeScore(_findings: Finding[]): { score: number; risk: RiskLevel } {
	return { score: 0, risk: "none" };
}
