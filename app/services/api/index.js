import inventoryApi from "./inventory";
import productionOrderApi from "./productionOrder";
import productionRecordApi from "./productionRecord";

const apiClient = {
    ...productionOrderApi,
    ...productionRecordApi,
    ...inventoryApi,
};

export default apiClient;
