import "./style.css";
import BgImage from "../../assets/bg-map.jpg";

import { LogotipAbsolute } from "../logotipi";

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
        <LogotipAbsolute />
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
