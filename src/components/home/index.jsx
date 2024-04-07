import "./style.css";
import BgImage from "../../assets/bg-map.jpg";
import Icon1 from "../../assets/HIBI.png";
import Icon2 from "../../assets/NACIONALNI PARK.png";
import Icon3 from "../../assets/SALAS.png";
// import { PulsAnimation } from "../animations/puls";

export const Home = () => {
  return (
    <div className="container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <a
          href="https://google.com/"
          target="_blank"
          rel="noreferrer"
          className="icon icon1"
        >
          {/* <PulsAnimation> */}
          <img src={Icon1} alt="Icon1" className="img-icon" />
          {/* </PulsAnimation> */}
        </a>
        <a
          href="https://google.com/"
          target="_blank"
          rel="noreferrer"
          className="icon icon2"
        >
          {/* <PulsAnimation> */}
          <img src={Icon2} alt="Icon2" className="img-icon" />
          {/* </PulsAnimation> */}
        </a>
        <a
          href="https://google.com/"
          target="_blank"
          rel="noreferrer"
          className="icon icon3"
        >
          {/* <PulsAnimation> */}
          <img src={Icon3} alt="Icon3" className="img-icon" />
          {/* </PulsAnimation> */}
        </a>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aliquid repellat consequuntur eos alias tempore at, doloribus corporis
          illo nostrum deleniti, iusto soluta fugiat nemo quae aut in labore
          maiores?
        </p>
      </div>
    </div>
  );
};
