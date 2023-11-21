import React, { useState} from 'react'

export default function Parent() {

    const [college,setCollege]=useState("SKCET")
    return (
        <div>
        <h1> my college is {college}</h1>
        <buttton onClick={()=>setCollege("ATRIA")}>click me</buttton>
        </div>
    )
}