export type RouteSeo = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  robots: "index,follow" | "noindex,nofollow";
};
