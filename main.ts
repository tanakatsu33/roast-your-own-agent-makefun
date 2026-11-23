import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "My agent remembers a million tokens, forgets the one instruction I gave it twice, and calls that context management: I didn't hire an assistant, I adopted a goldfish with API keys.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
