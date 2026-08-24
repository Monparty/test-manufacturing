import inventoryApi from "./inventory";
import machineApi from "./machine";
import maintenanceLogApi from "./maintenanceLog";
import productionOrderApi from "./productionOrder";

const apiClient = {
    ...productionOrderApi,
    ...inventoryApi,
    ...machineApi,
    ...maintenanceLogApi,
};

export default apiClient;
