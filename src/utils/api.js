import axios from "axios";
const newInstance = axios.create({
  baseURL: "https://dev-api.plandy.co/api",
});

export default newInstance;
