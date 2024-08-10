import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProfilePage = ({ userInfo, setUserInfo }) => {
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
    }, [userInfo, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `${process.env.REACT_APP_BACKEND_URL}/api/users/profile`,
                { name, email, password },
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            );
            setUserInfo(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Update Profile</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfilePage;
