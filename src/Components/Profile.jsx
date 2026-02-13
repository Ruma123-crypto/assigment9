import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { NavLink } from 'react-router';

const Profile = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <div className='flex flex-col justify-center items-center my-3'>
            <h3 className='font-bold text-2xl'>{user?.displayName}</h3>
            <h3 className='font-bold text-xl'>{user?.email}</h3>
            <img className='w-5/12 h-5/12' src={user?.photoURL} alt="" />
           <NavLink to="/auth/register">
  <button className="btn btn-secondary my-3">
    Update Profile
  </button>
</NavLink>

        </div>
    );
};

export default Profile;