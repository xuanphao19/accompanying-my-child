// src/api/todoService.js
import { apiRequest } from "../api/apiHelper";

// const apiUrl = "http://localhost:3000/todos";
const apiUrl = "https://json-server-api-production-5a96.up.railway.app/math-app";

export const app = {
  getAll: () => apiRequest("get", apiUrl),
  getById: (id) => apiRequest("get", `${apiUrl}/${id}`),
  getByQuery: (param) => {
    const queryString = new URLSearchParams(param).toString();
    return apiRequest("get", `${apiUrl}?${queryString}`);
  },
  create: (todo) => apiRequest("post", apiUrl, todo),
  update: (id, callback) => apiRequest("put", `${apiUrl}/${id}`, callback),
  patch: (id, callback) => apiRequest("patch", `${apiUrl}/${id}`, callback),
  delete: (id) => apiRequest("delete", `${apiUrl}/${id}`),
};
