import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {

  const { setUser, createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');

  const handleCreateUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;

   if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
  setPasswordError("Password must be at least 6 characters long, and include Uppercase & Lowercase letters");
  return;
}


    // clear error if valid
    setPasswordError('');

    createUser(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: photo
        })
        .then(() => {
          setUser({
            ...result.user,
            displayName: name,
            photoURL: photo
          });
          navigate('/');
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>

        <form onSubmit={handleCreateUser}>
          <fieldset className="fieldset">

            <label className="label">Name</label>
            <input name="name" className="input" placeholder='name' required />

            <label className="label">Photo URL</label>
            <input name="photoURL" className="input" placeholder='Photo URL' required />

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder='email' required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder='password' required />

            {/* ❌ Password Error */}
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

          </fieldset>
        </form>

        <p>
          Already have an account?
          <NavLink to="/auth/login" className="text-red-400 underline font-bold">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
