import React, { useState } from 'react'

function Spreed() {
    const[myObjcet,setMyObject]=useState({
        myName:"tiger",
        MyNickName:"ummi",
        MyDegree:"BE"
    });
    const ChangeObjcet=()=>{
        setMyObject({...myObjcet,myName:"UMESH"})
    }
 
  return (
    <div>
        <h1>{myObjcet.myName},{myObjcet.MyNickName},{myObjcet.MyDegree}</h1>
    <button onClick={ChangeObjcet}>update</button>
      
    </div>
  )
}

export default Spreed
