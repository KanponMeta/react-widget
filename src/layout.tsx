import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "antd";
import LoadMonitor from "@/pages/loadMonitor";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./layout.scss";

function PageLayout() {
  return (
    <Layout className="layout">
      <div className="layout-header">
        <Navbar show />
      </div>
      <div className="layout-content">
        <Routes>
          <Route path="/" element={<Navigate to="/loadMonitor" />}></Route>
          <Route path="/loadMonitor" element={<LoadMonitor />}></Route>
          {/* <Route
            path="*"
            element={lazy(() => import("./pages/exception/403"))}
          /> */}
        </Routes>
      </div>
      <div className="layout-footer">
        <Footer />
      </div>
    </Layout>
  );
}

export default PageLayout;
