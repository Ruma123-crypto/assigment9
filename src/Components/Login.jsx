import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate} from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
const {logIn,googleSignIn,setLoading}=useContext(AuthContext)
const location=useLocation();
const navigate=useNavigate()

const handleSignIn=((e)=>
{
  e.preventDefault();
 const email = e.target.email.value;
   const password = e.target.password.value;

   logIn(email,password)
   .then((result)=>
  {
    const user=result.user
    console.log(user);
    navigate(`${location.state?location.state:'/'}`)
   
  })
  .catch((error)=>
  {
    console.log(error.message)
  })
}
)


const handleGoogleSignIN = () => {
  setLoading(true);
  googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Google login successful!");
      navigate('/');
    })
    .catch((error) => {
      console.log(error.message);
      toast.error(error.message);
    })
    .finally(() => setLoading(false));
};

    return (
      
    <div className="card bg-base-100 w-full max-w-sm mx-auto items-center flex mt-20 shrink-0 shadow-2xl">
      <div className="card-body ">
        
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
                {/* //Email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />

         <div>
  <NavLink
    to="/auth/forgot-password"
    className="link link-hover text-blue-500"
  >
    Forgot password?
  </NavLink>
</div>

          <button className="btn btn-neutral mt-4">Login</button>
          <button onClick={handleGoogleSignIN} className='btn btn-secondary'>Google Login</button>
        </fieldset>
        <p>New In Page?<span className='font-bold '>Please <NavLink to='/auth/register'className='text-red-400 underline'>Register</NavLink></span></p>
        </form>
      </div>
      
    </div>
 
    );
};

export default Login;