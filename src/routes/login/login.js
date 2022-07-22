import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [userID, setUserID] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userToken, setUserToken] = useState("");

  const navigate = useNavigate();

  function onInputChange(text, setter) {
    setter(text.target.value);
  }

  function navigateToDashboard() {
    let url = `/dashboard`;
    url += `?id=${userID}`;

    if (accessToken) {
      url += `&accessToken=${accessToken}`;
    }

    if (userToken) {
      url += `&personal_access_token=${userToken}`;
    }

    navigate(url, { replace: true });
  }

  return (
    <form className="login" onSubmit={navigateToDashboard}>
      <input
        type="text"
        placeholder="User ID"
        value={userID}
        onChange={(value) => onInputChange(value, setUserID)}
      />
      <input
        type="text"
        placeholder="Access Token"
        value={accessToken}
        onChange={(value) => onInputChange(value, setAccessToken)}
      />
      <input
        type="text"
        placeholder="User Token"
        value={userToken}
        onChange={(value) => onInputChange(value, setUserToken)}
      />
      <input type="submit" value="Masuk" />
    </form>
  );
}

