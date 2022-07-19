import axios from "axios";
import FormData from "form-data";

export default async function sendFileToS3(file, accessToken) {
  const formData = new FormData();
  formData.append('file', file, file.name);

  const baseUrl = process.env.REACT_APP_ENDPOINT_URL;
  const endPointUrl = '/sendbird/upload';

  const response = await axios.post(baseUrl + endPointUrl, formData, {headers: {
    'Authorization': `Bearer ${accessToken}`,
  }})

  return response.data.data;
}