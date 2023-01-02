import axios from "axios"
import encBase64 from "crypto-js/enc-base64";
import SHA512 from "crypto-js/sha512";

const baseURL = `${process.env.REACT_APP_PIKACHU_URL}/api/v8.0/sendbird/login`
const secretKey = process.env.REACT_APP_SECRET_KEY;

export async function getSendbirdConfigurations(userID) {
  const hashedKey = encBase64.stringify(SHA512(userID + secretKey));

  const response = await axios.get(`${baseURL}/${userID}`, {
    headers: {
      'Key': hashedKey
    },
  });

  return response.data.data;
}

