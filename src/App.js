import React, { useEffect, useState } from "react";
import { Home } from "./components/home";
import { Loader } from "./components/loader";

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Provjerite širinu ekrana
    if (window.innerWidth > 768) {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    } else {
      const handleOrientationChange = () => {
        // Proverite trenutnu orijentaciju ekrana
        if (window.matchMedia("(orientation: portrait)").matches) {
          // Ako je orijentacija portretna, postavite loader na false
          setLoader(false);
        } else {
          alert("Ukljuci rotaciju telefona!");
        }
      };

      // Dodajte event listener za promjenu orijentacije ekrana
      window.addEventListener("orientationchange", handleOrientationChange);

      // Uklonite event listener kada se komponenta unmountuje
      return () => {
        setTimeout(() => {
          alert("Ukljuci rotaciju telefona!");
        }, 1000);
        window.removeEventListener(
          "orientationchange",
          handleOrientationChange
        );
      };
    }
  }, []);

  return (
    <>
      <Loader visible={loader} />
      {!loader && <Home />}
    </>
  );
};

export default App;
