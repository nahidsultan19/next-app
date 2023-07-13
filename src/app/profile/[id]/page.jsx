import React from 'react';

const UserProfile = ({ params }) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>User Profile</h1>
            <hr />
            <p className='text-4xl'>User Profile page <span className='p-4 bg-black text-white rounded-full'>{params.id}</span></p>
        </div>
    );
};

export default UserProfile;