import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();

  function onInputChange(text) {
    setUserID(text.target.value);
  }

  function navigateToDashboard() {
    navigate(`/dashboard?id=${userID}`, { replace: true });
  }

  return (
    <form className="login" onSubmit={navigateToDashboard}>
      <input
        type="text"
        placeholder="Masukkan User ID"
        value={userID}
        onChange={onInputChange}
      />
      <input type="submit" value="Masuk" />
    </form>
  );
}
