import { useEffect, useState } from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./dashboard.scss";

export default function Dashboard() {
  const appID = process.env.REACT_APP_SENDBIRD_APP_ID;
  const defaultAccessToken = process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN;

  const [id, setID] = useState("");
  const [accessToken, setAccessToken] = useState(defaultAccessToken);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const _id = params.get("id");
    setID(_id);
    
    const _accessToken = params.get("accessToken");
    if(_accessToken) {
      setAccessToken(_accessToken);
    }
  }, []);

  return (
    <div className="dashboard">
      <SendBirdApp appId={appID} userId={id} accessToken={accessToken} />
    </div>
  );
}