import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [userID, setUserID] = useState("");
  const [appID, setAppID] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  function onInputChange(text, setter) {
    setter(text.target.value);
  }

  function navigateToDashboard() {
    let url = '/dashboard';

    url += `?id=${userID}`;
    url += `&appID=${appID}`;
    url += `&accessToken=${accessToken}`;

    navigate(url, { replace: true });
  }

  return (
    <form className="login" onSubmit={navigateToDashboard}>
      <input
        type="text"
        placeholder="Masukkan User ID"
        value={userID}
        onChange={(text) => onInputChange(text, setUserID)}
      />
      <input
        type="text"
        placeholder="Masukkan App ID"
        value={appID}
        onChange={(text) => onInputChange(text, setAppID)}
      />
      <input
        type="text"
        placeholder="Masukkan Access Token"
        value={accessToken}
        onChange={(text) => onInputChange(text, setAccessToken)}
      />
      <input type="submit" value="Masuk" />
    </form>
  );
}
