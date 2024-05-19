import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../css/AdminLogin.css';
import Cookies from 'js-cookie'; // Import js-cookie
import PropTypes from 'prop-types';

const AdminLogin = ({ setIsAuthenticated }) => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const data = {
            email,
            username,
            password
        };

        try {
            const response = await fetch('http://localhost:4000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const responseData = await response.json();
            console.log('Login successful:', responseData);
            Cookies.set('accessToken', responseData.data.accessToken, { expires: 7 }); // Set cookie to expire in 7 days
            Cookies.set('refreshToken', responseData.data.refreshToken, { expires: 7 }); // Set cookie to expire in 7 days
            
            // Update isAuthenticated state in parent component
            setIsAuthenticated(true);
            // Redirect to another page after successful login
            navigate('/DashboardDummy'); // Change '/Dashboard' to the desired URL
        } catch (error) {
            console.error('Error logging in:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-container">
            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-avatar">
                        {/* <img src={inssanAdmin} alt="Avatar"/> */}
                    </div>
                    <div className="login-form">
                        <h2 className='login-h2'>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" 
                                    id="username" 
                                    name="username" 
                                    value={username} 
                                    onChange={handleUsernameChange} 
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="text" 
                                    id="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    required />
                            </div>
                            <div className="form-group password-group">
                                <label htmlFor="password">Password:</label>
                                <div className="password-input">
                                    <input type={passwordVisible ? "text" : "password"} 
                                        id="password" 
                                        name="password" 
                                        value={password} 
                                        onChange={handlePasswordChange} 
                                        required />
                                    <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-primary login-button' disabled={loading}>
                                Sign In
                            </button>
                        </form>
                        {loading && (
                            <div className="overlay">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                        <div className="login-options">
                            <Link to="/ForgotPassword">Forgot username/password?</Link>
                            <p>Don't have an account? <Link to="/Registration">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// AdminLogin.propTypes = {
//     setIsAuthenticated: PropTypes.func.isRequired,
// };
export default AdminLogin;
