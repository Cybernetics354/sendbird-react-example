import "./App.css";
import { useEffect, useState } from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  const appID = process.env.REACT_APP_SENDBIRD_APP_ID;
  const accessToken = process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN;
  const [id, setID] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const _id = params.get("id");

    setID(_id);
  }, []);

  return (
    <div className="App">
      <SendBirdApp appId={appID} userId={id} accessToken={accessToken} />
    </div>
  );
}

export default App;
