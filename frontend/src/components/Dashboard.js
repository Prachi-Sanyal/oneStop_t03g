import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = ({ userInfo, setUserInfo }) => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        setUserInfo(null);
        localStorage.removeItem('userInfo');
        navigate('/');
    };

    const deleteAccountHandler = async () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            try {
                await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/users/delete`, {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                });
                localStorage.removeItem('userInfo');
                setUserInfo(null);
                navigate('/');
                logoutHandler();
            } catch (error) {
                console.error('Error deleting account:', error.response ? error.response.data : error.message);
            }
        }
    };

    return (
        <div style={{ width: '35%', border: '1px solid #000', padding: '20px' }}>
            <h2>Dashboard</h2>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <Link to="/update-profile">Update Profile</Link>
            <br />
            <button onClick={deleteAccountHandler}>Delete Account</button>
            <br />
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default Dashboard;
