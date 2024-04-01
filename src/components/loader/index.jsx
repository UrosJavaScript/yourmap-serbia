import { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../assets/logo.png";

const container = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  flexDirection: "column",
  backgroundImage: "linear-gradient(to bottom, #008000eb, #2202369e)",
};
const text = {
  color: "#ffffff",
  fontWeight: "700",
  letterSpacing: "2px",
  fontSize: "20px",
};

export const Loader = ({ visible }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!visible) {
      setFadeOut(true);
    }
  }, [visible]);

  return (
    <div
      style={{
        ...container,
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
        height: fadeOut ? 0 : "100vh",
      }}
      className={fadeOut ? "fadeOut" : ""}
    >
      <img src={Logo} alt="logo" style={{ width: "200px" }} />
      <span style={text}>Loading...</span>
    </div>
  );
};
