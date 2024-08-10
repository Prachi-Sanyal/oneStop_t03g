import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/forgot-password`, { email });
            alert('Password reset link sent to your email.');
        } catch (error) {
            console.error('Error sending password reset link:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
