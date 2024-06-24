import type { ECOption } from "@/components/Echart/index";
import {
  ProductionStatistic,
  getDailyProductionStatistic,
  ProductionMachineStatistic,
  getDateProductionMachineStatistic,
  StaffsProductionStatistic,
  getMonthStaffsProductionStatistic,
} from "@/service/historicalProduction/index";
interface BarData {
  id: number;
  category: string;
  value: number;
}

export const getProductionStatisticOptions = async (): Promise<
  NormalResponse<{
    countOption: ECOption;
    meterOption: ECOption;
    weightOption: ECOption;
  }>
> => {
  let data: ProductionStatistic[] = [];

  const result = await getDailyProductionStatistic();
  data = result.data;

  const countOption = getProductionCountBarData(
    data.map((item: ProductionStatistic, index: number): BarData => {
      return {
        id: index,
        category: item.day,
        value: Number(item.count),
      };
    })
  );

  const meterOption = getProductionMeterBarData(
    data.map((item: ProductionStatistic, index: number): BarData => {
      return {
        id: index,
        category: item.day,
        value: Number(item.meter),
      };
    })
  );

  const weightOption = getProductionWeightBarData(
    data.map((item: ProductionStatistic, index: number): BarData => {
      return {
        id: index,
        category: item.day,
        value: Number(item.weight),
      };
    })
  );

  return new Promise((resolve) => {
    resolve({
      data: {
        countOption,
        meterOption,
        weightOption,
      },
      success: true,
      type: "success",
    });
  });
};

export const getProductionCountBarData = (data: BarData[]): ECOption => {
  return {
    grid: {
      top: "20%",
      bottom: "20%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: data,
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLabel: {
        showMinLabel: true,
        interval: 0,
        color: "#fff",
        rotate: 30,
      },
    },
    yAxis: {
      axisLabel: {
        color: "#7D7D7D",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#7D7D7D"],
          opacity: 0.3,
        },
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
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: 16,
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
        encode: {
          // Map the "amount" column to X axis.
          x: "category",
          // Map the "product" column to Y axis
          y: "value",
        },
      },
    ],
  };
};

export const getProductionMeterBarData = (data: BarData[]): ECOption => {
  return {
    grid: {
      top: "20%",
      bottom: "20%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: data,
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLabel: {
        showMinLabel: true,
        interval: 0,
        color: "#fff",
        rotate: 30,
      },
    },
    yAxis: {
      axisLabel: {
        color: "#7D7D7D",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#7D7D7D"],
          opacity: 0.3,
        },
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
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: 16,
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
        encode: {
          // Map the "amount" column to X axis.
          x: "category",
          // Map the "product" column to Y axis
          y: "value",
        },
      },
    ],
  };
};

export const getProductionWeightBarData = (data: BarData[]): ECOption => {
  return {
    grid: {
      top: "20%",
      bottom: "20%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: data,
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLabel: {
        showMinLabel: true,
        interval: 0,
        color: "#fff",
        rotate: 30,
      },
    },
    yAxis: {
      axisLabel: {
        color: "#7D7D7D",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#7D7D7D"],
          opacity: 0.3,
        },
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
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: 16,
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
        encode: {
          // Map the "amount" column to X axis.
          x: "category",
          // Map the "product" column to Y axis
          y: "value",
        },
      },
    ],
  };
};

export const getProductionMachineStatisticBarData = async (): Promise<
  NormalResponse<ECOption>
> => {
  let data: ProductionMachineStatistic[] = [];
  const result = await getDateProductionMachineStatistic();
  data = result.data;

  const option: ECOption = {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: data.map((item: ProductionMachineStatistic, index: number) => {
        return {
          id: index,
          category: item.equipment,
          value: Number(item.count),
        };
      }),
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLabel: {
        showMinLabel: true,
        interval: 0,
        color: "#fff",
      },
    },
    yAxis: {
      axisLabel: {
        color: "#7D7D7D",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#7D7D7D"],
          opacity: 0.3,
        },
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
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: 16,
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
        encode: {
          // Map the "amount" column to X axis.
          x: "category",
          // Map the "product" column to Y axis
          y: "value",
        },
      },
    ],
  };

  return new Promise((resolve) => {
    resolve({
      data: option,
      success: true,
      type: "success",
    });
  });
};

export const getProductionStaffStatisticBarData = async (): Promise<
  NormalResponse<ECOption>
> => {
  let data: StaffsProductionStatistic[] = [];
  const result = await getMonthStaffsProductionStatistic();
  data = result.data;

  const option: ECOption = {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataZoom: [
      {
        type: "inside",
        end: 10,
      },
    ],
    dataset: {
      source: data.map((item: StaffsProductionStatistic, index: number) => {
        return {
          id: index,
          category: item.staff,
          value: Number(item.count),
        };
      }),
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLabel: {
        showMinLabel: true,
        interval: 0,
        color: "#fff",
      },
    },
    yAxis: {
      axisLabel: {
        color: "#7D7D7D",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#7D7D7D"],
          opacity: 0.3,
        },
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
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#58D6FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#052EFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: 16,
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
        encode: {
          // Map the "amount" column to X axis.
          x: "category",
          // Map the "product" column to Y axis
          y: "value",
        },
      },
    ],
  };

  return new Promise((resolve) => {
    resolve({
      data: option,
      success: true,
      type: "success",
    });
  });
};
