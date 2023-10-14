import React from "react";
import Figure from "./Figure";
import styled from "styled-components";

const StyledCard = styled.div `
border : 3px solid black;
padding : 5rem;
border-radius : 20px;

h2 {
    color : ${pr => pr.$color};
    margin : 0 0 1rem 0;
    font-size : 2.5em;
}

p {
    margin : 0 0 2rem 0;
    padding : 1rem;

    &::first-line{
        font-size : 1.5em;
    }
}
`

export default function Card({title, text, imageurl, date}) {
    return(
       <StyledCard $color= 'orange'className='card'>
          <h2>{title}</h2>
          <p>{text}</p>
         <Figure
         imageurl={imageurl}
         caption={date}
         />
        </StyledCard>
    )
}