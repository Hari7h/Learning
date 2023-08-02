import { useRef } from 'react';


const Layout =({children}) =>{
    return(
        <div style={{ height:"100vh", background: "black", color:"white",
          display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            {children}
            
            
        </div>
    )
}
export default Layout;  