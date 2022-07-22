import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import sendFileToS3 from "../../utils/sendFileToS3";
import SendbirdDashboard from "./components/sendbird-dashboard";
import LoadingOverlay from "../../components/loading-overlay";
import SendbirdConfigurationProvider from "../../context/sendbird-configuration-provider";

import "./sendbird.css";
import "./dashboard.scss";
import sendbirdConf from "../../sendbird.conf";

export default function Dashboard() {
  const defaultAccessToken = process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN;

  const [userID, setID] = useState("");
  const [accessToken, setAccessToken] = useState(defaultAccessToken);
  const [userToken, setUserToken] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const _id = params.get("id");
    setID(_id);

    const _accessToken = params.get("accessToken");
    const _userToken = params.get("personal_access_token");

    if (_accessToken) {
      setAccessToken(_accessToken);
    }

    if (_userToken) {
      setUserToken(_userToken);
    }
    
    setTimeout(() => setIsReady(true), 2000);
  }, []);

  async function onFilePicked(file) {
    let images;
    await toast.promise(
      async () => {
        images = await sendFileToS3(file, userToken);
      },
      {
        error: "Cannot upload the image",
        pending: `Uploading ${file.name}`,
        success: "Image uploaded successfully",
      }
    );

    return images.large;
  }

  return (
    <div className="dashboard">
      <SendbirdConfigurationProvider configuration={{
        userID,
        accessToken,
        onFilePicked,
        isReady,
        ...sendbirdConf,
      }}>
        <SendbirdDashboard />
      </SendbirdConfigurationProvider>
      <LoadingOverlay showOverlay={!isReady} />
    </div>
  );
}
