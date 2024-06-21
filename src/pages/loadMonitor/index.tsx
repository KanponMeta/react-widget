import React, { useEffect, useRef, useState } from "react";

import {
  ProductLoadType,
  generateProcessBarOption,
} from "./data/handleProcessLoad";
import {
  getMachineProductCountBarData,
  getMachineProductDurationPieData,
} from "./data/handleMachineData";
import { getLoadMonitorStatistic } from "@/service/loadMonitor/index";

import { EChartsType } from "echarts/core";
import { echartsInstance } from "@/components/Echart";
import {
  ConfigProvider,
  Descriptions,
  DescriptionsProps,
  Table,
  TableProps,
} from "antd";

import "./index.scss";

const ProcessCard: React.FC = () => {
  interface DataType {
    id: string;
    machine: string;
    count: string;
    weight: string;
    time: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "工艺卡号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "作业机台",
      dataIndex: "machine",
      key: "machine",
    },
    {
      title: "生产支数",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "生产重量",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "进站时间",
      dataIndex: "time",
      key: "time",
    },
  ];

  const data: DataType[] = [
    {
      id: "24-05-144",
      machine: "设备1",
      count: "36支",
      weight: "4500kg",
      time: "2024.5.14 09:01:49",
    },
    {
      id: "24-05-145",
      machine: "设备1",
      count: "36支",
      weight: "4500kg",
      time: "2024.5.14 09:01:49",
    },
    {
      id: "24-05-146",
      machine: "设备1",
      count: "36支",
      weight: "4500kg",
      time: "2024.5.14 09:01:49",
    },
    {
      id: "24-05-147",
      machine: "设备1",
      count: "36支",
      weight: "4500kg",
      time: "2024.5.14 09:01:49",
    },
    {
      id: "24-05-148",
      machine: "设备1",
      count: "36支",
      weight: "4500kg",
      time: "2024.5.14 09:01:49",
    },
    {
      id: "24-05-149",
      machine: "设备1",
      count: "36支",
      weight: "4500kg",
      time: "2024.5.14 09:01:49",
    },
  ];

  return (
    <div className="product-card">
      <div className="product-card-title">当前生产中工艺卡信息</div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              borderColor: "#000E62",
              headerBg: "#000E62",
              headerBorderRadius: 0,
              headerColor: "#13BACE",
              headerSplitColor: "#000E62",
              cellFontSize: 12,
            },
          },
        }}
      >
        <Table
          className="product-card-table"
          rowKey={"id"}
          size="small"
          pagination={false}
          columns={columns}
          dataSource={data}
          rowHoverable={false}
          rowClassName={() => {
            return "product-card-table-row";
          }}
        />
      </ConfigProvider>
    </div>
  );
};

const ProductDuration: React.FC = () => {
  const pieRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = pieRef.current;
      chartInstance = echartsInstance.init(chartElement);

      // 使用配置项绘制图表
      chartInstance.setOption(getMachineProductDurationPieData());
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
      }
    };

    createChart();

    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="product-duration">
      <div className="product-duration-title">今日设备生产时长占比</div>
      <div className="product-duration-echart">
        <div className="product-duration-echart-bar" ref={pieRef}></div>
      </div>
    </div>
  );
};

const ProductCount: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(getMachineProductCountBarData());
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
      }
    };

    createChart();

    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="product-count">
      <div className="product-count-title">各设备今日产出支数</div>
      <div className="product-count-echart">
        <div className="product-count-echart-bar" ref={barRef}></div>
      </div>
    </div>
  );
};

const ProductWeight: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      // 使用配置项绘制图表

      chartInstance.setOption(getMachineProductCountBarData());
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
      }
    };

    createChart();

    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="product-weight">
      <div className="product-weight-title">各设备今日产出重量</div>
      <div className="product-weight-echart">
        <div className="product-weight-echart-bar" ref={barRef}></div>
      </div>
    </div>
  );
};

const Statistic: React.FC = () => {
  const [items, setItems] = useState<DescriptionsProps["items"]>([]);

  useEffect(() => {
    getLoadMonitorStatistic("冷轧")
      .then((res) => {
        setItems(res.data);
        console.log("Statistic", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="statistic">
      <div className="statistic-title">各设备今日产出重量</div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              borderColor: "#000E62",
              headerBg: "#000E62",
              headerBorderRadius: 0,
              headerColor: "#13BACE",
              headerSplitColor: "#000E62",
              cellFontSize: 12,
            },
            Descriptions: {
              titleMarginBottom: 50,
              itemPaddingBottom: 5,
            },
          },
        }}
      >
        <Descriptions
          className="statistic-content"
          layout="vertical"
          column={5}
          items={items}
          colon={false}
          size="small"
          labelStyle={{ color: "#c9c9c9", fontSize: "18px" }}
          contentStyle={{
            width: "100%",
            color: "#00d8ff",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        />
      </ConfigProvider>
    </div>
  );
};

const Process: React.FC<{ data: any[] }> = () => {
  const [loadType, setLoadType] = useState<ProductLoadType>("loadCount");
  const loadTypeMap: { key: ProductLoadType; value: string }[] = [
    {
      key: "loadCount",
      value: "负载支数",
    },
    {
      key: "loadMeter",
      value: "负载米数",
    },
    {
      key: "loadWeight",
      value: "负载重量",
    },
  ];

  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = (options: any) => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(options);
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
      }
    };

    generateProcessBarOption(loadType)
      .then((options) => {
        console.log("Process", options);
        createChart(options);
      })
      .catch((err: any) => {
        console.log(err);
      });

    return () => {
      destroyChart();
    };
  }, [loadType]);

  return (
    <div className="process">
      <div className="process-title">各工序今日生产情况</div>
      <div className="process-operator">
        {loadTypeMap.map((item) => (
          <div
            key={item.key}
            className="process-operator-item"
            onClick={() => setLoadType(item.key)}
          >
            {item.value}
          </div>
        ))}
      </div>
      <div className="process-echart">
        <div className="process-echart-bar" ref={barRef}></div>
      </div>
    </div>
  );
};

const LoadMonitor = () => {
  return (
    <div className="load-monitor">
      <div className="load-monitor-left">
        <Process data={[]} />
      </div>
      <div className="load-monitor-right">
        <div className="load-monitor-right-1">
          <Statistic />
        </div>
        <div className="load-monitor-right-2">
          <ProductDuration />
          <ProcessCard />
        </div>
        <div className="load-monitor-right-3">
          <ProductCount />
          <ProductWeight />
        </div>
      </div>
    </div>
  );
};

export default LoadMonitor;
