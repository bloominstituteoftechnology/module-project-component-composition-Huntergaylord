import React from "react"
export default function Figure({imageurl, caption}){
    return(<figure>
           <img src={imageurl}/>
           <figcaption>Amazing Picture taken on {caption}</figcaption>
         </figure>
    )
 }