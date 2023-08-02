import {data} from '../assets/data.js'
import {Accordion} from './Accordion'

export const Home = () =>{
    return(
        <div>
            <div className="title">Search</div>
            {data.map((section, idx) =>(
                <Accordion key={idx} section={section}  />
            ))}
        </div>
    )
}