import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import DashboardNav from './DashboardNav';
import '../css/ChangePassword.css'; // Assuming you have a CSS file for styling

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const toggleOldPasswordVisibility = () => {
        setOldPasswordVisible(!oldPasswordVisible);
    };

    const toggleNewPasswordVisibility = () => {
        setNewPasswordVisible(!newPasswordVisible);
    };

    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const data = {
            oldPassword,
            newPassword
        };

        try {
            const response = await fetch('http://localhost:4000/api/v1/users/change-password', {
                method: 'PUT',
                credentials: 'include', // Include credentials such as cookies
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Password update failed');
            }
            alert('Password updated successfully');
            // Reset fields and loading state after successful password update
            setOldPassword('');
            setNewPassword('');
            
            navigate('/DashboardDummy'); // Change '/Dashboard' to the desired URL
        } catch (error) {
            setError('Failed to update password');
            console.error('Error updating password:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-scroller">
            <DashboardNav />
            <div className="container form-container form-start-margin">
                <div className="dashboard-event">
                    <div className="change-password-form">
                        <h2>Change Password</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="oldPassword" className='color-white'>Old Password:</label>
                                <div className="password-input">
                                    <input className="change-password-form-input-background" type={oldPasswordVisible ? "text" : "password"} 
                                        id="oldPassword" 
                                        name="oldPassword" 
                                        value={oldPassword} 
                                        onChange={handleOldPasswordChange} 
                                        required />
                                    <button type="button" className="password-toggle" onClick={toggleOldPasswordVisibility}>
                                        <FontAwesomeIcon icon={oldPasswordVisible ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword" className='color-white'>New Password:</label>
                                <div className="password-input">
                                    <input className="change-password-form-input-background" type={newPasswordVisible ? "text" : "password"} 
                                        id="newPassword" 
                                        name="newPassword" 
                                        value={newPassword} 
                                        onChange={handleNewPasswordChange} 
                                        required />
                                    <button type="button" className="password-toggle" onClick={toggleNewPasswordVisibility}>
                                        <FontAwesomeIcon icon={newPasswordVisible ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-primary forgot-button' disabled={loading}>
                                Update Password
                            </button>
                        </form>
                        {loading && (
                            <div className="overlay">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                        {error && <p className="error-message">{error}</p>}
                        <div className="forgot-options">
                            <p><Link to="/DashboardDummy">Back to Dashboard</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
