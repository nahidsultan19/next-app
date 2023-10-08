"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SignupPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            console.log('Signup success', response.data);
            router.push('/login')
            console.log(user);
        } catch (error) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-center text-2xl'>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input className='p-2 border broder-gray-400 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600 text-black' type="text" id='username' value={user.username} placeholder='username' onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <label htmlFor="username">Email</label>
            <input className='p-2 border broder-gray-400 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600' type="text" id='email' value={user.email} placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <label htmlFor="username">Password</label>
            <input className='p-2 border broder-gray-400 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600' type="password" id='password' value={user.password} placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button onClick={onSignup} className='p-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600'>{buttonDisabled ? "Disabled" : "Signup"}</button>
            <p>Already have an account? <Link href='/login' className='text-blue-400'>Login</Link></p>
        </div>
    );
};

export default SignupPage;