import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    role: "event_manager",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await fetch(" https://backend-999h.onrender.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="signuppage">
      <div className="signupbox">
        <h1 className="signuptitle">Signup</h1>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 align-items-center">
            <label htmlFor="name" className="col-12 col-sm-4 col-md-3 signuplabels">Name</label>
            <div className="col-12 col-sm-8 col-md-9 signupinputs">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="phoneNo" className="col-12 col-sm-5 col-md-3 signuplabels mobile-label">Mobile No</label>
            <div className="col-12 col-sm-7 col-md-9 signupinputs">
              <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="email" className="col-12 col-sm-4 col-md-3 signuplabels">Email</label>
            <div className="col-12 col-sm-8 col-md-9 signupinputs">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="password" className="col-12 col-sm-4 col-md-3 signuplabels">Password</label>
            <div className="col-12 col-sm-8 col-md-9 signupinputs">
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-12 col-sm-4 col-md-3 signuplabels">Signup as a</label>
            <div className="col-12 col-sm-8 col-md-9 signupinputs">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="role" id="event_manager" value="event_manager" checked={formData.role === "event_manager"} onChange={handleChange} />
                <label className="form-check-label" htmlFor="event_manager">Event Manager</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="role" id="service_provider" value="service_provider" checked={formData.role === "service_provider"} onChange={handleChange} />
                <label className="form-check-label" htmlFor="service_provider">Service Provider</label>
              </div>
            </div>
          </div>
          <div className="row signupbtn">
            <button type="submit" className="col-md-6 btn btn-primary">Signup</button>
          </div>
        </form>
        <p className="mt-3 text-center">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login here</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
