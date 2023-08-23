import React from "react";
import CountButton from "./CountButon/CountButton";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const myItem = "Items";
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"1"} />
      <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"100"} />
      <CountButton incrementBy={90} buttonColor={"green"} borderRadius={"1000"} />
      <br />
      <SearchBar />
    </div>
  );
}

export default App;
