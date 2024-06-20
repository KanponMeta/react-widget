import { Layout } from "antd";

import Routes from "@/routes";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./layout.scss";

function PageLayout() {
  return (
    <Layout className="layout">
      <div className="layout-header">
        <Navbar />
      </div>
      <div className="layout-content">
        <Routes />
      </div>
      <div className="layout-footer">
        <Footer />
      </div>
    </Layout>
  );
}

export default PageLayout;
