import React from 'react';
import "./AntiBill.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Warranty() {
  return (
    <div className='antibill'>
        <div className='antiBill_container'>
            <section className='antibill_static'>
                <h2 className='antibill_heading'>Appliances Warranty</h2>
            </section>
            
            <div className='antibill_row'>
                <ol style={{ padding: "0", margin: "0", listStyleType: "none"}}>
                    <li style={{ fontWeight: "600", fontSize: "1.2vmax"}}>ElectroGate's Warranty</li>
                </ol>
                <p>
                   <em style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                       "We share our service partner's commitment to delivering superlative customer experience, ever single time."
                   </em> 
                </p>
                <p>
                    <em></em>
                </p>
                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    "To honour this commitment, we have launched The ElectroGate Insurance Protection Program. This program protects EG users against any damages caused during the delivery of a service booked on ElectroGate, upto a maximum of INR 10,000."
                    </em>
                </p>
                <p>
                    <em></em>
                </p>

                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    "In the unlikely event of any damages during service delivery, you can reach us by using the 'Insured Now' button located in your Insurance Area. "
                    </em>
                </p>
                <p>
                    <em></em>
                </p>

                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    "The insurance coverage is only applicable for services paid online (either before or after the service delivery). It is not applicable for cash payments."
                    </em>
                </p>
                <p>
                    <em></em>
                </p>

                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    "The EG Insurance Protection Program is applicable on the following services - Home Appliances, Kitchen Appliances, Student Accessories"
                    </em>
                </p>
                <p>
                    <em></em>
                </p>

                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    "Insurance coverage is not applicable on requests that have been cancelled."
                    </em>
                </p>
            </div>
      </div>
    </div>
  )
}

export default Warranty
