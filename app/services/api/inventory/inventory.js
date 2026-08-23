import { baseUrl } from "../../baseUrl";
import { httpClient } from "../../httpClient";

const BASE_URL = baseUrl.localUrl;

export const inventory = {
    getInventory(body) {
        return httpClient.get({
            url: `${BASE_URL}/api/inventory`,
            body,
        });
    },
    addInventory(body) {
        return httpClient.post({
            url: `${BASE_URL}/api/inventory`,
            body,
        });
    },
    deleteInventory(id) {
        return httpClient.delete({
            url: `${BASE_URL}/api/inventory/${id}`,
        });
    },
    updateInventory(id, body) {
        return httpClient.put({
            url: `${BASE_URL}/api/inventory/${id}`,
            body,
        });
    },
};
