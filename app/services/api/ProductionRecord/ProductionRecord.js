import { baseUrl } from "../../baseUrl";
import { httpClient } from "../../httpClient";

const BASE_URL = baseUrl.localUrl;

export const productionRecord = {
    getProductionRecord(body) {
        return httpClient.get({
            url: `${BASE_URL}/api/productionRecord`,
            body,
        });
    },
    addProductionRecord(body) {
        return httpClient.post({
            url: `${BASE_URL}/api/productionRecord`,
            body,
        });
    },
    deleteProductionRecord(id) {
        return httpClient.delete({
            url: `${BASE_URL}/api/productionRecord/${id}`,
        });
    },
    updateProductionRecord(id, body) {
        return httpClient.put({
            url: `${BASE_URL}/api/productionRecord/${id}`,
            body,
        });
    },
};
