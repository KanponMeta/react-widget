import React, { useRef, useEffect } from "react";

import {
  getProductionCountBarData,
  getProductionMeterBarData,
  getProductionWeightBarData,
  getProductionMachineStatisticBarData,
  getProductionStaffStatisticBarData,
} from "./data/handleHistoricalProductionData";

import { EChartsType } from "echarts/core";
import { echartsInstance } from "@/components/Echart";

import "./index.scss";

const ProductionCount: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(getProductionCountBarData());
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
    <div className="historical-production-count">
      <div className="historical-production-count-title">生产支数统计</div>
      <div className="historical-production-count-echart">
        <div
          className="historical-production-count-echart-bar"
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

const ProductionMeter: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(getProductionMeterBarData());
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
    <div className="historical-production-count">
      <div className="historical-production-count-title">生产米数统计</div>
      <div className="historical-production-count-echart">
        <div
          className="historical-production-count-echart-bar"
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

const ProductionWeight: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(getProductionWeightBarData());
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
    <div className="historical-production-count">
      <div className="historical-production-count-title">生产重量统计</div>
      <div className="historical-production-count-echart">
        <div
          className="historical-production-count-echart-bar"
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

const ProductionMachineStatistic: React.FC = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(getProductionMachineStatisticBarData());
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

    const createChart = () => {
      const chartElement = barRef.current;
      chartInstance = echartsInstance.init(chartElement);

      chartInstance.setOption(getProductionStaffStatisticBarData());
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
  return (
    <div className="historical-production">
      <div className="historical-production-top">
        <ProductionCount />
        <ProductionMeter />
        <ProductionWeight />
      </div>
      <div className="historical-production-bottom">
        <ProductionMachineStatistic />
        <ProductionStaffStatistic />
      </div>
    </div>
  );
};

export default HistoricalProduction;
