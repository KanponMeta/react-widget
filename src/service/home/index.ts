import dayjs from "dayjs";

export type DateType = "day" | "week" | "month" | "year";

const handleHttpDate = (type: DateType) => {
  switch (type) {
    case "day":
      return dayjs().format("YYYY-MM-DD");
    case "week":
      return dayjs().subtract(1, "week").format("YYYY-MM-DD");
    case "month":
      return dayjs().subtract(1, "month").format("YYYY-MM-DD");
    case "year":
      return dayjs().subtract(1, "year").format("YYYY-MM-DD");
  }
};

export async function httpGetProductScheduleData(
  type: DateType
): Promise<NormalResponse<ProductSchedule>> {
  const config = {
    reportName: "P019R_Order_Complete_Info",
    criteria: `(Production_Date>="${handleHttpDate(type)}")`,
  };

  const response = await ZOHO.CREATOR.API.getAllRecords(config);

  const productSchedules: ProductSchedule[] = response.data.map((item: any) => {
    return {
      // **** 基本信息 ****//
      productionDate: item.Production_Date, // 生产日期
      productionYear: item.Production_Year, // 生产年份
      productionMonth: item.Production_Month, // 生产月份

      // **** 通知单完成情况 ****//
      completedWeightKg: Number(item.Completed_Weight_Kg), // 已完成重量
      remainingWeightKg: Number(item.Remaining_Weight_Kg), // 未完成重量
      uncompletedWeightKg: Number(item.Uncompleted_Weight_Kg), // 未完成重量
      otherWeightKg: Number(item.Other_Weight_Kg), // 其他重量
    };
  });

  const groupedData: ProductSchedule = productSchedules.reduce(
    (acc: ProductSchedule, curr) => {
      acc.completedWeightKg += curr.completedWeightKg;
      acc.remainingWeightKg += curr.remainingWeightKg;
      acc.uncompletedWeightKg += curr.uncompletedWeightKg;
      acc.otherWeightKg += curr.otherWeightKg;

      return acc;
    },
    {
      // **** 基本信息 ****//
      productionDate: "", // 生产日期
      productionYear: "", // 生产年份
      productionMonth: "", // 生产月份

      // **** 通知单完成情况 ****//
      completedWeightKg: 0, // 已完成重量 Kg
      remainingWeightKg: 0, // 待生产重量 Kg
      uncompletedWeightKg: 0, // 未完成重量 Kg
      otherWeightKg: 0, // 其他 Kg
    }
  );

  console.log(JSON.stringify(groupedData));

  return new Promise((resolve) => {
    resolve({
      data: groupedData,
      success: true,
      type: "success",
    });
  });
}

export async function httpGetProcessMaterialMachineOperatorData(
  type: DateType
): Promise<NormalResponse<ProcessMaterialMachineOperator[]>> {
  const config = {
    reportName: "P015R_Production_Complete_Info",
    criteria: `(Production_Date>="${handleHttpDate(type)}")`,
  };

  const response = await ZOHO.CREATOR.API.getAllRecords(config);

  const results: ProcessMaterialMachineOperator[] = response.data.map(
    (item: any) => {
      return {
        productionDate: item.Production_Date,
        statisticalDatetime: item.Statistical_Datetime,
        processStepName: item.Process_Step_Name,

        totalInputWeightKg: Number(item.Total_Input_Weight_Kg),
        totalOutputWeightKg: Number(item.Total_Output_Weight_Kg),

        outputTotalLotNumber: Number(item.Output_Total_Lot_Number),
        qualifiedLotsNumber: Number(item.Qualified_Lots_Number),
        failedLotsNumber: Number(item.Failed_Lots_Number),

        equipmentAllocationQuantity: Number(item.Equipment_Allocation_Quantity),
        capacityIdleRate: Number(item.Capacity_Idle_Rate),
        equipmentCapacity: Number(item.Equipment_Capacity),
        equipmentProductionEfficiency: Number(
          item.Equipment_Production_Efficiency
        ),

        productionPersonnelAllocationQuantity: Number(
          item.Production_Personnel_Allocation_Quantity
        ),
        eachProcessPerCapitaOutputValue: Number(
          item.Each_Process_Per_Capita__Output_Value
        ),
      };
    }
  );

  const groupedData: ProcessMaterialMachineOperator[] = results.reduce(
    (acc: ProcessMaterialMachineOperator[], curr) => {
      const existingData = acc.find(
        (item) => item.processStepName === curr.processStepName
      );
      if (existingData) {
        existingData.totalInputWeightKg += curr.totalInputWeightKg;
        existingData.totalOutputWeightKg += curr.totalOutputWeightKg;
        existingData.outputTotalLotNumber += curr.outputTotalLotNumber;
        existingData.qualifiedLotsNumber += curr.qualifiedLotsNumber;
        existingData.failedLotsNumber += curr.failedLotsNumber;
        existingData.equipmentAllocationQuantity +=
          curr.equipmentAllocationQuantity;
        existingData.capacityIdleRate += curr.capacityIdleRate;
        existingData.equipmentCapacity += curr.equipmentCapacity;
        existingData.equipmentProductionEfficiency +=
          curr.equipmentProductionEfficiency;
        existingData.productionPersonnelAllocationQuantity +=
          curr.productionPersonnelAllocationQuantity;
        existingData.eachProcessPerCapitaOutputValue +=
          curr.eachProcessPerCapitaOutputValue;
      } else {
        acc.push(curr);
      }
      return acc;
    },
    []
  );

  console.log(JSON.stringify(groupedData));

  return new Promise((resolve) => {
    resolve({
      data: groupedData,
      success: true,
      type: "success",
    });
  });
}

export async function httpGetProductData(
  type: DateType
): Promise<NormalResponse<Product[]>> {
  const config = {
    reportName: "P017R_Product_In_Stock_Info",
    criteria: `(Production_Date>="${handleHttpDate(type)}")`,
  };

  const response = await ZOHO.CREATOR.API.getAllRecords(config);
  console.log("response", response);

  const products: Product[] = response.data.map((item: any) => {
    return {
      productionDate: item.Production_Date,
      productionYear: item.Production_Year,
      productionMonth: item.Production_Month,
      productBrandCode: item.Porduct_Brand_Code,
      productMESCode: item.Product_MES_Code,
      orderWeight: Number(item.Order_Weight),
      waitingProductWeight: Number(item.Waiting_Product_Weight),
      stockWeight: Number(item.Stock_Weight),
    };
  });

  const groupedData: Product[] = products.reduce((acc: Product[], curr) => {
    const existingData = acc.find(
      (item) => item.productBrandCode === curr.productBrandCode
    );
    if (existingData) {
      existingData.orderWeight += curr.orderWeight;
      existingData.waitingProductWeight += curr.waitingProductWeight;
      existingData.stockWeight += curr.stockWeight;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  console.log(JSON.stringify(groupedData));

  return new Promise((resolve) => {
    resolve({
      data: groupedData,
      success: true,
      type: "success",
    });
  });
}
