"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const onLogin = async () => {
        console.log('form submitted');
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-center text-2xl'>Login Now</h1>
            <hr />
            <label htmlFor="username">Email</label>
            <input className='p-2 border broder-gray-400 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600' type="text" id='email' value={user.email} placeholder='email' onClick={(e) => setUser({ ...user, email: e.target.value })} />
            <label htmlFor="username">Password</label>
            <input className='p-2 border broder-gray-400 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600' type="password" id='password' value={user.password} placeholder='password' onClick={(e) => setUser({ ...user, password: e.target.value })} />
            <button onClick={onLogin} className='p-2 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600'>Login</button>
            <Link href='/signup'>Signup</Link>
        </div>
    );
};

export default LoginPage;