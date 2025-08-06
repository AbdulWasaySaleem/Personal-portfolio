import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Layout.css";

const Layout = ({ pageTitle, children }) => {
  useEffect(() => {
    document.title = `Abdul Wasay - ${pageTitle}`;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageTitle]);

  return (
    <main className="layout">
      <Sidebar />
      <MainContent title={pageTitle}>{children}</MainContent>
    </main>
  );
};

export default Layout;
