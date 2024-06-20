import type { ECOption } from "@/components/Echart/index";

interface BarData {
  id: number;
  category: string;
  value: number;
}

export const getProductionCountBarData = (): ECOption => {
  const mockData: BarData[] = [
    {
      id: 1,
      category: "2023",
      value: 1903,
    },
    {
      id: 2,
      category: "2024",
      value: 3278,
    },
  ];

  return {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: mockData,
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
};

export const getProductionMeterBarData = (): ECOption => {
  const mockData: BarData[] = [
    {
      id: 1,
      category: "2023",
      value: 1903,
    },
    {
      id: 2,
      category: "2024",
      value: 3278,
    },
  ];

  return {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: mockData,
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
};

export const getProductionWeightBarData = (): ECOption => {
  const mockData: BarData[] = [
    {
      id: 1,
      category: "2023",
      value: 1903,
    },
    {
      id: 2,
      category: "2024",
      value: 3278,
    },
  ];

  return {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: mockData,
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
};

export const getProductionMachineStatisticBarData = (): ECOption => {
  const mockData: BarData[] = [
    {
      id: 1,
      category: "设备1",
      value: 2023,
    },
    {
      id: 2,
      category: "设备2",
      value: 3278,
    },
    {
      id: 3,
      category: "设备3",
      value: 2874,
    },
    {
      id: 4,
      category: "设备4",
      value: 3902,
    },
    {
      id: 5,
      category: "设备5",
      value: 1937,
    },
    {
      id: 6,
      category: "设备6",
      value: 3633,
    },
    {
      id: 7,
      category: "设备7",
      value: 2803,
    },
  ];

  return {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: mockData,
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
};

export const getProductionStaffStatisticBarData = (): ECOption => {
  const mockData: BarData[] = [
    {
      id: 1,
      category: "员工1",
      value: 2023,
    },
    {
      id: 2,
      category: "员工2",
      value: 3278,
    },
    {
      id: 3,
      category: "员工3",
      value: 2874,
    },
    {
      id: 4,
      category: "员工4",
      value: 3902,
    },
    {
      id: 5,
      category: "员工5",
      value: 1937,
    },
    {
      id: 6,
      category: "员工6",
      value: 3633,
    },
    {
      id: 7,
      category: "员工7",
      value: 2803,
    },
  ];

  return {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    dataset: {
      source: mockData,
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
};
