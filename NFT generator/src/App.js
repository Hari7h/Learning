import { useState } from "react";
import Layout from "./components/Layout";
import "./index.css";
import Editor from "./components/Editor";
import { CirclePicker } from 'react-color';



export default function App(){
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);
    const [hide, setHide] = useState(false);
    const [selected, setSelected] = useState("#3e2723");
  return(
    <div>
      
    <Layout >
      
      {
        !hide ? 
        (<div style={{border:"2px red solid", padding:"60px", display:"flex",flexDirection:"column",
        gap: "15px", justifyContent: "center", alignItems:"center", borderRadius:"10px"}}> 
 
         <h1 style={{font:"bolder 28px  san-serif"}}>NFT Generator</h1>
        <label>Enter your width : </label>
       
        <input 
       onChange={(e)=>setWidth(e.target.value)}
       type="number" value={width} placeholder="width"style={{textAlign:"center", 
       padding:"10px",color:"black", borderRadius:"10px"}}/>
 
       <label>Enter your height : </label>
       <input
       onChange={(e)=>setHeight(e.target.value)}
       type="number" value={height} placeholder="height" style={{textAlign:"center", 
       padding:"10px",color:"black", borderRadius:"10px"}}/>

        
       </div> ) : 
       (
        
       
         <Editor width={width}
          height={height} 
          selected={selected} 
           />
          
        
       )
       
      } 
       
      <button 
       onClick={()=>setHide(!hide)}
       style={{boxSizing:"border-box",height:"2rem" , width:"5rem", padding:"4px",margin:"12px", color:"green",
       backgroundColor: "beige", borderRadius:"10px"}}>{!hide ? "Submit" : "Reset"}</button>

        <CirclePicker onChangeComplete={(color)=>setSelected(color.hex) } />

    
      </Layout> 

    </div>
  )
}

