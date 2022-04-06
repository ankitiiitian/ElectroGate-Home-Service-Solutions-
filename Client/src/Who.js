import React from 'react';
import "./AntiBill.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import logo from "./Electro.png";
import "./Who.css";

function Who() {
  return (
    <div className='antibill'>
        <div className='antiBill_container'>
            <section className='antibill_static'>
                <h2 className='antibill_heading'>About Us</h2>
            </section>
            
            <div className='antibill_row'>
                <ol style={{ padding: "0", margin: "0", listStyleType: "none"}}>
                    <li style={{ fontWeight: "600", fontSize: "1.5vmax", textAlign: "center"}}>Who we are</li>
                </ol>
                <p>
                   <em style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                       "ElectroGate is India's largest growth company in service care for electronic. We serve you the best expert who get expertise in their fields and deliver you the best experience of trust and faith. ElectroGate's vision is to empower millions of professionals worldwide to deliver services at home like never experienced before. By this spirit of vision we got best investors who trust on our motive and we raised a gaint funds. If we explain our family in one line : ElectroGate is a leading online marketplace for local services in electronics such as repair & maintenance, install and uninstall at your door step."
                   </em> 
                </p>
                <p>
                    <em></em>
                </p>
                
            </div>
            <div className='antibill_row'>
                {/* <MDBContainer> */}
                    <MDBRow>
                        <MDBCol>
                                <MDBRow>
                                    <h3 style={{ marginLeft: "100px"}}>32000+</h3>
                                </MDBRow>
                                <MDBRow>
                                    <em style={{ fontWeight: "500", fontSize: "1.1vmax", marginLeft: "80px"}}>Trained Professionals</em>
                                </MDBRow>
                        </MDBCol>
                        <MDBCol>
                                <MDBRow>
                                    <h3 style={{ marginLeft: "100px"}}>1 Million+</h3>
                                </MDBRow>
                                <MDBRow>
                                       <em style={{ fontWeight: "500", fontSize: "1.1vmax", marginLeft: "100px"}}>Happy Customers</em>
                                </MDBRow>
                        </MDBCol>
                        <MDBCol>
                                <MDBRow>
                                    <h3 style={{ marginLeft: "50%"}}>4</h3>
                                </MDBRow>
                                <MDBRow>
                                    <em style={{ fontWeight: "500", fontSize: "1.1vmax", marginLeft: "47%"}}>Cities</em>
                                </MDBRow>
                        </MDBCol>
                    </MDBRow>
                {/* </MDBContainer> */}
            </div>
            <div className='antibill_row'>
                <ol style={{ padding: "0", margin: "0", listStyleType: "none"}}>
                    <li style={{ fontWeight: "600", fontSize: "1.5vmax", textAlign: "center"}}>How We do it</li>
                </ol>
                <p>
                   <em style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                       "ElectroGate provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. All the professionals, though experienced and skilled, undergo intensive training modules before being allowed to list their services on the platform. Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date."
                   </em> 
                </p>
                <p>
                    <em></em>
                </p>
            </div>
            <div className='antibill_row'>
                <ol style={{ padding: "0", margin: "0", listStyleType: "none"}}>
                    <li style={{ fontWeight: "600", fontSize: "1.5vmax", textAlign: "center"}}>Our Story so far</li>
                </ol>
                <p>
                   <em style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                       " 4 cities in India : Allahabad, Delhi, Guwahati, Haryana."
                   </em> 
                </p>
                <p>
                    <em></em>
                </p>
                <MDBRow>
                        <MDBCol>
                            <img className="who_logo" src='https://files.structurae.net/files/photos/1/yamuna_bridge_prayagraj.jpg'/>
                        </MDBCol>
                        <MDBCol>
                            <img className="who_logo" src='https://wallpapercave.com/wp/wp2015432.jpg'/>
                        </MDBCol>
                        <MDBCol>
                            <img className="who_logo" src='https://m.economictimes.com/thumb/msid-88708260,width-1200,height-900,resizemode-4,imgsize-67502/over-50-covid-19-cases-found-in-iit-guwahati-restrictions-imposed.jpg'/>
                        </MDBCol>
                        <MDBCol>
                            <img className="who_logo" src='https://images.unsplash.com/photo-1605469237567-a39930679526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFyeWFuYXxlbnwwfHwwfHw%3D&w=1000&q=80'/>
                        </MDBCol>
                    </MDBRow>
            </div>
            <div className='antibill_row'>
                <ol style={{ padding: "0", margin: "0", listStyleType: "none"}}>
                    <li style={{ fontWeight: "600", fontSize: "1.5vmax", textAlign: "center"}}>For Contact Us</li>
                </ol>
                <p>
                    <em></em>
                </p>
                <p>
                   <h2 style={{ fontWeight: "700", fontSize: "1.3vmax", textAlign: "center"}}>
                       Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.
                   </h2> 
                </p>
                <p>
                    <em></em>
                </p>
                <p>
                   <h2 style={{ fontWeight: "500", fontSize: "1.1vmax", textAlign: "center"}}>
                       You could be a part of our journey. Interested ?
                   </h2> 
                </p>
                <p>
                    <em></em>
                </p>

                <p>
                   <h2 style={{ fontWeight: "500", fontSize: "1vmax", textAlign: "center"}}>
                       ankit.k@iiitg.ac.in
                   </h2> 
                </p>
                <p>
                   <h2 style={{ fontWeight: "500", fontSize: "1vmax", textAlign: "center"}}>
                       gaurav.k@iiitg.ac.in
                   </h2> 
                </p>
                
                <p>
                    <em></em>
                </p>

            </div>
      </div>
    </div>
  )
}

export default Who
