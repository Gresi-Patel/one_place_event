import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const email = localStorage.getItem('resetEmail');

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(' https://backend-999h.onrender.com/otp-api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                localStorage.removeItem('resetEmail');
                setTimeout(() => (window.location.href = '/login'), 1500);
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
                        <div className="card-header text-center">
                            <h2>Reset Password</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleReset}>
                                <div className="form-group mb-3">
                                    <label htmlFor="newPassword">New Password</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        className="form-control"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Reset Password
                                </button>
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

export default ResetPassword;
