import React from 'react';
import useAuth from '../../../hooks/useAuth';
import banner5 from '../../../Images/Banner/banner4.jpg'

const LogIn = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <div>
                <img src={banner5} className="img-fluid h-50" alt="" />
            </div>
            <div className="mt-3 text-center">

                <form>
                    <h1>Log In </h1>
                    <input type="text" placeholder="Enter Your Email" />
                    <br />
                    <input className="mt-2" type="text" placeholder='Enter Your Password' />
                    <br />

                </form>
                <div>----------or-----------</div>

                <div className="btn">
                    <button onClick={signInUsingGoogle}><i className="fab fa-google">Sign In</i> </button>
                </div>
                <br />
            </div>
        </div>
    );
};

export default LogIn;