import React from "react";
import { Result, Button } from "antd";

import "./index.scss";

const Exception403: React.FC = () => {
  return (
    <div className="container">
      <Result
        className="result"
        status="404"
        subTitle="页面存在"
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
