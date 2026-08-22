import axios from "axios";

export const httpClient = {
    get: async ({ url, params }) => {
        const res = await axios.get(url, { ...params });
        return res.data;
    },

    post: async ({ url, body, options = {} }) => {
        const res = await axios.post(url, body, { ...options });
        return res.data;
    },

    put: async ({ url, body }) => {
        const res = await axios.put(url, body);
        return res.data;
    },

    patch: async ({ url, body, options = {} }) => {
        const res = await axios.patch(url, body, { ...options });
        return res.data;
    },

    delete: async ({ url, body }) => {
        const res = await axios.delete(url, { data: body });
        return res.data;
    },
};
