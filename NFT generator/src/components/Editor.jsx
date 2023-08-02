import { useRef, useCallback } from "react";
import Row from "./Row";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';


const Editor = ({width, height, selected }) =>{ 
    const drawingRef = useRef();
let rows=[];
for (let i=0; i<height; i++){
    rows.push(<Row width={width} selected={selected} />);
}

    return(
        <>
        
       <div ref={drawingRef}>
        {rows.map((elem)=> elem)}
        <button onClick={() => exportComponentAsPNG(drawingRef)}
        style={{boxSizing:"border-box",height:"2rem" , width:"6rem", padding:"4px",margin:"2px", color:"green",
       backgroundColor: "beige", borderRadius:"10px"}}>
              Download  </button>
       </div>
       </>
    )
}
export default Editor;


