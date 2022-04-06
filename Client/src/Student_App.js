import React from 'react'
import Product_type from './Product_type';
import "./Student_App.css";

function Student_App() {
  return (
    <div className='student_app'>
      <div className='student_app_container'>
          <img className="student_app_image" src="https://www.xda-developers.com/files/2021/10/Here-are-the-best-accessories-for-MacBook-Pro-1024x683.jpg" alt=""/>
          <div className='heading_student_app'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Student Accessories</h3></div>
          <div className='student_app_row'>
              <Product_type title='Mobile' image='https://img.freepik.com/free-vector/vector-mobile-phone-illustration-with-black-silver-colored-design_47012-77.jpg?size=626&ext=jpg' button="Click here" link="/Mobile" />
              <Product_type title='Laptop' image="https://thumbs.dreamstime.com/b/black-gray-laptop-vector-illustration-realistic-laptop-vector-illustration-gray-color-147959787.jpg" button="Click here" link="/Laptop"/>
              <Product_type title='Desk Lamp' image="https://t3.ftcdn.net/jpg/00/73/57/24/360_F_73572439_oXf53K3HcFTnrMiDF9l0xdpHGPUSOXi2.jpg" button="Click here" link="/DeskLamp" />
              
          </div>
          <div className='student_app_row'>
              <Product_type title='Gaming Console' image='https://t4.ftcdn.net/jpg/03/57/13/43/360_F_357134347_AztRpwYCjbtgeM9l6u1NbRSvGOiATjxT.jpg' button="Click here" link="/Gaming" />
              <Product_type title='Speaker' image="https://m.media-amazon.com/images/I/51r+glgk+xS._AC_SY355_.jpg" button="Click here" link="/Speaker"/>
              <Product_type title="Computer Accessories" image="https://static.vecteezy.com/system/resources/previews/005/024/845/non_2x/set-of-computer-hardware-icons-glyph-vector.jpg" button="Click here" link="ComputerAcc"/>
              
          </div>
         
      </div>        
    </div>
  )
}

export default Student_App
