import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setUserInfo }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, { email, password });
            setUserInfo(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <a href="/forgot-password">Forgot password?</a>
                <br />
                <a href="/signup">Create an account? Signup</a>
            </div>
        </div>
    );
};

export default LoginForm;
