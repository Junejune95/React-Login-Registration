import React from 'react'
import { Link } from 'react-router-dom';

import '../../App.css'
import BackgroundImage from '../../assets/images/backgroundimage3.jpeg';

export default function ForgetPasswordPage() {
    return (
        <header style={HeaderStyle}>
            
            <div className="text-center m-5-auto expand">
                <h2>Reset your password</h2>
                <h5>Enter your email address and we will send you a new password</h5>
                <form action="/login">
                <div className="user-box">
                        <input type="email" name="email" required />
                        <label id="reset_pass_lbl">Email address</label>

                   </div>
                    <p>
                        <button id="sub_btn" type="submit">Send password reset email</button>
                    </p>
                    <p style={fontstyle}>First time? <Link to="/register">Create an account</Link>.</p>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </form>
              
            </div>
        </header>

    )
}

const fontstyle={
    color:"black"
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