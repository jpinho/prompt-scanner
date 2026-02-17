import { describe, expect, it } from "vitest";
import { createScanner, scan } from "../src/index.js";

describe("smoke tests", () => {
	it("scan() returns a valid ScanResult", async () => {
		const result = await scan("hello world");
		expect(result).toMatchObject({
			risk: "none",
			score: 0,
			blocked: false,
			findings: [],
			inputLength: 11,
			preprocessed: false,
		});
	});

	it("createScanner() returns a scanner with scan method", async () => {
		const scanner = createScanner();
		const result = await scanner.scan("test input");
		expect(result.risk).toBe("none");
		expect(result.inputLength).toBe(10);
	});
});
