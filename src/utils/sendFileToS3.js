import axios from "axios";
import FormData from "form-data";

export default async function sendFileToS3(file, accessToken) {
  const formData = new FormData();
  formData.append('file', file, file.name);

  const endPointUrl = '/sendbird/upload';

  const response = await axios.post(endPointUrl, formData, {headers: {
    'Authorization': `Bearer ${accessToken}`,
  }})

  return response.data.data;
}