import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/backgroundimage.jpeg';

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <div className='wrapper-box expand'>
                <h1 className="main-title text-center">login / register page</h1>
                <p className="main-para text-center">join us now and don't waste time</p>
                <div className="buttons text-center">
                    <Link to="/login">
                        <button className="primary-button" id="reg_btn">
                            <span>log in</span>
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="primary-button" id="reg_btn"><span>register </span></button>
                    </Link>
                </div>
            </div>

        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

}