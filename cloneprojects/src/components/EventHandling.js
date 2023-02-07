import  React,{useState} from "react";
function ColorChange(){
    const purple="#8e44ad";
  const [bg,setBg]=useState(purple);
  const[name,setName]=useState("Click Me");
  const bgchnage=()=>{
    //console.log("clicked")
    let newBg="Yellow";
    setBg(newBg);
    setName("Umesh")
  }
  return (
    <div style={{backgroundColor:bg}}>
     <button onClick={bgchnage}>{name}</button>
    </div>
  );
}
export default ColorChange;