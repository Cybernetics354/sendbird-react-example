import axios from "axios";

export default function configAxios() {
  axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
}