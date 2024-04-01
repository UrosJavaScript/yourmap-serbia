import BgImage from "../../assets/bg-map.jpg";
import Icon1 from "../../assets/HIBI.png";
import Icon2 from "../../assets/NACIONALNI PARK.png";
import Icon3 from "../../assets/SALAS.png";
import { PulsAnimation } from "../animations/puls";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        position: "relative",
      }}
    >
      <img src={BgImage} alt="img" style={{ width: "100%", height: "100%" }} />

      <span
        className="icon1"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(50%, -50%)",
        }}
      >
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <PulsAnimation>
            <img src={Icon1} alt="Icon1" style={{ width: "100px" }} />
          </PulsAnimation>
        </a>
      </span>
      <span
        className="icon2"
        style={{
          position: "absolute",
          top: "50%",
          left: "27%",
          transform: "translate(50%, -50%)",
        }}
      >
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <PulsAnimation>
            <img src={Icon2} alt="img" style={{ width: "100px" }} />
          </PulsAnimation>
        </a>
      </span>
      <span
        className="icon3"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "40%",
          transform: "translate(50%, -50%)",
        }}
      >
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <PulsAnimation>
            <img src={Icon3} alt="img" style={{ width: "100px" }} />
          </PulsAnimation>
        </a>
      </span>
    </div>
  );
};
