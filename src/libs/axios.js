import axios from 'axios'
import store from '@/store'
import router from '../router'
import bridge from './bridge'
import {
  setToken,
  getToken,
  canTurnTo
} from '@/libs/util'
// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const {
    statusText,
    status,
    request: {
      responseURL
    }
  } = errorInfo;
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  };
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
};

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {}
  }
  getInsideConfig() {
    let header = {};
    // let local = window.sessionStorage.getItem("locale");
    if (
        window.sessionStorage["loginInfo"] &&
        window.sessionStorage["loginInfo"] !== "{}"
    ) {
      let usrInfo = JSON.parse(window.sessionStorage["loginInfo"]);
      header["g4-uid"] = usrInfo["id"] + "";
      header["g4-token"] = usrInfo["token"];
      console.log(usrInfo);
      console.log(usrInfo["deviceId"]);
      header["g4-deviceId"] = usrInfo && usrInfo["deviceId"] && usrInfo["deviceId"]!=null ? usrInfo["deviceId"] : "";
      header["g4-latitude"] = usrInfo["latitude"] && usrInfo["latitude"]!==undefined && usrInfo["latitude"]!=null ? usrInfo["latitude"] : "0";
      header["g4-longitude"] = usrInfo["longitude"] && usrInfo["longitude"]!==undefined && usrInfo["longitude"]!=null ? usrInfo["longitude"] : "0";
      header["g4-vest"] = usrInfo["vest"] && usrInfo["vest"]!==undefined && usrInfo["vest"]!=null ? usrInfo["vest"] : "1";
      header["g4-systemVersion"] = getAndroidVer() || "2.0.0";
      header["g4-appsflyId"] = usrInfo["appsflyId"] && usrInfo["appsflyId"]!==undefined && usrInfo["appsflyId"]!=null ? usrInfo["appsflyId"] : "0";
      header["g4-clientId"] = usrInfo["clientId"] && usrInfo["clientId"]!==undefined && usrInfo["clientId"]!=null ? usrInfo["clientId"] : "0";
      header["g4-deviceType"] = usrInfo["deviceType"] && usrInfo["deviceType"]!==undefined && usrInfo["deviceType"]!=null ? usrInfo["deviceType"] : "0";
      header["Accept-Language"] = usrInfo["language"] && usrInfo["language"]!==undefined && usrInfo["language"]!=null ? usrInfo["language"] : "in-ID";
      header["g4-appVersion"] = usrInfo["appVersion"] || "2.0.0";
    } else {
      header["g4-uid"] = "609";
      header["g4-token"] = "";
      header["g4-deviceId"] = "b75431ed035c491089f84b5517c26f47";
      header["g4-latitude"] = "0";
      header["g4-longitude"] = "0";
      header["g4-vest"] = "0";
      header["g4-systemVersion"] = "2.0.0";
      header["g4-appsflyId"] = "1545270775890-1978421542311634016";
      header["g4-clientId"] = "39a13aa80b9958123bedf19da872387d";
      header["g4-deviceType"] = "XiaoMi6";
      header["g4-appVersion"] = "2.0.0";
    }
    const config = {
      baseURL: this.baseUrl,
      withCredentials: true,
      headers: header
    };
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      // this.destroy(url)
      const {
        data,
        status
      } = res;
      return {
        data,
        status
      }
    }, error => {
      this.destroy(url);
      if (error.response.status == 401) {
        console.error('Error 401 : 登录过期');
        setToken('');
        goLogin.postMessage("goLogin");
        // bridge.goLogin()
      }
      addErrorLog(error.response);
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
let getAndroidVer = function() {
  var ua = navigator.userAgent.toLowerCase();
  var version = "";
  if (ua.indexOf("android") > 0) {
    var reg = /android [\d._]+/gi;
    return ua.match(reg)[0] ? ua.match(reg)[0] : "";
  }
  return version;
};
export default HttpRequest
