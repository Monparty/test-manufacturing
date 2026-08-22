import { baseUrl } from "../../baseUrl";
import { httpClient } from "../../httpClient";

const BASE_URL = baseUrl.localUrl;

export const productionOrder = {
    getProductionOrder(body) {
        return httpClient.get({
            url: `${BASE_URL}/api/productionOrder`,
            body,
        });
    },
    addProductionOrder(body) {
        return httpClient.post({
            url: `${BASE_URL}/api/productionOrder`,
            body,
        });
    },
    deleteProductionOrder(id) {
        return httpClient.delete({
            url: `${BASE_URL}/api/productionOrder/${id}`,
        });
    },
    updateProductionOrder(id, body) {
        return httpClient.put({
            url: `${BASE_URL}/api/productionOrder/${id}`,
            body,
        });
    },
};
