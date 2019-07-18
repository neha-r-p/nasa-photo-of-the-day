import React from "react";
import styled from "styled-components";

const HeaderH1 = styled.h1`
    font-size: 3em;
    margin: 20px auto;
    color: navy;
    max-width: 800px;
    box-sizing: border-box;
    background: white;
    border-radius: 20px;
    padding:20px 0;
    
`

export default function Header(){
    return(
        <HeaderH1>NASA Photo of the Day</HeaderH1>
    )
}