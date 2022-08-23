import React from 'react'
import { Link } from 'react-router-dom';

import '../../App.css'

import BackgroundImage from '../../assets/images/backgroundimage2.jpeg';

export default function RegisterPage() {
    return (
        <header style={HeaderStyle}>
            <div className='container'>
                <div className='row '>
                    <div className='col-md-8 left-wrapper'>
                        <p className='title typing-animation'>
                            Join us
                        </p>
                        <br />
                        <h2>Create your personal account</h2>
                        <br />
                        <br />

                        <p className='active-route'><Link to="/">Back to Homepage</Link>.</p>
                    </div>
                    <div className='col-md-4 expand'>
                        <form action="/home">
                            <div className="user-box">
                                <input type="text" name="first_name" required />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input type="email" name="email" required />
                                <label>Email address</label>
                            </div>
                            <div className="user-box">

                                <input type="password" name="password" required />
                                <label>Password</label>
                            </div>
                            <br />
                            <p className='checkbox-text'>
                                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                            </p>
                            <br />
                            <p>
                                <button id="sub_btn" type="submit" className='primary-button mt-2'>Register</button>
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