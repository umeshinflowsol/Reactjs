import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const[widthCount,setWidthCount]=useState(window.screen.width);

    const actuallWidth=()=>{
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }

    useEffect(()=>{
        console.log("add event")
        window.addEventListener("resize",actuallWidth)
    return()=>{
        console.log("remove event")
        window.removeEventListener("resize",actuallWidth)
    }
    },[widthCount])
   

  return (
    <div>
      <p>The Actually Size Of The Window Is:</p>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2
