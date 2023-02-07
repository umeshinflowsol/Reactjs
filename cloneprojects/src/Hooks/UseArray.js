
import React, { useState } from 'react'

function UseArray() {

    const name=[{
        id:0,name:"umesh",hobby:"simple"
    },
    {
        id:1,name:"ramesh",hobby:"simple"
    }
]
console.log(name)
  const[myArray,setMyArray]=useState(name);

const Clear=()=>{
    setMyArray([]);
}

  return (
    <div>
       
        
      {myArray.map((names)=>
      <h1 key={names.id}>{names.id},{names.name},{names.hobby}</h1>
    )
     }

     <button onClick={Clear}>Clear</button>
     </div>
   
  )
}

export default UseArray;
