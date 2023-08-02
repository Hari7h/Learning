import { OpenAc } from "./OpenAc";
import {Update, Delete } from "./UpdateDelete";
import deleteIcon from "../assets/deleteIcon.svg";
import editIcon from "../assets/editIcon.svg"
import collapseIcon from "../assets/collapseIcon.svg";
import expandIcon from "../assets/expandIcon.svg"



export const Accordion = ({section}) => {
    const {open, toggle} = OpenAc(false);
  
  return (
    <div className="acc_container">
        <Expandable first= {section.first} last={section.last}  
         open={open} toggle={toggle} />
        
        { open && <TextSection dob={section.dob} country={section.country} 
         gender={section.gender} description={section.description} />  }

    </div>  
  )
};

export const Expandable = ({first , last, open, toggle}) =>{
  return(
   <div className="expand_container" onClick={toggle} >
    <div className="expand_text"> {first} {last} </div>
    <button className="expand_button">
      <img src={expandIcon} alt="expand" />
    </button>
  </div>
  );
};

export const TextSection = ({ dob, country, gender,description }) =>{
 
  const today = new Date();
  console.log(today)
  const birthDate = new Date(dob);
  console.log(birthDate)
  const ageInMillis = today - birthDate;
  console.log(ageInMillis)

  // Calculate the age in years
  const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));

  return(
    
   <div className="text_container"> 
     <div className="text_detail"> {ageInYears} {country} {gender} </div> 

       <div className="text_description">{description}</div>

       <button className="update" > <Update/> <img src={editIcon} alt="edit" />
         </button>

         <button className="delete" > <Delete  /> <img src={deleteIcon} alt="delete" />
         </button>
   </div>
  )
}


 
