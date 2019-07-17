import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PhotoOfDay(){
 const [photo, setPhoto] = useState(photo)

 axios
    .get('https://api.nasa.gov/planetary/apod?api_key=xpmuM35WFKafgYfLOqONPj8HsC96FU8riqXn4wOp')
    .then(response => {
        console.log(response)
    })
}

