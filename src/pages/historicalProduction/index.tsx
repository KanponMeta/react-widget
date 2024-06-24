import React, { useRef, useEffect, useState } from "react";
import _ from "lodash";

import {
  getProductionStatisticOptions,
  getProductionMachineStatisticBarData,
  getProductionStaffStatisticBarData,
} from "./data/handleHistoricalProductionData";

import { EChartsType } from "echarts/core";
import { echartsInstance } from "@/components/Echart";
// import { ConfigProvider, CascaderProps, Cascader, Space } from "antd";
import { ConfigProvider, Space } from "antd";

import cs from "classnames";
import "./index.scss";

// interface Option {
//   value: string;
//   label: string;
//   children?: Option[];
// }

const ProductionStatistic: React.FC = () => {
  const countRef = useRef(null);
  const meterRef = useRef(null);
  const weightRef = useRef(null);

  useEffect(() => {
    let countInstance: EChartsType | null = null;
    let meterInstance: EChartsType | null = null;
    let weightInstance: EChartsType | null = null;

    if (
      _.isEmpty(countInstance) ||
      _.isEmpty(meterInstance) ||
      _.isEmpty(weightInstance)
    ) {
      countInstance = echartsInstance.init(countRef.current);
      meterInstance = echartsInstance.init(meterRef.current);
      weightInstance = echartsInstance.init(weightRef.current);
    }

    const destroyChart = () => {
      if (countInstance) {
        countInstance.dispose();
        countInstance = null;
      }
      if (meterInstance) {
        meterInstance.dispose();
        meterInstance = null;
      }
      if (weightInstance) {
        weightInstance.dispose();
        weightInstance = null;
      }
    };

    getProductionStatisticOptions().then((result) => {
      const { countOption, meterOption, weightOption } = result.data;
      countInstance?.setOption(countOption);
      meterInstance?.setOption(meterOption);
      weightInstance?.setOption(weightOption);
    });

    return () => {
      destroyChart();
    };
  }, []);

  // const options: Option[] = [
  //   {
  //     value: "zhejiang",
  //     label: "Zhejiang",
  //     children: [
  //       {
  //         value: "hangzhou",
  //         label: "Hangzhou",
  //         children: [
  //           {
  //             value: "xihu",
  //             label: "West Lake",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: "jiangsu",
  //     label: "Jiangsu",
  //     children: [
  //       {
  //         value: "nanjing",
  //         label: "Nanjing",
  //         children: [
  //           {
  //             value: "zhonghuamen",
  //             label: "Zhong Hua Men",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // const onChange: CascaderProps<Option>["onChange"] = (value) => {
  //   console.log(value);
  // };

  return (
    <div className="historical-production-statistic">
      <div className="historical-production-count">
        <div className="historical-production-count-title">生产支数统计</div>
        <div className="historical-production-count-operation">
          {/* <Space>
            <Cascader
              size="small"
              options={options}
              onChange={onChange}
              placeholder="Please select"
              style={{borderColor: "#fff"}}
            />
            <Cascader
              size="small"
              options={options}
              onChange={onChange}
              placeholder="Please select"
            />{" "}
          </Space> */}
        </div>
        <div className="historical-production-count-echart">
          <div
            className="historical-production-count-echart-bar"
            ref={countRef}
          ></div>
        </div>
      </div>
      <div className="historical-production-meter">
        <div className="historical-production-meter-title">生产米数统计</div>
        <div className="historical-production-meter-echart">
          <div
            className="historical-production-meter-echart-bar"
            ref={meterRef}
          ></div>
        </div>
      </div>
      <div className="historical-production-weight">
        <div className="historical-production-weight-title">生产重量统计</div>
        <div className="historical-production-weight-echart">
          <div
            className="historical-production-weight-echart-bar"
            ref={weightRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ProductionMachineStatistic: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    if (_.isEmpty(chartInstance)) {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);
    }

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
      }
    };

    getProductionMachineStatisticBarData().then((result) => {
      chartInstance?.setOption(result.data);
    });

    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="historical-production-machine-statistic">
      <div className="historical-production-machine-statistic-title">
        各设备生产统计
      </div>
      <div className="historical-production-machine-statistic-echart">
        <div
          className="historical-production-machine-statistic-echart-bar"
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

const ProductionStaffStatistic: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    if (_.isEmpty(chartInstance)) {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);
    }

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
      }
    };

    getProductionStaffStatisticBarData().then((result) => {
      chartInstance?.setOption(result.data);
    });

    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="historical-production-staff-statistic">
      <div className="historical-production-staff-statistic-title">
        各人员生产统计
      </div>
      <div className="historical-production-staff-statistic-echart">
        <div
          className="historical-production-staff-statistic-echart-bar"
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

const HistoricalProduction: React.FC = () => {
  const historyDuration = [
    {
      key: "year",
      value: "年度统计",
    },
    {
      key: "quarter",
      value: "季度统计",
    },
    {
      key: "month",
      value: "月度统计",
    },
    {
      key: "day",
      value: "每日统计",
    },
  ];
  const [currentHistoryDuration, setCurrentHistoryDuration] =
    useState<string>("day");

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#000E62",
          colorBorder: "#000E62",
        },
        components: {
          Cascader: {
            controlItemWidth: 50,
            controlWidth: 100,
            optionSelectedBg: "red",
          },
        },
      }}
    >
      <div className="historical-production">
        <div className="historical-production-top">
          <ProductionStatistic />
        </div>
        <div className="historical-production-middle">
          <ProductionMachineStatistic />
          <ProductionStaffStatistic />
        </div>
        <Space className="historical-production-bottom" size="large">
          {historyDuration.map((item) => (
            <div
              className={cs(
                "historical-production-bottom-item",
                currentHistoryDuration === item.key && "active"
              )}
              key={item.key}
              onClick={() => setCurrentHistoryDuration(item.key)}
            >
              {item.value}
            </div>
          ))}
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default HistoricalProduction;
