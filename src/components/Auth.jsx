import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import {Icon, IconBlack, SigninImage} from "../assets";

const cookies = new Cookies();

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = async (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {firstName, lastName, username, password, confirmPassword, phoneNumber, avatarURL} = form;

        const URL = 'http://localhost:5000/auth';

        const {data: {token, userId, hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup' : 'signin'}`, {
            firstName,
            lastName,
            username,
            password,
            phoneNumber,
            avatarURL
        });

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('firstName', firstName);
        cookies.set('lastName', lastName);
        cookies.set('userId', userId);

        if (isSignup) {
            cookies.set('password', hashedPassword);
            cookies.set('avatarURL', avatarURL);
            cookies.set('phoneNumber', phoneNumber);
        }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between h-screen overflow-hidden">
            <div className="flex lg:hidden items-center py-10 px-10">
                <img src={IconBlack} alt="" className="w-10 h-10"/>
                <h1 className="text-xl font-medium text-gray-800">Delio</h1>
            </div>
            <div
                className="lg:w-1/2 px-10 lg:px-0 py-10 lg:py-0 w-screen h-full flex">
                <div className="lg:max-w-[70%] lg:mx-auto w-full h-full lg:flex lg:flex-col lg:justify-center">
                    <h1 className="text-3xl">{isSignup ? 'Welcome to Delio' : 'Welcome Back!'}</h1>
                    <p className="pt-1 text-lg opacity-50">{isSignup ? 'Signup to Delio' : 'Sign in to your account'}</p>
                    <form onSubmit={handleSubmit} className="py-10 mr-20 flex flex-col gap-5">
                        {isSignup && (
                            <div className="flex gap-10 w-full">
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="FirstName">First Name</label>
                                    <input
                                        className="w-full py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="LastName">Last Name</label>
                                    <input
                                        className="w-full py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                        type="text"
                                        name="lastName"
                                        onChange={handleChange}
                                        required/>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Username">Username</label>
                            <input
                                className="py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                type="text"
                                name="username"
                                onChange={handleChange} required/>
                        </div>
                        {isSignup && (
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Phone Number</label>
                                <input
                                    className="py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    required/>
                            </div>
                        )}
                        {isSignup && (
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Avatar URL</label>
                                <input
                                    className="py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                    type="url"
                                    name="avatarURL"
                                    onChange={handleChange}
                                    required/>
                            </div>
                        )}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Password">Password</label>
                            <input
                                className="py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                type="password"
                                name="password"
                                onChange={handleChange} required/>
                        </div>
                        {isSignup && (
                            <div className="flex flex-col gap-1">
                                <label htmlFor="ConfirmPassword">Confirm Password</label>
                                <input
                                    className="py-2.5 rounded-md text-base bg-gray-300 text-custom-black px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    required/>
                            </div>
                        )}
                        {isSignup && (
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="terms" id="terms" required
                                       className="checked:bg-cerise"/>
                                <label htmlFor="terms">I agree to the <span className="text-cerise-500">Terms of
                                    Service</span></label>
                            </div>
                        )}
                        <button
                            className="py-2.5 rounded-md text-base bg-cerise-500 text-white px-5 focus:outline-none focus:ring-2 focus:ring-cerise-500">
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                    <div>
                        <p>
                            {isSignup ? 'Already have an account?' : "Don't have an account?"}
                            <span className="text-cerise" onClick={switchMode}> {isSignup ? 'SignIn' : 'SignUp'}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[50vw] overflow-hidden hidden lg:flex">
                <img src={SigninImage} alt="Signin Image" className=""/>
                <div
                    className="w-[50vw] overflow-hidden flex items-center justify-center h-full absolute top-0 bg-cerise/50">
                    <img src={Icon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Auth;
