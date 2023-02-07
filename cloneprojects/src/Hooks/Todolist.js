import React,{useState} from 'react'

function Todolist() {
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

 const RemoveElement=(id)=>{
    const myNewArray=myArray.filter((names)=>{

        return names.id !==id;
    }
    )
    setMyArray(myNewArray);
 };
  return (
    <div>
       
        
      {myArray.map((names)=>{
        return( <h1 key={names.id}>{names.id},{names.name},
        {names.hobby}
        <button onClick={()=>{RemoveElement(names.id)}}>remove</button>
        </h1>
        )

      })
     }

     <button onClick={Clear}>Clear</button>
     </div>
   
  )
}

export default Todolist
