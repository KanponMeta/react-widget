import type { ECOption } from "@/components/Echart/index";

export const getProductBarData = (data: Product[]): ECOption => {
  return {
    textStyle: {
      color: "#fff",
    },
    legend: {
      left: "right",
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    tooltip: {},
    dataset: {
      source: data
        .map((item) => {
          return {
            product: item.productBrandCode,
            订货量: item.orderWeight || "-",
            待生产量: item.waitingProductWeight || "-",
            备货重量: item.stockWeight || "-",
          };
        })
        .filter(
          (item) =>
            item.订货量 !== "-" ||
            item.待生产量 !== "-" ||
            item.备货重量 !== "-"
        ),
    },
    dataZoom: [
      {
        show: false,
        start: 0,
        end: 100,
      },
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        show: false,
        yAxisIndex: 0,
        filterMode: "empty",
        width: 30,
        height: "80%",
        showDataShadow: false,
        left: "93%",
      },
    ],
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
        },
        barWidth: 16,
        stack: "a",
        label: {
          show: true,
          position: "inside",
          color: "#fff",
        },
      },
      {
        type: "bar",
        itemStyle: {
          color: "#8662FB",
          borderColor: "#8662FB",
        },
        barWidth: 16,
        stack: "a",
        label: {
          show: true,
          position: "inside",
          color: "#fff",
        },
      },
      {
        type: "bar",
        itemStyle: {
          color: "#FBA349",
          borderColor: "#FBA349",
        },
        barWidth: 16,
        stack: "a",
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
      },
    ],
  };
};
