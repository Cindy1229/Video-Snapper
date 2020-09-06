import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend12.herokuapp.com/",
});

export default instance;
