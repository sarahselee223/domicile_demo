import React from "react"
import '../Styles/header.css'

const Header = () => {
    return (
        <header className="App-header">
            <div className="logoContainer">
                <p className="logo">domicile</p>
            </div>
            <div className="headerItemContainer">
                <p className="phoneNumber">206.310.8101</p>
                <p className="properties">Properties</p>
                <p className="contact">Contact</p>
            </div>
        </header>
    )
}

export default Header