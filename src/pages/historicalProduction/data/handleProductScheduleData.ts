import type { ECOption } from "@/components/Echart/index";

export const getProductSchedulePieData = (data: ProductSchedule): ECOption => {
  console.log(
    "completed=",
    data.completedWeightKg,
    "remaining=",
    data.remainingWeightKg,
    "uncompleted=",
    data.uncompletedWeightKg,
    "other=",
    data.otherWeightKg
  );

  const pieData = [
    { value: data.completedWeightKg, name: "已完成重量 Kg" },
    { value: data.remainingWeightKg, name: "待生产重量 Kg" },
    { value: data.uncompletedWeightKg, name: "未完成重量 Kg" },
    { value: data.otherWeightKg, name: "其他 Kg" },
  ];

  return {
    tooltip: {},
    series: [
      {
        type: "pie",
        color: ["#FFBC27", "#0966E6", "#3EB075", "#B2B31E", "#0886ED"],
        startAngle: 90,
        radius: [0, "90%"],
        itemStyle: {
          borderRadius: 5,
          borderColor: "#0A0C37",
          borderWidth: 5,
        },
        center: ["50%", "50%"], //图的位置，距离左跟上的位置
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%",
          color: "#fff",
          fontWeight: "bolder",
        },
        data: pieData.filter((item) => item.value > 0),
      },
    ],
  };
};

export const getProductScheduleBarData = (data: ProductSchedule): ECOption => {
  const barData = [
    { value: data.otherWeightKg, name: "其他 Kg" },
    { value: data.uncompletedWeightKg, name: "未完成重量 Kg" },
    { value: data.remainingWeightKg, name: "待生产重量 Kg" },
    { value: data.completedWeightKg, name: "已完成重量 Kg" },
  ];
  console.log(
    "completed=",
    data.completedWeightKg,
    "remaining=",
    data.remainingWeightKg,
    "uncompleted=",
    data.uncompletedWeightKg,
    "other=",
    data.otherWeightKg
  );

  // 颜色数组，每个元素对应一个柱子的颜色
  const colors = ["#B2B31E", "#3EB075", "#0966E6", "#FFBC27"];

  return {
    grid: {
      top: "20%",
      bottom: "20%", // 设置上边距百分比，实现垂直居上的效果
      left: "15%",
    },
    tooltip: {},
    xAxis: {
      type: "value",
      show: false,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: ["10%", "10%"],
    },
    yAxis: {
      type: "category",
      data: ["其他", "未完成", "生产中", "已完成"],
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
    label: {
      show: true,
      position: "right",
      color: "#fff",
      fontSize: 10,
      formatter: "{c}kg",
    },
    series: [
      {
        type: "bar",
        data: barData.map((value, index) => ({
          name: value.name,
          value: value.value,
          itemStyle: {
            color: colors[index], // 每个柱子的颜色
            borderRadius: [5, 5, 5, 5],
          },
        })),
        barWidth: 8,
      },
    ],
  };
};
