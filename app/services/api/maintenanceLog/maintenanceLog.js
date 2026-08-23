import { baseUrl } from "../../baseUrl";
import { httpClient } from "../../httpClient";

const BASE_URL = baseUrl.localUrl;

export const maintenanceLog = {
    getMaintenanceLog(body) {
        return httpClient.get({
            url: `${BASE_URL}/api/maintenanceLog`,
            body,
        });
    },
    addMaintenanceLog(body) {
        return httpClient.post({
            url: `${BASE_URL}/api/maintenanceLog`,
            body,
        });
    },
    deleteMaintenanceLog(id) {
        return httpClient.delete({
            url: `${BASE_URL}/api/maintenanceLog/${id}`,
        });
    },
    updateMaintenanceLog(id, body) {
        return httpClient.put({
            url: `${BASE_URL}/api/maintenanceLog/${id}`,
            body,
        });
    },
};
