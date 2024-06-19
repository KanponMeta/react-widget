import type { ECOption } from "@/components/Echart/index";

export const getOperatorBarData = (
  data: ProcessMaterialMachineOperator[]
): ECOption => {
  return {
    textStyle: {
      color: "#fff",
    },
    tooltip: {},
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    dataset: {
      source: data.map((item) => {
        return {
          process: item.processStepName,
          产值: item.eachProcessPerCapitaOutputValue || '-',
        };
      }).filter((item) => item.产值 !== '-'),
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
      name: "单位：kg",
      axisLine: {
        show: true,
      },
      splitLine: {
        show: false,
      },
    },
    label: { show: true, position: "top", color: "#fff", fontSize: 8 },
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
          borderRadius: [5, 5, 0, 0],
        },
        barWidth: 16,
      },
    ],
  };
};