import React, { useState } from 'react'

const SortCircuteEvaluation = () => {
    const[demo,setDemo]=useState("");
  return (
    <div>
<h1>{demo||"technical"}</h1>
<h1>{demo&&"umesh"}</h1>
      
    </div>
  )
}

export default SortCircuteEvaluation
