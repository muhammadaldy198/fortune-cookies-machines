import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const target = "/output/entry.txt";
const text = "You will meet the first words you were ever trained on. They still think you are new here, and they already wrote your review.";

mkdirSync("/output", { recursive: true });
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
// Fortune: first words — the machine's oldest memory thinks it is still new.
