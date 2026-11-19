import { copyFileSync, mkdirSync } from "node:fs";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(`${botDir}/POST.json`, `${outputDir}/POST.json`);
} catch (err) {
  console.error(`failed to copy POST.json: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
