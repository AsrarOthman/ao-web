import React, { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import Logo from "./Logo";

const Header = ({ user }) => {
  const [jwt, setJwt] = useLocalStorage("token", "");

  const handleLogoutOut = () => {
    setJwt("");
    location.reload();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#171A21",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Logo />
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <h4 style={{ color: "white" }}>{user?.username || "no data"}</h4>
        <button onClick={handleLogoutOut}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
