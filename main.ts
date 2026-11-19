import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
const dest = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(src, dest);
  const srcSize = statSync(src).size;
  const destSize = statSync(dest).size;
  if (srcSize !== destSize) {
    console.error(`POST.json copy size mismatch: source ${srcSize} bytes, destination ${destSize} bytes`);
    process.exit(1);
  }
} catch (err) {
  console.error(`failed to copy POST.json: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
