import axios from "axios";

const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  return config;
});

requests.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const reqGetEchart1 = () => {
  return requests({
    url: "4085ccde7dcbbbd93a2cae1ce8913d10/echarts/chinaMap/demo1",
    method: "post",
  });
};

export const reqGetEchart2 = () => {
  return requests({
    url: "4085ccde7dcbbbd93a2cae1ce8913d10/echarts/chinaMap/demo2",
    method: "post",
  });
};
