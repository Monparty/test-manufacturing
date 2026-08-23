import { baseUrl } from "../../baseUrl";
import { httpClient } from "../../httpClient";

const BASE_URL = baseUrl.localUrl;

export const machine = {
    getMachine(body) {
        return httpClient.get({
            url: `${BASE_URL}/api/machine`,
            body,
        });
    },
    getMachineUnique(id) {
        return httpClient.get({
            url: `${BASE_URL}/api/machine/${id}`,
        });
    },
    addMachine(body) {
        return httpClient.post({
            url: `${BASE_URL}/api/machine`,
            body,
        });
    },
    deleteMachine(id) {
        return httpClient.delete({
            url: `${BASE_URL}/api/machine/${id}`,
        });
    },
    updateMachine(id, body) {
        return httpClient.put({
            url: `${BASE_URL}/api/machine/${id}`,
            body,
        });
    },
};
