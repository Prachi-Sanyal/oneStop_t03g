import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ setUserInfo }) => {
    return (
        <div>
            <LoginForm setUserInfo={setUserInfo} />
        </div>
    );
};

export default LoginPage;
