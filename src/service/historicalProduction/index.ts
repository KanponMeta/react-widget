import request from "../zetRequest";

export interface ProductionStatistic {
  day: string;
  month: string;
  quarter: string;
  year: string;
  process: string;
  equipment: string;
  count: string;
  meter: string;
  weight: string;
}

export async function getDailyProductionStatistic(): Promise<
  NormalResponse<ProductionStatistic[]>
> {
  const response = await request("NF026_daily_equipment_output_statistical", {
    limit: "15",
    process: "冷轧",
    equipment: "90轧机",
  });

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: ProductionStatistic[] = data.map(
    (item: any): ProductionStatistic => {
      return {
        day: item?.statistical_date || "0",
        month: "",
        quarter: "",
        year: "",
        process: item?.process || "",
        equipment: item?.equipment || "",
        count: item?.today_checkout_count || "",
        meter: item?.today_checkout_meters || "",
        weight: item?.today_checkout_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export async function getMonthProductionStatistic(): Promise<
  NormalResponse<ProductionStatistic[]>
> {
  const response = await request("NF026_monthly_equipment_output_statistical", {
    statistical_month: "15",
    process: "内外涂",
    equipment: "南涂料",
  });

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: ProductionStatistic[] = data.map(
    (item: any): ProductionStatistic => {
      return {
        day: "",
        month: item?.statistical_month || "",
        quarter: item?.statistical_quarter || "",
        year: item?.statistical_year || "",
        process: item?.process || "",
        equipment: item?.equipment || "",
        count: item?.today_checkout_count || "",
        meter: item?.today_checkout_meters || "",
        weight: item?.today_checkout_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export interface StaffProductionStatistic {
  day: string;
  month: string;
  quarter: string;
  year: string;
  staff: string;
  count: string;
  meter: string;
  weight: string;
}

export async function getDailyStaffProductionStatistic(): Promise<
  NormalResponse<StaffProductionStatistic[]>
> {
  const response = await request("NF012_Employees_daily_statistics_Report", {
    limit: "15",
    worker_name: "徐斌",
  });

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: StaffProductionStatistic[] = data.map(
    (item: any): StaffProductionStatistic => {
      return {
        day: item?.statistical_date || "0",
        month: "",
        quarter: "",
        year: "",
        staff: item?.worker_name || "",
        count: item?.Finish_count || "",
        meter: item?.Finish_meter || "",
        weight: item?.Finish_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export async function getMonthStaffProductionStatistic(): Promise<
  NormalResponse<StaffProductionStatistic[]>
> {
  const response = await request(
    "NF028_employe_monthly_output_tranfer_report",
    {
      statistical_month: "5",
      employee: "周小春",
    }
  );

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: StaffProductionStatistic[] = data.map(
    (item: any): StaffProductionStatistic => {
      return {
        day: "",
        month: item?.statistical_month || "",
        quarter: item?.statistical_quarter || "",
        year: item?.statistical_year || "",
        staff: item?.process || "",
        count: item?.employee_today_completed_count || "",
        meter: item?.employee_today_completed_meters || "",
        weight: item?.employee_today_completed_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export interface ProductionMachineStatistic extends ProductionStatistic {}

export async function getDateProductionMachineStatistic(): Promise<
  NormalResponse<ProductionMachineStatistic[]>
> {
  const response = await request("NF026_daily_equipment_output_statistical", {
    statistical_date: "2024-06-08",
    process: "冷轧",
  });

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: ProductionMachineStatistic[] = data.map(
    (item: any): ProductionMachineStatistic => {
      return {
        day: item?.statistical_date || "0",
        month: "",
        quarter: "",
        year: "",
        process: item?.process || "",
        equipment: item?.equipment || "",
        count: item?.today_checkout_count || "",
        meter: item?.today_checkout_meters || "",
        weight: item?.today_checkout_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export async function getMonthProductionMachineStatistic(): Promise<
  NormalResponse<ProductionMachineStatistic[]>
> {
  const response = await request("NF026_monthly_equipment_output_statistical", {
    statistical_month: "6",
    process: "切割",
  });

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: ProductionMachineStatistic[] = data.map(
    (item: any): ProductionMachineStatistic => {
      return {
        day: "",
        month: item?.statistical_month || "0",
        quarter: item?.statistical_quarter || "0",
        year: item?.statistical_year || "0",
        process: item?.process || "",
        equipment: item?.equipment || "",
        count: item?.today_checkout_count || "",
        meter: item?.today_checkout_meters || "",
        weight: item?.today_checkout_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export interface StaffsProductionStatistic extends StaffProductionStatistic {
  process: string;
}

export async function getDailyStaffsProductionStatistic(): Promise<
  NormalResponse<StaffsProductionStatistic[]>
> {
  const response = await request("NF028_employe_output_tranfer_report", {
    statistical_date: "2024-06-24",
    process: "准备内砂",
  });

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: StaffsProductionStatistic[] = data.map(
    (item: any): StaffsProductionStatistic => {
      return {
        day: item?.statistical_date || "0",
        month: "",
        quarter: "",
        year: "",
        process: item?.process || "",
        staff: item?.employee || "",
        count: item?.employee_today_completed_count || "",
        meter: item?.employee_today_completed_meters || "",
        weight: item?.employee_today_completed_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}

export async function getMonthStaffsProductionStatistic(): Promise<
  NormalResponse<StaffsProductionStatistic[]>
> {
  const response = await request(
    "NF028_employe_monthly_output_tranfer_report",
    {
      statistical_month: "6",
      process: "热处理",
    }
  );

  const { code, data, message, description } = response;

  if (code !== 3000) {
    return new Promise((_, reject) => {
      reject("error: " + description || "" + message || "");
    });
  }

  const productLoads: StaffsProductionStatistic[] = data.map(
    (item: any): StaffsProductionStatistic => {
      return {
        day: "",
        month: item?.statistical_month || "",
        quarter: item?.statistical_quarter || "",
        year: item?.statistical_year || "",
        process: item?.process || "",
        staff: item?.employee || "",
        count: item?.employee_today_completed_count || "",
        meter: item?.employee_today_completed_meters || "",
        weight: item?.employee_today_completed_weight || "",
      };
    }
  );

  return new Promise((resolve) => {
    resolve({
      data: productLoads,
      success: true,
      type: "success",
    });
  });
}
