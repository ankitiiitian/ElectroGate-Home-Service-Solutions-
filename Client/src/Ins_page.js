import React from 'react'
import Product_type from './Ins_type';
import "./Ins_page.css";
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Button } from 'bootstrap';
import { MDBContainer } from 'mdbreact';

function Ins_page() {
  return (
      <div className='home'>
      <div className='home_container'>
            <div className='home_row' style={{background: "radial-gradient(circle,rgb(47 49 145) 0%,#111 100%)"}}>
                <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h3 style={{color: "white"}}>ElectroGate</h3>
                    </MDBCol>
                    <MDBCol>
                        <h5 style={{margin: "9px" ,color: "white"}}>associated with : </h5>  
                    </MDBCol>
                    <MDBCol>
                        <img className="Ins_page_bharat" src="https://static.businessworld.in/article/article_extra_large_image/1600766905_PBk47m_BharatPe_Logo_1_.jpg" alt="" /> 
                    </MDBCol>
                    <MDBCol>
                        <button style={{marginTop: "8px", background: "skyBlue", fontWeight: " bold"}} onClick={() => window.open("/Ins_form")}>Insured Now</button>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
          <img className="home_image" src="https://www.hdfcergo.com/images/default-source/homeinsurance/ergo-ads_open-file-16-07-20-5-min.jpg" alt=""/>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Home Insurance Coverage for Electronic Equipment</h3></div>
          <div className='home_row'>
                <Product_type  description="In today’s world , gadgets like laptop, computers, iPads, tablets are part of every household. And of course, no household can run efficiently without a refrigerator, a washing machine, air conditioners etc. While we
                                all ensure handling any electronic equipment needs is done with utmost care,, accidents and unforeseen incidents do happen. In order to be prepared for such losses one must ensure that all essential electronic equipments/
                                gadgets stand covered under the home insurance policy. After all, a breakdown or damage of any such device can burn a huge hole in your pocket.
                                                         Electronic equipments are not only more susceptible to damage, but also expensive and not easily replaceable. Your home policy should also protect your electronic equipment loss due to Burglary & theft. So, while taking
                                a home insurance, check if the policy coverage protects you against any accidental damage to your electrical and electronic devices."  button="Know More"/>
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Benefits</h3></div>
          <div className='new_row_ins'>
              <br></br>
                <p style={{ alignItems: "center", marginLeft: "20px"}}>
                    <em  style={{ fontWeight: "500", fontSize: "1.2vmax" , alignItems: "center"}}>
                    Such discrimination includes, but is not limited to, refusing to provide or accept services based on any of these characteristics.
                    </em>
                </p>
                <br></br>
                <li style={{ alignItems: "center", marginLeft: "20px"}}>
                    <em style={{ fontWeight: "500", fontSize: "1.2vmax"}}>
                    Comprehensive coverage will be available against accidental damage resulting from lightning, fire, flood, earthquake etc.
                    </em>
                </li>
                <br></br>
                <li style={{ alignItems: "center", marginLeft: "20px"}}>
                    <em style={{ fontWeight: "500", fontSize: "1.2vmax"}}>
                    Coverage against theft or burglary will be available too.
                    </em>
                </li>
                <br></br>
                <li style={{ alignItems: "center", marginLeft: "20px"}}>
                    <em style={{ fontWeight: "500", fontSize: "1.2vmax"}}>
                    Claims processing will be easy and hassle-free, with 24/7 support.
                    </em>
                </li>
                <br></br>
                <li style={{ alignItems: "center", marginLeft: "20px"}}>
                    <em style={{ fontWeight: "500", fontSize: "1.2vmax"}}>
                    The premium will be affordable and coverage high.
                    </em>
                </li>
                <br></br>
                <li style={{ alignItems: "center", marginLeft: "20px"}}>
                    <em style={{ fontWeight: "500", fontSize: "1.2vmax"}}>
                    By insuring your equipment, you can ensure your peace of mind.
                    </em>
                </li>
                <br></br>
                <br></br>
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>What's Included?</h3></div>
          <div className='home_row'>
              <Product_type title='Fire' image='https://media.istockphoto.com/vectors/fire-vector-isolated-vector-id1251567184?k=20&m=1251567184&s=170667a&w=0&h=CJ3lB4ri6GgMjp7hoY-F78X_VnHBSjcEVhx8oZSt4lY=' button="Click here"/>
              <Product_type title='Electrical And Mechanical Breakdown' image='https://media.istockphoto.com/vectors/power-plug-or-uk-electric-plug-electricity-symbol-icon-in-black-on-vector-id1217142555?k=20&m=1217142555&s=612x612&w=0&h=JdikXajH1frMipKvlGrAhVKDGuqWEbH_vxbH_stFkXA=' button="Click here"  link="/Ins_form"/>
              <Product_type title='Data Loss' image='https://media.istockphoto.com/vectors/data-loss-icon-information-concept-vector-id1017058080?k=20&m=1017058080&s=170667a&w=0&h=UGWffLyc6ENLFUemTFgVnS3F-zuLL2rdoECODjJx0uI=' button="Click here"/>
          </div>
          <div className='home_row'>
              <Product_type title='Replacement' image='data:image/png;base64,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' button="Click here"/>
              <Product_type title='Parts' image='https://thumbs.dreamstime.com/b/car-motorcycle-repair-parts-vector-objects-car-motorcycle-repair-parts-set-vector-detailed-objects-design-elements-114069079.jpg' button="Click here"  link="/Ins_form"/>
              <Product_type title='Restoration' image='https://media.istockphoto.com/vectors/air-conditioner-repair-service-vector-young-man-repairing-air-vector-id872861728?k=20&m=872861728&s=170667a&w=0&h=u5dKR9mtDVlu4HARLTio19k9UrivnU-0lmCo7_RXKJQ=' button="Click here"/>
          </div>
          <div className='heading'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>What's not Included?</h3></div>
          <div className='home_row'>
              <Product_type title='Floods' image='https://static.vecteezy.com/system/resources/thumbnails/001/761/959/small/flood-natural-disaster-vector.jpg' button="Click here" link='/Home_App'/>
              <Product_type title='Deductibles' image="https://media.istockphoto.com/vectors/red-rubber-stamp-icon-on-transparent-background-vector-id918729418?k=20&m=918729418&s=612x612&w=0&h=mJIrxVGDuQAAMB09I5dxCK0SJJvB7iLilpKNGcsC8io=" button="Click here" link="/Student_App"/>
              <Product_type title="Earnings" image="https://thumbs.dreamstime.com/b/hand-holding-coins-icon-money-income-vector-silhouette-illustration-96712020.jpg" button="Click here" link='/Kitchen'/>
              <Product_type title="Fees" image="https://img.freepik.com/free-vector/investment-statistic-with-money-illustration-growth-investment-finance-business-icon-concept-white-isolated_138676-626.jpg" button="Click here" link="/Decor" />
          </div>
          <div className='home_row'>
              <Product_type title='Debris' image='https://media.istockphoto.com/vectors/vector-explosion-cloud-of-black-pieces-vector-illustration-vector-id865702228' button="Click here"/>
              <Product_type title='Rent' image='https://static.vecteezy.com/system/resources/thumbnails/000/350/264/small_2x/Real_Estate__28404_29.jpg' button="Click here"  link="/Ins_form"/>
              <Product_type title='Additional Expense' image='https://static.vecteezy.com/system/resources/previews/004/374/835/original/envelope-with-money-icon-in-line-style-illustration-of-business-message-vector.jpg' button="Click here"/>
              <Product_type title='Lapsed Policy' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZuRGobvUjDi0qwtWwTT7x7NuYqyBKHOwojmnyDd7fpNHvqvM6FltfU8pcDs3IEnoidw&usqp=CAU' button="Click here"/>
          </div>
          


      </div>        
    </div>
  )
}

export default Ins_page
