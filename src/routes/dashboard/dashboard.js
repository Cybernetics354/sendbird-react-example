import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import sendFileToS3 from "../../utils/sendFileToS3";
import SendbirdDashboard from "./components/sendbird-dashboard";
import LoadingOverlay from "../../components/loading-overlay";
import "./sendbird.css";
import "./dashboard.scss";

export default function Dashboard() {
  const appID = process.env.REACT_APP_SENDBIRD_APP_ID;
  const defaultAccessToken = process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN;
  const bucketUrl = process.env.REACT_APP_BUCKET_URL;

  const [id, setID] = useState("");
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

  async function uploadImage(file) {
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

    return images.medium;
  }

  return (
    <div className="dashboard">
      <SendbirdDashboard
        appID={appID}
        userID={id}
        accessToken={accessToken}
        externalBucketUrl={bucketUrl}
        onFilePicked={uploadImage}
        isReady={isReady}
      />
      <LoadingOverlay showOverlay={!isReady} />
    </div>
  );
}
