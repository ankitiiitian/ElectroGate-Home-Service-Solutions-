import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import logo from '../Electro.png';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>ElectroGate</Footer.Title>
                    <Footer.Link href="#"><img className="footer_logo" src={logo}/></Footer.Link>
                    {/* <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link> */}
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="/Team">Team</Footer.Link>
                    <Footer.Link href="/Testimonials">Clients</Footer.Link>
                    <Footer.Link href="/Comments">Feedback</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Repair</Footer.Link>
                    <Footer.Link href="#">Install</Footer.Link>
                    <Footer.Link href="#">Uninstall</Footer.Link>
                    <Footer.Link href="#">Video Consult</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Uttar Pradesh</Footer.Link>
                    <Footer.Link href="#">Delhi</Footer.Link>
                    <Footer.Link href="#">Guwahati</Footer.Link>
                    <Footer.Link href="#">Haryana</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/nitian.ankit/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/thisisit1306/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/channel/UCvomOZ4LC51D0llVlGII50Q"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://twitter.com/AnkitMajorKuma1"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}