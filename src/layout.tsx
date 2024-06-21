import { useState } from "react";
import { Layout } from "antd";

import { DEFAULT_ROUTE, useRoute, routes } from "@/routes";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { GlobalContext } from "@/context";

import "./layout.scss";

function PageLayout() {
  const [route, setRoute] = useState<string>(DEFAULT_ROUTE);

  return (
    <GlobalContext.Provider value={{ route, navigate: setRoute, routes }}>
      <Layout className="layout">
        <div className="layout-header">
          <Navbar />
        </div>
        <div className="layout-content">{useRoute(route)}</div>
        <div className="layout-footer">
          <Footer />
        </div>
      </Layout>
    </GlobalContext.Provider>
  );
}

export default PageLayout;
