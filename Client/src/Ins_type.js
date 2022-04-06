import React from 'react';
import { Link } from "react-router-dom";
import "./Ins_type.css";

function Ins_type({ title , description, image}) {


  return (
    
    <div className='Ins_type'>
      <div className='Ins_type_info'>
          <h2 className='Ins_type_head'>{title}</h2>
          <p className='Ins_type_description'>
  
              <h3 style={{ fontSize: "1.3vmax"}}>{description}</h3>
          </p>
      </div>
    
      <img src={image} alt=''/>
    </div>
  )
}

export default Ins_type
