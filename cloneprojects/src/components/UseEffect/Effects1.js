import React, {useState, useEffect } from 'react'

const Effects1 = () => {
    const[count,setCount]=useState(0);

   
    useEffect(()=>{
        if(count >= 1){
            document.title=`chats(${count})`
        }else{
            document.title=`chats`
        }
       
    },[count]);
     
  console.log("hello Hook")

  return (
    <div>
      <h1>{count}</h1>
      <button className='btn' onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Effects1
