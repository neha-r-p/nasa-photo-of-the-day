import React from "react";
import styled from "styled-components";

const HeaderH1 = styled.h1`
    font-size: 3em;
    margin: 20px auto;
`

export default function Header(){
    return(
        <HeaderH1>NASA Photo of the Day</HeaderH1>
    )
}