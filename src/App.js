import "./App.css";
import { useEffect, useState } from "react";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  const appID = "7FE9002E-FFA4-4221-8910-1853B799B934";
  const accessToken = "0dcefdae1ee72e9a8cf3349adcde49bc946fe2c4";
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
