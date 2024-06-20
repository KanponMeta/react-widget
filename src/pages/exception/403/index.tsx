import React from "react";
import { Result, Button } from "antd";

import "./style/index.scss";

const Exception403: React.FC = () => {
  return (
    <div className="container">
      <Result
        className="result"
        status="404"
        subTitle="对不起，您没有访问该资源的权限"
        extra={
          <Button key="back" type="primary">
            返回
          </Button>
        }
      />
    </div>
  );
};

export default Exception403;
