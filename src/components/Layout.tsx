import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-container">
      <div className="layout-content">{children}</div>
    </div>
  );
}

export default Layout;
