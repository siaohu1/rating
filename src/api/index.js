import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.2.51:8080/mockjsdata/4';
axios.interceptors.response.use((res)=>{
  return res.data; // 在这里统一拦截结果 把结果处理成res.data
});
export let getLists = () =>{
  return axios.get('/project/entrance');
};