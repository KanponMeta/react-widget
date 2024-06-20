export interface ProcessLoad {
  id: number;
  process: string;
  loadCount: number;
  loadMeter: number;
  loadWeight: number;
}

export async function getProductLoadData(): Promise<
  NormalResponse<ProcessLoad[]>
> {
  // const config = {
  //   reportName: "NF025_process_fuzai_production_statistics_Report",
  //   page: 1,
  //   pageSize: 200,
  // };

  // console.log("getProductLoadData-config", config);

  // console.log("ZOHO.CREATOR.API");
  // console.log(ZOHO.CREATOR.API);

  // const getRecords = ZOHO.CREATOR.API.getAllRecords(config);
  // getRecords.then(function (jsonData: any) {
  //   console.log("Response: ", jsonData);
  // })

  // ZOHO.CREATOR.API.getAllRecords(config)
  //   .then((response: any) => {
  //     console.log("getProductLoadData-reponse", config);
  //     const productLoads: ProcessLoad[] = response.data.map(
  //       (item: any, index: number) => {
  //         return {
  //           id: index,
  //           process: item.process,
  //           loadCount: item.process_real_time_fuzai_count,
  //           loadMeter: item.process_real_time_fuzai_meters,
  //           loadWeight: item.process_total_fuzai_weight,
  //         };
  //       }
  //     );

  //     console.log("productLoads", productLoads);
  //   })
  //   .catch((error: any) => {
  //     console.log("productLoads-error", error);
  //   });

  return new Promise((resolve) => {
    resolve({
      data: [
        {
          id: 1,
          process: "准备研磨",
          loadCount: 6500,
          loadMeter: 6500,
          loadWeight: 6500,
        },
        {
          id: 2,
          process: "准备内砂",
          loadCount: 6300,
          loadMeter: 6300,
          loadWeight: 6300,
        },
        {
          id: 3,
          process: "准备外抛",
          loadCount: 6200,
          loadMeter: 6200,
          loadWeight: 6200,
        },
        {
          id: 4,
          process: "成品外抛",
          loadCount: 6100,
          loadMeter: 6100,
          loadWeight: 6100,
        },
        {
          id: 5,
          process: "成品切割",
          loadCount: 6000,
          loadMeter: 6000,
          loadWeight: 6000,
        },
        {
          id: 6,
          process: "成品内砂",
          loadCount: 6000,
          loadMeter: 6000,
          loadWeight: 6000,
        },
        {
          id: 7,
          process: "切割",
          loadCount: 5900,
          loadMeter: 5900,
          loadWeight: 5900,
        },
        {
          id: 8,
          process: "切头",
          loadCount: 5600,
          loadMeter: 5600,
          loadWeight: 5600,
        },
        {
          id: 9,
          process: "去油",
          loadCount: 5400,
          loadMeter: 5400,
          loadWeight: 5400,
        },
        {
          id: 10,
          process: "热处理",
          loadCount: 5000,
          loadMeter: 5000,
          loadWeight: 5000,
        },
        {
          id: 11,
          process: "矫直",
          loadCount: 4700,
          loadMeter: 4700,
          loadWeight: 4700,
        },
      ],
      success: true,
      type: "success",
    });
  });
}
