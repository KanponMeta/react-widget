import React, { useState } from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./context";

import PageLayout from "@/layout";

// const router = createHashRouter([
//   {
//     path: "/",
//     Component: Home,
//   },
// ]);

const App: React.FC = () => {
  const [tab, setTab] = useState("load");

  const contextValue = {
    tab,
    setTab,
  };

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
        <GlobalContext.Provider value={contextValue}>
          <PageLayout />
        </GlobalContext.Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
