import LoadMonitor from "@/pages/loadMonitor";
import HistoricalProduction from "@/pages/historicalProduction";
import Home from "@/pages/home";
import EmployeeScanner from "@/pages/employeeScanner";
import TransferInfo from "@/pages/transferInfo";
import NotFound from "@/pages/exception/404";

export const DEFAULT_ROUTE = "/loadMonitor";

export const routes = [
  {
    title: "负载监控",
    name: "loadMonitor",
    path: "/loadMonitor",
    element: <LoadMonitor />,
  },
  {
    title: "历史生产",
    name: "historicalProduction",
    path: "/historicalProduction",
    element: <HistoricalProduction />,
  },
  {
    title: "数字化生产系统智能监控平台",
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    title: "员工扫描",
    name: "employeeScanner",
    path: "/employeeScanner",
    element: <EmployeeScanner />,
  },
  {
    title: "转运信息",
    name: "transferInfo",
    path: "/transferInfo",
    element: <TransferInfo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const useRoute = (path: string) => {
  return routes.find((v) => v.path === path)?.element || <NotFound />;
};
