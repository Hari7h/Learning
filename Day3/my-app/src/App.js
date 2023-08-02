// import {useState} from 'react';
import Layout from "./components/Layout";

export default function App() {
  return(
<Layout>
  <div  style={{border: "2px red solid", padding:"10px", display:"flex" }}>
    <label> Enter Your width</label>
    <input type= "number" placeholder="width"/>
    <input type ="number" placeholder="height"/>

  </div>
</Layout>

  )
}

 