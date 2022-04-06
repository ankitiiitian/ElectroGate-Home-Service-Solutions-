import React from 'react';
import { Link } from "react-router-dom";
import "./Product_type.css";

function Product_type({ title , description, image,  button , link}) {


  return (
    
    <div className='product_type'>
      <div className='type_info'>
          <h2 className='type_head'>{title}</h2>
          <p className='type_description'>
  
              <h3 style={{ fontSize: "1.5vmax"}}>{description}</h3>
          </p>
      </div>
    
      <img src={image} alt=''/>
      <button onClick={() => window.open(link)}>{button}</button>
    </div>
  )
}

export default Product_type
