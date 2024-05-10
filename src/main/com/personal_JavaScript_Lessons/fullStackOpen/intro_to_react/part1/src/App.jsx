import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = [
    { name: "Jordan", age: 25 },
    { name: "Stephanie", age: 25 },
  ];

  return (
    <>
      <div>
        <h1>Greetings</h1>
        <div>
          <p>
            {friends[0].name} {friends[0].age}
          </p>
          <p>
            {friends[1].name} {friends[1].age}
          </p>
        </div>
        <Hello name="Elizabeth" age={30} />
      </div>
    </>
  );
};

export default App;
