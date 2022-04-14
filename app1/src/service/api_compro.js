import axios from "axios";

const api = axios.create({
  baseURL: "https://api-compro.herokuapp.com",
});

export default api;