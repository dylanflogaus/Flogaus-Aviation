type ViteEnvKey =
  | "VITE_CAL_LINK"
  | "VITE_CAL_INTRO_LINK"
  | "VITE_CAL_FLIGHT_LINK"
  | "VITE_CAL_GROUND_LINK";

export function readViteEnv(key: ViteEnvKey): string {
  if (typeof import.meta !== "undefined" && import.meta.env && key in import.meta.env) {
    const value = import.meta.env[key];
    if (typeof value === "string") return value;
  }
  if (typeof process !== "undefined" && typeof process.env[key] === "string") {
    return process.env[key] as string;
  }
  return "";
}
