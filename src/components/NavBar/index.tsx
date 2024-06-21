import { useContext } from "react";
import { GlobalContext } from "@/context";

import cs from "classnames";
import "./style/index.scss";

function Navbar() {
  const { navigate, routes } = useContext(GlobalContext);

  return (
    <div className="navbar">
      {routes.map((route, index) => {
        if (route?.name && route?.name !== "" && route?.name !== undefined) {
          return (
            <div
              className={cs(
                "navbar-middle",
                index < 2 && "navbar-left-item",
                index > 2 && "navbar-right-item"
              )}
              key={index}
              onClick={() => navigate(route.path)}
            >
              {route.title}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default Navbar;
