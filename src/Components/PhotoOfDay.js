import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

const DataContainerDiv = styled.div`
    margin: 20px auto;
    color: navy;
    max-width: 800px;
    box-sizing: border-box;
    background: white;
    border-radius: 20px;
    padding:20px 0;
`;

const NasaImg = styled.img `
    width: 80%;
    margin-top: 20px;
`
const ExplanationP = styled.p `
    text-align: left;
    margin: 0 30px 10px;
`
const SubtitleSpan = styled.span `
    font-weight: bolder;
    font-size: 1.2em;
`

function PhotoOfDay() {
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

    return (
        <DataContainerDiv>
            <NasaImg src={photo} alt="NASA image of the day" />
            <h2>{title}</h2>
            <p><SubtitleSpan>Date:</SubtitleSpan> {date}</p>
            <ExplanationP><SubtitleSpan>Explanation:</SubtitleSpan> <br />{explanation}</ExplanationP>
        </DataContainerDiv>
    )
}

export default PhotoOfDay;
