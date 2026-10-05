export function normalizePathname(pathname: string): string {
  const base = pathname.split(/[?#]/, 1)[0] || "/";
  if (base.length > 1 && base.endsWith("/")) {
    return base.slice(0, -1);
  }
  return base;
}
