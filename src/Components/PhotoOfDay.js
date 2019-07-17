import React, { useEffect, useState } from "react";
import axios from "axios";

function PhotoOfDay(){
    const [photo, setPhoto] = useState('')
    const [date, setDate] = useState();
 
    useEffect(() => {
    axios
       .get('https://api.nasa.gov/planetary/apod?api_key=xpmuM35WFKafgYfLOqONPj8HsC96FU8riqXn4wOp&date=2019-07-15 ')
       .then(response => {
           console.log(response.data)
           setPhoto(response.data.hdurl)
           setDate(response.data.date);
       })
       .catch(err => {
         console.log(err)
       })
      }, [])
  
      return(
          <div>
              <img src={photo} alt="NASA image of the day" />
              <p>Date: {date}</p>
          </div>
      )
}

export default PhotoOfDay;
