import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {



   {/* UseState and UseEffect */}

{/*   


 //     useState is componentDidUpdate lifecycle model
 //     useEffect is bydefault componentDidMount LCM and when we give [count, digit] then it will work as component did update for both the states and also can work as componentDidUnmount
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [digit, setDigit] = useState(0);
  useEffect(() => {
    // Component did mount conditions
    setNumber(number + 1);
  },
  // component did update conditions
   [count, digit]);

  return (
    <>
      <h1>
        Hello count {count} and useEffect response {number} and Digit {digit}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Update
      </button>

      <button
        onClick={() => {
          setDigit(digit + 1);
        }}
      >
        Digit Update
      </button>


 // useState and useEffect Ending */}

return(
<>
<h1>Hello</h1>


    </>
  );
}

export default App;
