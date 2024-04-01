import "./style.css";
import BgImage from "../../assets/bg-map.jpg";
import Icon1 from "../../assets/HIBI.png";
import Icon2 from "../../assets/NACIONALNI PARK.png";
import Icon3 from "../../assets/SALAS.png";
import { PulsAnimation } from "../animations/puls";

export const Home = () => {
  return (
    <div className="container">
      <img src={BgImage} alt="img" className="bg-image " />

      <span className="icon1">
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <PulsAnimation>
            <img src={Icon1} alt="Icon1" className="img-icon1" />
          </PulsAnimation>
        </a>
      </span>
      <span className="icon2">
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <PulsAnimation>
            <img src={Icon2} alt="img" className="img-icon2" />
          </PulsAnimation>
        </a>
      </span>
      <span className="icon3">
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <PulsAnimation>
            <img src={Icon3} alt="img" className="img-icon3" />
          </PulsAnimation>
        </a>
      </span>
    </div>
  );
};
