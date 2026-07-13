import fs from "fs";
import path from "path";
import type { Visa } from "./types";

const VISAS_DIR = path.join(process.cwd(), "content", "visas");

export function getVisas(): Visa[] {
  const files = fs.readdirSync(VISAS_DIR).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(VISAS_DIR, file), "utf-8");
    return JSON.parse(raw) as Visa;
  });
}

export function getVisasByCategory(categoryId: string): Visa[] {
  return getVisas().filter((v) => v.category === categoryId);
}
