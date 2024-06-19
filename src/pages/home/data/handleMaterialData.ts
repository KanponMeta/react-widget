import type { ECOption } from "@/components/Echart/index";

export const getMaterialBarData = (
  data: ProcessMaterialMachineOperator[]
): ECOption => {
  return {
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    title: {
      text: "各工序物料批次合格数统计",
      left: "center",
      textStyle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "normal",
      },
    },
    legend: {
      left: "right",
      align: "left",
      textStyle: {
        color: "#fff",
      },
      orient: "vertical",
    },
    tooltip: {},

    dataset: {
      source: data
        .map((item) => {
          return {
            process: item.processStepName,
            合格批次: item.qualifiedLotsNumber || "-",
            不合格批次: item.failedLotsNumber || "-",
          };
        })
        .filter((item) => {
          return item.合格批次 !== "-" && item.不合格批次 !== "-";
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
      name: "单位：批",
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
          color: "#000",
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
          position: "top",
          color: "#fff",
        },
      },
    ],
  };
};

export const getMaterialPieData = (
  data: ProcessMaterialMachineOperator[]
): ECOption => {
  return {
    title: {
      text: "不合格批次物料在各工序占比",
      left: "center",
      textStyle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "normal",
      },
    },
    grid: {
      top: "20%",
      bottom: "10%", // 设置上边距百分比，实现垂直居上的效果
    },
    textStyle: {
      color: "#fff",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "right",
      bottom: 20,
      align: "left",
      data: data
        .filter((item) => {
          return item.failedLotsNumber > 0;
        })
        .map((subtem) => {
          return {
            name: subtem.processStepName,
          };
        }),
      orient: "vertical",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "不合格批次物料在各工序占比",
        type: "pie",
        radius: ["3%", "60%"],
        left: "left",
        center: ["40%", "50%"],
        roseType: "area",

        label: {
          color: "inherit",
          formatter: "{c}",
        },
        labelLine: {
          lineStyle: { cap: "round" },
        },
        data: data
          .map((item) => {
            return {
              name: item.processStepName,
              value: item.failedLotsNumber,
            };
          })
          .filter((item) => {
            return item.value > 0;
          }),
      },
    ],
    color: [
      "#FFBC27", "#8662F8", "#3EB075",  "#0966E6", "#B2B31E", "#FF6E00", "#0886ED","#D01B8D",
    ],
  };
};
