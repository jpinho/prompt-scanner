// CLI entry point — implemented in PR 8
import { defineCommand, runMain } from "citty";

const main = defineCommand({
	meta: {
		name: "prompt-scanner",
		version: "0.1.0",
		description: "Detect prompt injection, jailbreak, and adversarial input",
	},
	run() {
		console.log("prompt-scanner v0.1.0 — CLI coming in a future PR");
	},
});

runMain(main);
