import React from 'react'
import { FooterContainer } from './containers/footer';
import "./Home.css";
import Product_type from './Product_type';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
          <img className="home_image" src="https://www.thebalancesmb.com/thmb/ML8gcEtRKfWFauMj3b19VGY-M7k=/3500x1969/smart/filters:no_upscale()/GettyImages-554996383-5762dcb83df78c98dc42c4df.jpg" alt=""/>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>What we are serving</h3></div>
          <div className='home_row'>
              <Product_type title='Home Appliances' image='https://media.istockphoto.com/vectors/vector-black-home-appliances-icons-set-vector-id957230296' button="Click here" link='/Home_App'/>
              <Product_type title='Student Accessories' image="https://static.vecteezy.com/system/resources/previews/002/307/955/non_2x/student-and-accessories-vector.jpg" button="Click here" link="/Student_App"/>
              <Product_type title="Kitchen Appliances" image="https://media.istockphoto.com/vectors/vector-kitchen-appliances-line-icons-set-vector-id928242552" button="Click here" link='/Kitchen'/>
              <Product_type title="Home Decor" image="https://media.istockphoto.com/vectors/home-decor-signs-black-thin-line-icon-set-vector-vector-id953454712" button="Click here" link="/Decor" />
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Special Service</h3></div>
          <div className='home_row'>
              <Product_type title='Appliances Warranty' image='https://codysappliancerepair.com/wp-content/uploads/2014/09/6-Things-You-Need-to-Know-About-Your-Appliance-Warranty.jpg' button="Click here" link="/Warranty"/>
              <Product_type title='Insurance Cover' image='https://www.mohindrainvestments.com/wp-content/uploads/2019/03/home-appliance-insurance.jpg' button="Click here"  link="/Ins_page" />
              <Product_type title='Video Consult' image='https://thumbs.dreamstime.com/b/vector-flat-character-icons-male-female-call-center-avatars-conceptual-communication-white-background-77370259.jpg' button="Click here" link="/Video_page"/>
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Best Discounts</h3></div>
          <div className='home_row'>
                <Product_type title='Upto 30% discount' image='https://helpservice.in/service_image/banner2.jpg' button="Click here" link="/AC"/>
               
          </div>
          <div className='home_row'>
                <Product_type title='Anti Discrimination Policy' description="ElectroGate treats it's community equally with respect and without judgement or bias" image="https://thumbs.dreamstime.com/b/clipboard-checklist-shield-icon-insurance-policy-symbol-web-site-app-design-vector-illustration-isolated-white-179956117.jpg" button="Know More" link="/AntiBill" />
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>About</h3></div>
          <div className='home_row'>
                <Product_type title='Who we are' description="ElectroGate is India's largest growth company in service care for electronic. We serve you the best expert who get expertise in their fields and deliver you the best experience of trust and faith. ElectroGate's vision is to empower millions of professionals worldwide to deliver services at home like never experienced before. By this spirit of vision we got best investors who trust on our motive and we raised a gaint funds. If we explain our family in one line : ElectroGate is a leading online marketplace for local services in electronics such as repair & maintenance, install and uninstall at your door step."  button="Know More" link="/Who"/>
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Our Partners</h3></div>
          <div className='home_row'>
              <Product_type image='https://logorealm.com/wp-content/uploads/2017/05/Samsung-Logo-History.png' alt=''/>
              <Product_type image='https://nearmetrade.com/local/public/vendor/obedientcorplogo1.png' alt=''/>
              <Product_type image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI4cv9OjuDrCD7iul2z76eZs4pqwQXfMiKE_JH7xazOu_6pRBOShEuP8tVSXr8qsJ_24&usqp=CAU' alt=''/>
              <Product_type image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWWRRKrT24m3un7yVX1ShwYnV70A3L75nQjvWt3pTCVzMepHNJZaOiBjwO6Ou6wAcQCE&usqp=CAU' alt=''/>
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Our Proud Partner</h3></div>
          <div className='home_row'>
              <Product_type image='http://nationalskillcertificate.in/digital-wellness-and-cyber-security/images/skill-india.png' alt=''/>
          </div>
          <FooterContainer/>
          <div className='home_copyright'><h3 style={{ fontSize: "1.1vmax",}}>&copy; 2022 ElectroGate Technologies Private Limited.</h3></div>

      </div>        
    </div>

  )
}

export default Home
