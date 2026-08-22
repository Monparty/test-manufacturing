import productionOrderApi from "./productionOrder";
import productionRecordApi from "./ProductionRecord";

const apiClient = {
    ...productionOrderApi,
    ...productionRecordApi,
};

export default apiClient;
