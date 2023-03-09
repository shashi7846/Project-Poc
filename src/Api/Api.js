import axios from "axios";

export function Postlogin(data) {
  return axios.post("http://localhost:4000/login", data);
}

export function Postregister(data) {
  return axios.post("http://localhost:8000/register", data);
}

export function GetuserbyEmail(data) {
  return axios.get(`http://localhost:4000/users?email=${data}`);
}

export function GetuserbyEmailAndPassword(data) {
  return axios.get(
    `http://localhost:4000/users?email=${data.email}&password=${data.password}`
  );
}

export function PostPropertyDetailsByEmail(data) {
  // posting property details with particular id
  return axios.post(`http://localhost:4000/users?email=${data.email}`);
}

export function PostPropertyDetails(id, data) {
  // posting property details with particular id
  return axios.patch(`http://localhost:4000/users/${id}`, data);
}
