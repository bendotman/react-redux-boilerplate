import axios, { AxiosInstance, AxiosRequestConfig  } from "axios";
import { authHeader } from '../_helpers';

var API_HOST=process.env.REACT_APP_API_HOST ? process.env.REACT_APP_API_HOST : '';
var API_URL='/api';
var BASE_URL=API_HOST+API_URL;

const config : AxiosRequestConfig = {
  baseURL: BASE_URL,
  validateStatus: function (status : number) {
      // 500 이상의 에러만 catch 블럭에서 처리하고, 그 외에는 then 블럭에처 처리한다.
      return status  < 500; 
    },
  // timeout: 1000,
}

const instance : AxiosInstance = axios.create(config);

export const BaseApi = {
    get,
    post,
    put,
    delete: _delete
}

function get(url : string, config: AxiosRequestConfig){
    let reqConfig = addAuthTokenToHeaders(config);
    return instance.get(url, reqConfig)
}

function post(url: string, data:object, config:AxiosRequestConfig){
    let reqConfig = addAuthTokenToHeaders(config);
    return instance.post(url, data, reqConfig);
}

function put(url: string, data:object, config:AxiosRequestConfig){
    let reqConfig = addAuthTokenToHeaders(config);
    return instance.put(url, data, reqConfig);
}

function _delete(url: string, config:AxiosRequestConfig){
    let reqConfig = addAuthTokenToHeaders(config);
    return instance.delete(url, reqConfig);
}

function addAuthTokenToHeaders(config : AxiosRequestConfig){
    // let reqConfig = config || {};
    let authToken = authHeader();
    if(authToken){
        if(config.headers){
          config.headers['Authorization'] = authToken;
        }else{
          config.headers = { 'Authorization' : authToken}
        }
    }

    return config;
}
export default BaseApi;
