import React from 'react'
import Product_type from './Product_type';
import "./Decor.css";

function Decor() {
  return (
    <div className='decor_app'>
      <div className='decor_app_container'>
          <img className="decor_app_image" src="https://imgpile.com/images/67c90eaf9604057f0f9c0e52ffeb119c.jpg" alt=""/>
          <div className='heading_decor_app'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Home Decor</h3></div>
          <div className='decor_app_row'>
              <Product_type title='Bulbs' image='https://freerangestock.com/sample/38788/vector-lightbulb-ideas.jpg' button="Click here" link="/Bulb"/>
              <Product_type title='String LED Light' image="https://media.istockphoto.com/vectors/christmas-lights-bulbs-color-garlands-christmas-illustration-vector-vector-id1269814881?k=20&m=1269814881&s=612x612&w=0&h=8_5ad11Ja2oEC_CCONzhrZQkhxsycK9zz90e4V9CFE0=" button="Click here" link="/StringLED"/>
              <Product_type title='Clock' image="https://i2.wp.com/files.123freevectors.com/wp-content/uploads/new/objects/337-free-vintage-old-clock-vector.png" button="Click here" link="/Clock"/>
              
          </div>
          <div className='decor_app_row'>
              <Product_type title='Lamps' image='https://static.vecteezy.com/system/resources/previews/000/340/755/non_2x/vector-chandelier-light-lamp.jpg' button="Click here" link="/Lamp"/>
              <Product_type title='Projector' image="https://static.vecteezy.com/system/resources/previews/003/027/935/non_2x/projector-and-device-vector.jpg" button="Click here" link="/Projector"/>
              <Product_type title="CCTV" image="https://media.istockphoto.com/vectors/security-camera-vector-cctv-control-safety-video-protection-tech-vector-id1132769633?b=1&k=20&m=1132769633&s=612x612&w=0&h=v6XVDgkSWZc4Q_v_07qV-bzWAW1QEC0FWz0IPZgqRQU=" button="Click here" link="/CCTV" />
              
          </div>
         
      </div>        
    </div>
  )
}

export default Decor
