import type { ECOption } from "@/components/Echart/index";
export function getMachineProductCountBarData(): ECOption {
  const mockData = [
    {
      key: "设备1",
      value: "1903",
    },
    {
      key: "设备2",
      value: "3278",
    },
    {
      key: "设备3",
      value: "2506",
    },
    {
      key: "设备4",
      value: "1805",
    },
    {
      key: "设备5",
      value: "1687",
    },
    {
      key: "设备6",
      value: "3802",
    },

    {
      key: "设备7",
      value: "3297",
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
      },
    ],
  };
}

export const getMachineProductDurationPieData = (): ECOption => {
  const pieData = [
    { name: "手动切割机1#", value: 10 },
    { name: "手动切割机2#", value: 5 },
    { name: "手动切割机3#", value: 15 },
    { name: "手动切割机4#", value: 2 },
  ];

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
          formatter: "{d}%",
          color: "#fff",
          fontWeight: "bolder",
        },
        data: pieData.filter((item) => item.value > 0),
      },
    ],
  };
};

