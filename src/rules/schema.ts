// Rule schema validation — implemented in PR 3
import type { Rule } from "../types.js";

export function validateRule(_data: unknown): { valid: boolean; rule?: Rule; errors?: string[] } {
	return { valid: false, errors: ["Not implemented"] };
}
