import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UseContextChild from "./UseContext/Child";

import "./App.css";

// Step 2 : createContext hook always initalise in outside the app function

 export const GlobalInfo = createContext();

export default function UseContextApp() {
  // - Generally used to pass Data from Parent to superChild or more
  // - Also we can pass data in negihbour also

  // Step 4 : Data pass karenge
  const data="ABCD";
  return (
    <>
      {/* Step 3 : Wrapping in top level taki yaha se baaki sare childs generations me use kar sake <GlobalInfo.Provider> */}

      {/* <GlobalInfo.Provider>

                <h1>Lets Understand useContext/ContextAPI</h1>
                <UseContextChild/>


                </GlobalInfo.Provider> */}

      {/* Step 4 : Data pass karenge    */}
      <GlobalInfo.Provider value={{ data: data }}>
        <h1>Lets Understand useContext/ContextAPI</h1>
        <UseContextChild />
      </GlobalInfo.Provider>
    </>
  );
}
