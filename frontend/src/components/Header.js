import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userInfo, logoutHandler }) => {
    return (
        <header>
            <nav>
                <ul>
                    {userInfo ? (
                        <>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
