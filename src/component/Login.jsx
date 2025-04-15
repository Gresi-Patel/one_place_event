import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // 👈 Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true); // 👈 Start loading

    try {
      const response = await fetch('https://backend-999h.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        if (data.role === 'service_provider') {
          navigate('/service-provider-panel');
        } else if (data.role === 'event_manager') {
          navigate('/event-manager-panel');
        } else {
          navigate('/');
        }
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false); // 👈 Stop loading
    }
  };

  return (
    <div className="loginpage">
      <div className="loginbox">
        <h1 className="logintitle">Login</h1>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 align-items-center">
            <label htmlFor="email" className="col-12 col-md-3 loginlabels">Email</label>
            <div className="col-12 col-md-9 logininputs">
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="password" className="col-12 col-md-3 loginlabels">Password</label>
            <div className="col-12 col-md-9 logininputs">
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row loginlinks">
            <a className="col-6 forgetpassward" onClick={() => navigate('/signup')}>SignUp</a>
            <a className="col-6 forgetpassward" onClick={() => navigate('/forgot-password')}>Forget Password</a>
          </div>
          <div className="row loginbtn">
            <button
              type="submit"
              className="col-md-6 btn btn-primary btn-lg"
              disabled={isLoading} // 👈 Disable when loading
            >
              {isLoading ? 'Logging in...' : 'Login'} {/* 👈 Text change */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
