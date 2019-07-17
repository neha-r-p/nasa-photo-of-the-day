import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  
  const [photo, setPhoto] = useState('')
 
  useEffect(() => {
  axios
     .get('https://api.nasa.gov/planetary/apod?api_key=xpmuM35WFKafgYfLOqONPj8HsC96FU8riqXn4wOp')
     .then(response => {
         console.log(response)
     })
     .catch(err => {
       console.log(err)
     })
    }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
