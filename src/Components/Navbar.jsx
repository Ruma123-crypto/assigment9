import React from 'react';
import { LuDog } from 'react-icons/lu';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
const {user,logOut}=useContext(AuthContext)



const handleLogOut = () => {
  logOut()
    .then(() => {
      alert('Log out successful')
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
};

  
    const links=<>
    
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/services'>Services</NavLink>
    <NavLink to='/profile'>My Profile</NavLink>
    </>
    return (
        <div className="navbar bg-base-300 text-3xl font-bold w-11/12 my-2 mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="flex justify-center items-center text-4xl text-amber-800"><LuDog /><span>Dog</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex gap-4 menu-horizontal px-1">
     {
        links
     }
    </ul>

    
  </div>
  <div className="navbar-end">
   {
   user?
   <button onClick={handleLogOut} className="btn btn-sm bg-blue-800 text-white">LogOut</button>:
   <NavLink className="btn btn-sm bg-amber-800 text-white" to="/auth/login"> Login</NavLink> 
  } 
    {user && (
          <>
            {/* Avatar */}
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.photoURL || 'https://i.ibb.co/2kR9ZyB/user.png'}
                alt="user"
              />
            </div>
          </>
        )}

  </div>
</div>
    );
};

export default Navbar;