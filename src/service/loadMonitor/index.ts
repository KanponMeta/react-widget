import request from "../request";
import { DescriptionsProps } from "antd";
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
  let response: any = null;
  if (process.env.NODE_ENV === "production") {
    const config = {
      reportName: "NF025_process_fuzai_production_statistics_Report",
      page: 1,
      pageSize: 200,
    };

    response = await ZOHO.CREATOR.API.getAllRecords(config);
  } else {
    const responseObj = await request.get(
      "/NF025_process_fuzai_production_statistics_Report"
    );

    response = responseObj.data;
  }

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: ProcessLoad[] = data.map((item: any, index: number) => {
    return {
      id: index,
      process: item.process,
      loadCount: item.process_real_time_fuzai_count,
      loadMeter: item.process_real_time_fuzai_meters,
      loadWeight: item.process_total_fuzai_weight,
    };
  });

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export async function getLoadMonitorStatistic(
  processType: string
): Promise<NormalResponse<DescriptionsProps["items"]>> {
  let response: any = null;

  if (process.env.NODE_ENV === "production") {
    const config = {
      reportName: "NF025_process_fuzai_production_statistics_Report",
      criteria: `(process== "${processType}")`,
      page: 1,
      pageSize: 10,
    };

    response = await ZOHO.CREATOR.API.getAllRecords(config);
  } else {
    const responseObj = await request.get(
      `/NF025_process_fuzai_production_statistics_Report?process=${processType}`
    );

    response = responseObj.data;
  }

  const { code, data } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error");
    });
  }

  const statisticData = data?.at(0) || {};

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "总负载支数",
      children: statisticData?.process_total_fuzai_count || "0",
    },
    {
      key: "2",
      label: "总负载重量",
      children: statisticData?.process_total_fuzai_weight || "0",
    },
    {
      key: "3",
      label: "今日产出合格率",
      children:
        statisticData?.today_checkout_count && statisticData?.today_scrap_count
          ? (
              (1 -
                Number(statisticData?.today_scrap_count) /
                  Number(statisticData?.today_checkout_count)) *
              100
            ).toFixed(2) + "%"
          : "暂无数据",
    },
    {
      key: "4",
      label: "今日报废支数",
      children: statisticData?.today_scrap_count || "0",
    },
    {
      key: "5",
      label: "剩余负载生产时间",
      children:
        statisticData?.remaining_real_time_fuzai_production_days || "暂无数据",
    },
  ];

  return new Promise((resolve) => {
    resolve({
      data: items,
      success: true,
      type: "success",
    });
  });
}
