import cs from "classnames";
// import { useNavigate } from "react-router";

import "./style/index.scss";
import { Dispatch } from "react";

interface NavbarProps {
  setRoute: Dispatch<React.SetStateAction<string>>
}

function Navbar(props: NavbarProps) {
  // const navigate = useNavigate();

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
          onClick={() => props.setRoute(route.name)}
        >
          {route.title}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
