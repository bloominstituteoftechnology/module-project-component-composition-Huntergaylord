import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
max-width : 55%

figcaption {
  font-style : italic;
  
}
`

export default function Figure({imageurl, caption}){
    return(<StyledFigure>
           <img src={imageurl}/>
           <figcaption>Amazing Picture taken on {caption}</figcaption>
         </StyledFigure>
    )
 }