import inventoryApi from "./inventory";
import machineApi from "./machine";
import maintenanceLogApi from "./maintenanceLog";
import productionOrderApi from "./productionOrder";
import productionRecordApi from "./productionRecord";

const apiClient = {
    ...productionOrderApi,
    ...productionRecordApi,
    ...inventoryApi,
    ...machineApi,
    ...maintenanceLogApi,
};

export default apiClient;
