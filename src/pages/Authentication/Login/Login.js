import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { setUser, signInUsingGoogle, processLogin, setIsLoading, error, setError } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';


    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = e => {
        setPassword(e.target.value);
    }

    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            })
    }


    //login method (sign in)
    const handleCustomLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        processLogin(email, password)
            .then(result => {
                setError("");
                history.push(redirect_url);
            })
            .catch((error) => {
                if(error.code === 'auth/user-not-found'){
                    setError("This user is not signed in before");
                } else if(error.code === 'auth/wrong-password'){
                    setError("You have typed wrong password");
                }
                console.log(error.code);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div id='login' className="login-bg text-dark">
            <div className="login-content d-flex justify-content-center align-items-center align-items-lg-start pt-lg-5">
                <i className="fas fa-plane-departure plane-icon"></i>
                <div style={{paddingBlock: "50px"}} className="container px-lg-0 px-4">
                    <div className="login-content-sizing">
                        <div className="d-flex justify-content-between mb-5">
                            <NavLink to="/register" className="border-radius text-decoration-none text-dark py-2 text-center w-100" activeStyle={{ backgroundColor: "rgb(230, 230, 230)" }}>Registration</NavLink>
                            <NavLink to="/login" className="border-radius text-decoration-none text-dark text-center py-2 w-100" activeStyle={{ backgroundColor: "rgb(230, 230, 230)" }}>Log In</NavLink>
                        </div>
                        <form onSubmit={handleCustomLogin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-6">Email address</label>
                                <input type="email" onBlur={getEmail} className="form-control login-input-bg py-3 border-radius" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" required />
                                <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword5" className="form-label fs-6">Password</label>
                                <input type="password" onBlur={getPassword} id="inputPassword5" className="form-control login-input-bg py-3 border-radius" aria-describedby="passwordHelpBlock" placeholder="Password" required />
                                <div id="passwordHelpBlock" className="form-text text-dark">
                                    Your password must be at least 6 characters long, contain at least one uppercase letter and at least a number.
                                </div>
                            </div>
                            <div className="text-danger mb-3">{error}</div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-dark border-radius mb-3">Login</button>
                                <p>New User? <NavLink className="text-decoration-none text-dark account-switch ms-2" to="/register">Create Account</NavLink></p>
                            </div>
                        </form>
                        <hr className="mt-4" />
                        <div className="mt-4 text-center">
                            <button onClick={handleGoogleLogin} className="btn btn-outline-dark border-radius"><p><i className="fab fa-google me-3"></i>Google Sign In</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;