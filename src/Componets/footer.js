import React from 'react';
import '../Styles/footer.css';
import logo from '../Images/logo_color.png'
import icons from '../Images/icons.png'

const Footer = () => {
    return (
        <footer className="App-footer">
            <div className="footerLogoContainer">
                <img src={logo} alt="domicileLogo" width="200"/>
                <p>Our fully furnished luxury apartments are conveniently located near your workspace and are two times the size of an average hotel room while also offering the consistent, high-quality experience and amenities that you get from leading business hotels.</p>
                <p>Version: 2.3.8 Fri May 24 16:38:55 PDT 2019</p>
                <p>Copyright © 2019 Domicile, Inc.</p>
            </div>
            <div className="footerContentContainer">
                <div className="footerContactContainer">
                    <p className="footerTitle">Contact Us</p>
                    <p className="footerContent">reservations@bookdomicile.com</p>
                    <p className="footerContent">phone: 1.206.310.8101</p>
                </div>
                <div className="footerPropertyContainer">
                    <p className="footerTitle">Properties</p>
                    <p className="footerContent">Search apartments</p>
                    <p className="footerContent">Seattle corporate housing</p>
                </div>
                <div className="footerFollowContainer">
                    <p className="footerTitle">Follow Us</p>
                    <img src={icons} alt="domicileIcon" width="100"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer