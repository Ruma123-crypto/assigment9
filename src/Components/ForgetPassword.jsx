import React, { useState} from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init"; // Firebase config
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Pre-fill email if passed from login
  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setLoading(false);
        setEmail(""); // clear input
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Toaster position="top-right" />
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Forgot Password
        </h1>
        <form className="flex flex-col gap-3" onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`btn btn-primary mt-2 ${loading ? "loading" : ""}`}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Remember your password?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/auth/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
