import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './components/Dashboard';
import UpdateProfilePage from './pages/UpdateProfilePage';
import ChatbotWidget from './components/ChatbotWidget';
import BlogContent from './pages/BlogContent';
import BlogPage from './pages/BlogPage';

const App = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('userInfo');
        if (user) {
            setUserInfo(JSON.parse(user));
        }
    }, []);

    return (
        <Router>
            <Header userInfo={userInfo} logoutHandler={() => setUserInfo(null)} />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage setUserInfo={setUserInfo} />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<Dashboard userInfo={userInfo} setUserInfo={setUserInfo} />} />
                <Route path="/update-profile" element={<UpdateProfilePage userInfo={userInfo} setUserInfo={setUserInfo} />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogContent />} />
            </Routes>
            <ChatbotWidget /> {/* Add ChatbotWidget here to render on all pages */}
            
        </Router>
    )
};

export default App;
