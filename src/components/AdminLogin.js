import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../css/AdminLogin.css';
import inssanAdmin from '../img/inssan-admin.jpg';

const AdminLogin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="admin_container">
            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-avatar">
                        {/* <img src={inssanAdmin} alt="Avatar"/> */}
                    </div>
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" required />
                            </div>
                            <div className="form-group password-group">
                                <label htmlFor="password">Password:</label>
                                <div className="password-input">
                                    <input type={passwordVisible ? "text" : "password"} id="password" name="password" required />
                                    <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                        <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className="login-options">
                            <a href="#">Forgot username/password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
