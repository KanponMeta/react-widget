import request from "../zetRequest";
import { DescriptionsProps } from "antd";

export interface ProcessLoad {
  id: number;
  process: string;
  loadCount: number;
  loadMeter: number;
  loadWeight: number;
}

export async function getProductLoadProcessData(): Promise<
  NormalResponse<ProcessLoad[]>
> {
  const response = await request(
    "NF025_process_fuzai_production_statistics_Report"
  );

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

export async function getLoadMonitorStatisticData(
  processType: string
): Promise<NormalResponse<DescriptionsProps["items"]>> {
  const response = await request(
    "NF025_process_fuzai_production_statistics_Report",
    {
      process: processType,
    }
  );

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

export interface ProductionDuration {
  process: string;
  equipment: string;
  duration: string;
}

export async function getLoadMonitorProductioDurationData(
  processType: string
): Promise<NormalResponse<ProductionDuration[]>> {
  const response = await request(
    "NF026_equipment_fuzai_production_statistics_Report",
    {
      process: processType,
    }
  );

  const { code, data } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("getLoadMonitorProductioDurationData error");
    });
  }

  const productionDurations: ProductionDuration[] = data?.map(
    (item: any): ProductionDuration => {
      return {
        process: item.process || "",
        equipment: item.equipment || "",
        duration: item.today_total_production_time || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productionDurations,
      success: true,
      type: "success",
    });
  });
}

export interface ProductionCount {
  process: string;
  equipment: string;
  count: string;
}

export async function getLoadMonitorProductCountData(
  processType: string
): Promise<NormalResponse<ProductionCount[]>> {
  const response = await request(
    "NF026_equipment_fuzai_production_statistics_Report",
    {
      process: processType,
    }
  );

  const { code, data } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("getLoadMonitorProductCountData error");
    });
  }

  const productionCounts: ProductionCount[] = data?.map(
    (item: any): ProductionCount => {
      return {
        process: item.process || "",
        equipment: item.equipment || "",
        count: item.today_checkout_count || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productionCounts,
      success: true,
      type: "success",
    });
  });
}

export interface ProductionWeight {
  process: string;
  equipment: string;
  weight: string;
}
export async function getLoadMonitorProductWeightData(
  processType: string
): Promise<NormalResponse<ProductionWeight[]>> {
  const response = await request(
    "NF026_equipment_fuzai_production_statistics_Report",
    {
      process: processType,
    }
  );

  const { code, data } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error");
    });
  }

  const productionCounts: ProductionWeight[] = data?.map(
    (item: any): ProductionWeight => {
      return {
        process: item.process || "",
        equipment: item.equipment || "",
        weight: item.today_checkout_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productionCounts,
      success: true,
      type: "success",
    });
  });
}

export interface ProcessCard {
  id: string; //工艺卡号
  machine: string; //作业机台
  count: string; //生产支数
  weight: string; //生产重量
  time: string; //进站时间
  process: string; //设备所属工序
  material: string; //物料类型
}

export async function getLoadMonitorProcessCardData(
  processType: string
): Promise<NormalResponse<ProcessCard[]>> {
  const response = await request("NS001_GYK_Process_Scanning_Report", {
    Process: processType,
    material_type: "生产中",
  });

  const { code, data } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error");
    });
  }

  const processCards: ProcessCard[] = data?.map((item: any): ProcessCard => {
    return {
      id: item?.process_card_no || "",
      machine: item?.working_machine || "",
      count: item?.subbatches_number || "",
      weight: item?.theoretical_weight || "",
      time: item?.production_start_time || "",
      process: item?.Process || "",
      material: item?.material_type || "",
    };
  });
  return new Promise((resolve) => {
    resolve({
      data: processCards,
      success: true,
      type: "success",
    });
  });
}
