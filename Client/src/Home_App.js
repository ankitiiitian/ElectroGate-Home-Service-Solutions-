import React from 'react'
import Product_type from './Product_type';
import "./Home_App.css"

function Home_App() {
  return (
    <div className='home_app'>
      <div className='home_app_container'>
          <img className="home_app_image" src="https://wallpaperaccess.com/full/6424671.jpg" alt=""/>
          <div className='heading_app'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Home Appliances</h3></div>
          <div className='home_app_row'>
              <Product_type title='Television' image='https://static3.depositphotos.com/1004996/225/v/600/depositphotos_2257897-stock-illustration-lcd-monitor.jpg' button="Click here" link="/Television" />
              <Product_type title='Electric fan' image="https://img.freepik.com/free-vector/electric-fan-cartoon-icon-set_158626-255.jpg" button="Click here"  link="/Fan" />
              <Product_type title="Vaccum Cleaner" image="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-vacuum-cleaner-vector-illustration-with-simple-flat-design-isolated-on-white-png-image_2040408.jpg" button="Click here" link="/Vacum" />
              
          </div>
          <div className='home_app_row'>
              <Product_type title='Washing Machine' image='https://static.vecteezy.com/system/resources/thumbnails/004/215/557/small_2x/washing-machine-appliance-free-vector.jpg' button="Click here" link="/Washing" />
              <Product_type title='Air Conditioner' image="https://thumbs.dreamstime.com/b/untitled-air-conditioner-vector-icon-135033923.jpg" button="Click here" link="/AC"/>
              <Product_type title="Water Purifier" image="https://static.vecteezy.com/system/resources/previews/002/991/991/non_2x/electric-water-purifier-vector.jpg" button="Click here" link="/WaterPure" />
              
          </div>
         
      </div>        
    </div>
  )
}

export default Home_App
