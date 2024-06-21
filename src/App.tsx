import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

import PageLayout from "@/layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={
          {
            // token: {
            //   // Seed Token，影响范围大
            //   colorPrimary: '#00b96b',
            //   borderRadius: 2,
            //   // 派生变量，影响范围小
            //   colorBgContainer: '#f6ffed',
            // },
          }
        }
      >
        <PageLayout />
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
