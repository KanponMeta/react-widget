import type { ECOption } from "@/components/Echart/index";
import {
  getLoadMonitorProductCountData,
  getLoadMonitorProductioDurationData,
  getLoadMonitorProductWeightData,
} from "@/service/loadMonitor/index";
export async function getMachineProductCountBarOption(): Promise<ECOption> {
  const { data } = await getLoadMonitorProductCountData("准备内砂");

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
      source: data as any[],
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
          x: "equipment",
          y: "count",
        },
      },
    ],
  };
}

export async function getMachineProductWeightBarOption(): Promise<ECOption> {
  const { data } = await getLoadMonitorProductWeightData("准备外抛");
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
      source: data as any[],
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
          x: "equipment",
          y: "weight",
        },
      },
    ],
  };
}

export async function getMachineProductDurationPieOption(): Promise<ECOption> {
  const { data } = await getLoadMonitorProductioDurationData("准备内砂");

  return {
    series: [
      {
        type: "pie",
        color: [
          "#00B4FF",
          "#A541FF",
          "#FFBA00",
          "#FF7800",
          "#B2B31E",
          "#0886ED",
        ],
        startAngle: 90,
        radius: [30, 80],
        roseType: "area",

        center: ["50%", "50%"], //图的位置，距离左跟上的位置
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
          formatter: "{b}",
          color: "#fff",
          fontWeight: "bolder",
        },
        data: data.map((item) => {
          return {
            value: item.duration,
            name: item.equipment,
          };
        }) as any[],
      },
    ],
  };
}
