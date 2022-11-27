import React from "react";
import axios from "axios";

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = getCookie('access_token');
    // const access_token = cookies?.access_token;

    if (access_token && !config?.headers?.Authorization) {
      config = {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
