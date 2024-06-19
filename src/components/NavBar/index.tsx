import cs from "classnames";

import "./style/index.scss";

function Navbar({ show }: { show: boolean }) {
  console.log(show);
  const routes = [
    {
      title: "负载监控",
      name: "loadMonitor",
      path: "/loadMonitor",
    },
    {
      title: "历史生产",
      name: "historicalProduction",
      path: "/historicalProduction",
    },
    {
      title: "管理车间MES生产系统智慧看板",
      name: "home",
      path: "/home",
    },
    {
      title: "员工扫描",
      name: "employeeScanner",
      path: "/employeeScanner",
    },
    {
      title: "转运信息",
      name: "transferInfo",
      path: "/transferInfo",
    },
  ];
  return (
    <div className="navbar">
      {routes.map((route, index) => (
        <div
          className={cs(
            "navbar-middle",
            index < 2 && "navbar-left-item",
            index > 2 && "navbar-right-item"
          )}
          key={index}
        >
          {route.title}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
