import { useEffect, useState } from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./dashboard.scss";

export default function Dashboard() {
  const [id, setID] = useState("");
  const [appID, setAppID] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const _id = params.get("id");
    const _appID = params.get("appID");
    const accessToken = params.get("accessToken");

    setID(_id);
    setAppID(_appID);
    setAccessToken(accessToken);
  }, []);

  return (
    <div className="dashboard">
      <SendBirdApp appId={appID} userId={id} accessToken={accessToken} />
    </div>
  );
}