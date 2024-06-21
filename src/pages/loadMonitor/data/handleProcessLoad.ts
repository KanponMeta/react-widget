import type { ECOption } from "@/components/Echart/index";
import {
  ProcessLoad,
  getProductLoadProcessData,
} from "@/service/loadMonitor/index";

export type ProductLoadType = "loadCount" | "loadMeter" | "loadWeight";

export const generateProcessBarOption = async (
  type: ProductLoadType
): Promise<ECOption> => {
  const { data } = await getProductLoadProcessData();

  const barData = data.map((item: ProcessLoad) => {
    return {
      category: item.process,
      value: item[type],
    };
  });

  const options: ECOption = {
    grid: {
      left: "15%",
    },
    tooltip: {},
    dataset: {
      source: barData,
    },
    xAxis: {
      type: "value",
      show: false,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },

    yAxis: {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      nameTextStyle: {
        fontSize: 12,
        color: "#fff",
      },
      axisLabel: {
        showMinLabel: true,
        interval: 0,
        color: "#fff",
      },
    },

    series: [
      {
        type: "bar",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#3FBBFE", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#A541FF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [7, 7, 7, 7],
        },
        barWidth: 14,
        encode: {
          // Map the "amount" column to X axis.
          x: "value",
          // Map the "product" column to Y axis
          y: "category",
        },
        label: {
          show: true,
          position: "right",
          color: "#fff",
          fontSize: 10,
          formatter: "{@value}支",
        },
      },
    ],
  };

  return new Promise((resolve) => {
    resolve(options);
  });
};
