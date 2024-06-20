import { useState } from "react";
import { Layout } from "antd";

// import Routes from "@/routes";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LoadMonitor from "@/pages/loadMonitor";
import HistoricalProduction from "@/pages/historicalProduction";

import "./layout.scss";

function PageLayout() {
  const [route, setRoute] = useState<string>("loadMonitor");

  return (
    <Layout className="layout">
      <div className="layout-header">
        <Navbar setRoute={setRoute} />
      </div>
      <div className="layout-content">
        {
          route === "loadMonitor" && (<LoadMonitor />)
        }
        {
          route === "historicalProduction" && (<HistoricalProduction />)
        }
      </div>
      <div className="layout-footer">
        <Footer />
      </div>
    </Layout>
  );
}

export default PageLayout;
