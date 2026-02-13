// BookServiceForm.jsx
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast"; // toast দেখানোর জন্য

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // input change handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submit handle
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload রোধ করতে
    toast.success("Booking Successful!"); // success toast
    setFormData({ name: "", email: "" }); // form খালি করে দিচ্ছে
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Service</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ServiceForm;
