// import axios from "axios";

// export function Postlogin(data){
//     return axios.post(`https://63d256ca4abff8883408485e.mockapi.io/Login`,data)
// }

// export function Postregister(data){
//     return axios.post(`https://63d256ca4abff8883408485e.mockapi.io/data`,data)
// }

import axios from "axios";

// export function Postlogin(data) {
//   return axios.post("https://63d256ca4abff8883408485e.mockapi.io/data", data);
// }

// export function Postregister(data){
//     return axios.post('https://63d256ca4abff8883408485e.mockapi.io/data',data)
// }

export function Postlogin(data) {
  return axios.post(" http://localhost:4000/users", data);
}
export function Postregister(data) {
  return axios.post(" http://localhost:4000/users", data);
}

export function GetuserbyEmail(data) {
  return axios.get(`http://localhost:4000/users?email=${data}`);
}

export function GetuserbyEmailAndPassword(data) {
  return axios.get(
    `http://localhost:4000/users?email=${data.email}&password=${data.password}`
  );
}
