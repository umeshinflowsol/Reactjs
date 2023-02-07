import React, { useState } from 'react'

const BasicForm = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[allEntry,setAllEntry]=useState([]);

  const SubmitForm=(e)=>{
    e.preventDefault();
    if(email && password){
      const newEntry={id:new Date().getTime.toString,email:email,password:password};
 setAllEntry([...allEntry,newEntry])
 console.log(newEntry)
  }else{
    alert("enter data")
  }
    }


  return (
    <div>
      <form onSubmit={SubmitForm}>
        <div>
          <label>Email</label>
          <input type="text" name="email" id="email" autoComplete='off'
             onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" id="password" autoComplete='off'
          value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type='submit' >Login</button>
      </form>
      <div >{
        allEntry.map((curElem)=>{
          const{id,email,password}=curElem;
          return(
            <div key={curElem.id}><p>{email}</p>
            <p>{password}</p>
            </div> 
          )
        })
        }</div>
    </div>
  )
}

export default BasicForm
