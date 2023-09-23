import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className='form-container'>

            <div className='bg-white'>
                <div className="form">

                    <div className='animation-div'>

                        <Lottie className="animation" animationData={animationSvg} />
                    </div>

                    <div className='form-class'>
                        <div className='form-title'>
                            <h1>LOGIN</h1>
                        </div>

                        <form className="form-body">

                            <div className="username input-fields">
                                <label className="form__label" htmlFor="userName">User Name </label>
                                <input className="form__input" type="text" id="userName" placeholder="User Name" />
                            </div>

                            <div className="password input-fields">
                                <label className="form__label" htmlFor="password">Password </label>
                                <input className="form__input" type="password" id="password" placeholder="Password" />
                            </div>
                            <div className="footer-btn mg">
                                <Link className='sign-link' to="/"><p className='sign-link'>Forgot Password?</p></Link>
                            </div>
                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Login</button>
                            </div>
                            <p className='footer-btn mg'>––––––OR––––––</p>
                            <div className="footer-btn mg">
                                <p className='mooli'>Don't have an account?</p>
                                <Link className='sign-link' to="/signup"><p className='sign-link'>Signup here!</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;