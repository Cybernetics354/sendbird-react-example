import axios from "axios";
import FormData from "form-data";

export default async function sendFileToS3(file) {
  const formData = new FormData();
  formData.append('file', file, file.name);

  const baseUrl = process.env.REACT_APP_STORAGE_HOST_URL;
  const endPointUrl = '/sendbird/upload';
  const accessToken = process.env.REACT_APP_USER_TOKEN;

  const response = await axios.post(baseUrl + endPointUrl, formData, {headers: {
    'Authorization': `Bearer ${accessToken}`
  }})

  return response.data.data;
}