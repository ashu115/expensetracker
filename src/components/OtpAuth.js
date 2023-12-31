import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationSvg from './assets/form_animation.json'
import { useNavigate } from 'react-router-dom'
import loadingsvg from './assets/loading.json'

function OtpAuth() {

    const [UserData, setUserData] = useState({});
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate();


    //form submit event handlling function
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/getotp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserData)
        })
        const apiObj = await response.json()
        if (apiObj.error) {
            setLoading(false)
            alert(apiObj.error)
        }
        else if (apiObj[0]) {
            navigate("/OtpVerify", { state: apiObj })
        }
        else {
            alert(apiObj.error.message)
        }
    }


    //input change event handling function
    const onChange = (event) => {
        setUserData({ ...UserData, [event.target.name]: event.target.value })
    }


    return (
        <div className='form-container'>
            <div className='bg-white'>
                <div className="form">
                    <div className='animation-div'>
                        <Lottie className="animation" animationData={animationSvg} />
                    </div>

                    <div className='form-class'>
                        <div className='form-title'>
                            <h1>FORGOT PASSWORD</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="form-body">

                            <div className="username input-fields">
                                <label className="form__label" htmlFor="userName">User Name </label>
                                <input className="form__input" name="userName" required type="text" onChange={onChange} id="userName" placeholder="User Name" />
                            </div>

                            <div className="footer-btn">
                                <button type="submit" className="submit-btn">Get OTP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {Loading &&
                <div className='loader-container'>
                    <div className='loader'>
                        <Lottie animationData={loadingsvg} />
                    </div>
                </div>
            }
        </div>

    )
}
export default OtpAuth;