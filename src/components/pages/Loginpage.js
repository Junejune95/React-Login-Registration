import React from 'react'
import { Link } from 'react-router-dom';

import '../../App.css'
import BackgroundImage from '../../assets/images/backgroundimage4.jpeg';

export default function LoginPage() {
    return (
        <header style={HeaderStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 left-wrapper">
                    <p className='title typing-animation'>Sign in to us</p>
                        <p>First time? <Link to="/register">Create an account</Link>.</p>
                        <p><Link to="/">Back to Homepage</Link>.</p>
                    </div>
                    <div className='col-md-4 expand'>
                        <form action="/home">
                            <div className="user-box">
                                <input type="text" name="first_name" required />
                                <label>Username or email address</label>

                            </div>
                            <div className="user-box">



                                <input type="password" name="password" required />
                                <label>Password</label>
                            </div>
                            <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>


                            <p className='mt-2'>
                                <button id="sub_btn" type="submit">Login</button>
                            </p>
                        </form>
                    </div>
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