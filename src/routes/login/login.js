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
      <div className="login--section">
        <Title>Sendbird Credentials</Title>
        <Form
          title="Sendbird User ID"
          placeholder="User ID"
          value={userID}
          onChange={(value) => onInputChange(value, setUserID)}
        />
        <Form
          title="Sendbird Access Token"
          placeholder="Access Token"
          value={accessToken}
          onChange={(value) => onInputChange(value, setAccessToken)}
        />
      </div>
      <div className="login--section">
        <Title>Backend Credentials</Title>
        <Form
          title="Personal Access Token"
          placeholder="Personal Access Token"
          value={userToken}
          onChange={(value) => onInputChange(value, setUserToken)}
        />
      </div>
      <input className="login--button" type="submit" value="Masuk" />
    </form>
  );
}

function Title({ children }) {
  return <h4 className="login--section-title">{children}</h4>;
}

function Form({ title, placeholder, value, onChange }) {
  return (
    <>
      <p className="login--section-form-title">{title}</p>
      <input
        className="login--section-form"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
