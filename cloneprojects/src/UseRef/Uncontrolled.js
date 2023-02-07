import React, { useRef, useState } from 'react'

const Uncontrolled = () => {
//it  like useState only and its preserve the value.No render
const LuckyName=useRef(null);
const [show,setShow]=useState(false);

const SubmitForm=(e)=>{
    e.preventDefault();
    const name=LuckyName.current.value;
    name==="" ? alert("plz fill data"):setShow(true);
}
  return (
    <div>
      <h1>hi Uncontrolled</h1>
      <form action='' onSubmit={SubmitForm}>
        <div>
        <label>Enter your Name</label>
        <input type='text' id="luckyname" ref={LuckyName}></input>
        </div>
       <button>submit</button>
      </form>
      <p>{show ?`your name is ${LuckyName.current.value}`:""}</p>
    </div>
  )
}

export default Uncontrolled
