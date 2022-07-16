import { useEffect, useState } from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import sendFileToS3 from "../../utils/sendFileToS3";
import "./sendbird.css";
import "./dashboard.scss";

export default function Dashboard() {
  const appID = process.env.REACT_APP_SENDBIRD_APP_ID;
  const defaultAccessToken = process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN;
  const bucketUrl = process.env.REACT_APP_BUCKET_URL;

  const [id, setID] = useState("");
  const [accessToken, setAccessToken] = useState(defaultAccessToken);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const _id = params.get("id");
    setID(_id);
    
    const _accessToken = params.get("accessToken");
    const _userToken = params.get("userToken");
    if (_accessToken) {
      setAccessToken(_accessToken);
    }

    if (_userToken) {
      setUserToken(_userToken);
    }
  }, []);

  async function uploadImage(file) {
    const images = await sendFileToS3(file, userToken);
    return images.medium;
  }

  return (
    <div className="dashboard">
      <SendBirdApp appId={appID} userId={id} accessToken={accessToken} onFilePicked={uploadImage} externalBucketUrl={bucketUrl} />
    </div>
  );
}