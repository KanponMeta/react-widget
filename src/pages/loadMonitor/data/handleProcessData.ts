import type { ECOption } from "@/components/Echart/index";

export const getProcessBarData = (data: any[]): ECOption => {
  const barData = [
    { title: "准备研磨", value: 6500 },
    { title: "准备内砂", value: 6300 },
    { title: "准备外抛", value: 6200 },
    { title: "成品外抛", value: 6100 },
    { title: "成品切割", value: 6000 },
    { title: "成品内砂", value: 6000 },
    { title: "切割", value: 5900 },
    { title: "切头", value: 5600 },
    { title: "去油", value: 5400 },
    { title: "热处理", value: 5000 },
    { title: "矫直", value: 4700 },
  ];

  return {
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
          y: "name",
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
};

// {
//   dataset: {
//     source: [
//       ['score', 'amount', 'product'],
//       [89.3, 58212, 'Matcha Latte'],
//       [57.1, 78254, 'Milk Tea'],
//       [74.4, 41032, 'Cheese Cocoa'],
//       [50.1, 12755, 'Cheese Brownie'],
//       [89.7, 20145, 'Matcha Cocoa'],
//       [68.1, 79146, 'Tea'],
//       [19.6, 91852, 'Orange Juice'],
//       [10.6, 101852, 'Lemon Juice'],
//       [32.7, 20112, 'Walnut Brownie']
//     ]
//   },
//   grid: { containLabel: true },
//   xAxis: { name: 'amount' },
//   yAxis: { type: 'category' },
//   visualMap: {
//     orient: 'horizontal',
//     left: 'center',
//     min: 10,
//     max: 100,
//     text: ['High Score', 'Low Score'],
//     // Map the score column to color
//     dimension: 0,
//     inRange: {
//       color: ['#65B581', '#FFCE34', '#FD665F']
//     }
//   },
//   series: [
//     {
//       type: 'bar',
//       encode: {
//         // Map the "amount" column to X axis.
//         x: 'amount',
//         // Map the "product" column to Y axis
//         y: 'product'
//       }
//     }
//   ]
// };
