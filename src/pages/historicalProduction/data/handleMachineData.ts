export interface MachineItemProps {
  process: string;
  production: number;
  capacity: number;
}

export function getMachineData(
  data: ProcessMaterialMachineOperator[]
): MachineItemProps[] {
  return data.map((item) => {
    return {
      process: item.processStepName,
      production: Number(
        (item.equipmentCapacity * item.equipmentProductionEfficiency).toFixed(2)
      ),
      capacity: item.equipmentCapacity,
    };
  });
}
