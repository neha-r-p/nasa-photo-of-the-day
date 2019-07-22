import React from "react";
import "./App.scss";
import PhotoOfDay from "./Components/PhotoOfDay"
import Header from "./Components/header"

function App() {
  
  return (
    <div className="App">
      <Header />
      <PhotoOfDay />
    </div>
  );
}

export default App;
