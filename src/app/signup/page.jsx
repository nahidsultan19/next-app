"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignupPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const onSignup = async () => {
        console.log('form submitted');
    }

    return (
        <div className='flex'>
            <h1 className='text-center text-2xl'>Sign up page</h1>
        </div>
    );
};

export default SignupPage;