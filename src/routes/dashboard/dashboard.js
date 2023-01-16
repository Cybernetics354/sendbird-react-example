import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import sendFileToS3 from "../../utils/sendFileToS3";
import SendbirdDashboard from "./components/sendbird-dashboard";
import LoadingOverlay from "../../components/loading-overlay";
import SendbirdConfigurationProvider from "../../context/sendbird-configuration-provider";

import "./sendbird.css";
import "./dashboard.scss";
import sendbirdConf from "../../sendbird.conf";
import { getSendbirdConfigurations } from "../../utils/sendbird";

export default function Dashboard() {
  const defaultAccessToken = process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN;

  const [userID, setID] = useState("");
  const [accessToken, setAccessToken] = useState(defaultAccessToken);
  const [appID, setAppID] = useState("");
  const [userToken, setUserToken] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    async function setupCredentials() {
      const _userToken = params.get("personal_access_token");
      const _id = params.get("id");
      const _key = params.get("key");
      const config = await getSendbirdConfigurations(_id, _key);

      const { userID, appID, sessionToken } = config;

      if (_userToken) {
        setUserToken(_userToken);
      }

      setAppID(appID);
      setID(userID);
      setAccessToken(sessionToken);

      setTimeout(() => setIsReady(true), 2000);
    }

    setupCredentials();
  }, []);

  async function onFilePicked(file) {
    const hasNoToken =
      userToken === undefined || userToken === null || userToken.length <= 0;
    if (hasNoToken) {
      return {
        type: "upload-to-sendbird",
      };
    }

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

    return { type: "message", message: images.large };
  }

  return (
    <div className="dashboard">
      <SendbirdConfigurationProvider
        configuration={{
          userID,
          accessToken,
          onFilePicked,
          isReady,
          ...sendbirdConf,
          appID,
        }}
      >
        <SendbirdDashboard />
      </SendbirdConfigurationProvider>
      <LoadingOverlay showOverlay={!isReady} />
    </div>
  );
}
