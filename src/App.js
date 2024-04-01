import React, { useEffect, useState } from "react";
import { Home } from "./components/home";
import { Loader } from "./components/loader";

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <>
      <Loader visible={loader} />
      {!loader && <Home />}
    </>
  );
};

export default App;
