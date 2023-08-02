import Pixel from "./Pixel";

const Row = ({width,color,selected}) =>{
    let pixel = [];
    for (let i=0; i<width; i++){
        pixel.push(<Pixel selected={selected} />)
    }
    return(
        <div style={{display:"flex"}}>
        {pixel.map((elem, idx) => elem)}
        </div>
    )
}
export default Row;