import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageSeo } from "../seo/usePageSeo";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <PageSeo />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
