import React, { useEffect, useState } from "react";
import axios from "axios";

function PhotoOfDay(){
    const [photo, setPhoto] = useState('')
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [explanation, setExplanation] = useState();
 
    useEffect(() => {
    axios
       .get('https://api.nasa.gov/planetary/apod?api_key=xpmuM35WFKafgYfLOqONPj8HsC96FU8riqXn4wOp&date=2019-07-15 ')
       .then(response => {
           console.log(response.data)
           setPhoto(response.data.hdurl)
           setTitle(response.data.title)
           setDate(response.data.date);
           setExplanation(response.data.explanation);

       })
       .catch(err => {
         console.log(err)
       })
      }, [])
  
      return(
          <div>
              <img src={photo} alt="NASA image of the day" />
              <h2>{title}</h2>
              <p>Date: {date}</p>
              <p>Explanation: {explanation}</p>
          </div>
      )
}

export default PhotoOfDay;
