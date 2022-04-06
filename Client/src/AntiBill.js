import React from 'react';
import "./AntiBill.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function AntiBill() {
  return (
    <div className='antibill'>
        <div className='antiBill_container'>
            <section className='antibill_static'>
                <h2 className='antibill_heading'>Anti Discrimination Policy</h2>
            </section>
            
            <div className='antibill_row'>
                <ol style={{ padding: "0", margin: "0", listStyleType: "none"}}>
                    <li style={{ fontWeight: "600", fontSize: "1.2vmax"}}>Anti-Discrimination Policy</li>
                </ol>
                <p>
                   <em style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                       "ElectroGate seeks to empower millions of service professionals across the world to deliver safe, reliable and high quality services at home. ElectroGate therefore does not tolerate, and prohibits discrimination against customers or service providers based on religion, caste, race, national origin, disability, sexual orientation, sex, marital status, gender identity, age or any other characteristic that may protected under applicable laws."
                   </em> 
                </p>
                <p>
                    <em></em>
                </p>
                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    Such discrimination includes, but is not limited to, refusing to provide or accept services based on any of these characteristics.
                    </em>
                </p>
                <p>
                    <em></em>
                </p>

                <p>
                    <em  style={{ fontWeight: "500", fontSize: "1.1vmax"}}>
                    Any customer or service partner found to have violated this prohibition will lose access to the ElectroGate platform.
                    </em>
                </p>
            </div>
      </div>
    </div>
  )
}

export default AntiBill
