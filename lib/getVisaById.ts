import { getVisas } from "./getVisas";
import type { Visa } from "./types";

export function getVisaById(id: string): Visa | undefined {
  return getVisas().find((v) => v.id === id);
}
