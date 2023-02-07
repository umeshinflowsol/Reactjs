import { useState } from "react";


function ChangeName(){
    const[name,setName]=useState("umesh");

    const change=()=>{
        let val=name;
        if(val==="umesh"){
            setName("tiger")
        }else{
            setName("TigerUmmi");
        }
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={change}>Click Me Plz</button>
        </div>
    )
}
export default ChangeName;