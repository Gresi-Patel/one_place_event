// VerifyOtp.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const email = localStorage.getItem('resetEmail');

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(' http://localhost:5000/otp-api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                window.location.href = '/reset-password';
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Something went wrong');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Verify OTP</h2>
                            <form onSubmit={handleVerify}>
                                <div className="mb-3">
                                    <label htmlFor="otp" className="form-label">Enter OTP</label>
                                    <input
                                        type="text"
                                        id="otp"
                                        className="form-control"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Verify</button>
                            </form>
                            {message && <div className="alert alert-success mt-3">{message}</div>}
                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
