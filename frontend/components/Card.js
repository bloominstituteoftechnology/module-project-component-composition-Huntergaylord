import React from "react";
import Figure from "./Figure";
export default function Card({title, text, imageurl, date}) {
    return(
       <div className='card'>
          <h2>{title}</h2>
          <p>{text}</p>
         <Figure
         imageurl={imageurl}
         caption={date}
         />
        </div>
    )
}