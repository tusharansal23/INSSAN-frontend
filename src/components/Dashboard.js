import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logout from './Logout'; // Import the logout function
import '../css/Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null); // State to store user data
    const [username, setUsername] = useState(''); // State to store username    

    // Function to handle logout
    const handleLogout = async () => {
        setLoading(true); // Set loading to true when logout is initiated
        const loggedOut = await logout();
        if (loggedOut) {
            // Redirect to login page after successful logout
            window.location.href = '/AdminLogin'; // Change '/login' to your login page URL
        } else {
            setLoading(false); // Reset loading if logout failed
        }
    };
    // Function to handle Chanfe Password
    const handleChangePassword = async () => {
        setLoading(true); // Set loading to true when logout is initiated
        
            window.location.href = '/ChangePassword'; // Change '/login' to your login page URL
        
    };
    // Function to fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:4000/api/v1/users/', {
                    method: 'GET',
                    credentials: 'include' // Include credentials such as cookies
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                    // Extract username from user data
                    if (data && data.data && data.data.username) {
                        setUsername(data.data.username);
                    }
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array ensures this effect runs only once, when the component mounts


    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <h2>Dashboard</h2>
                {/* Navigation */}
                <nav>
                    <ul>
                        <li><button onClick={handleLogout} disabled={loading}>Logout</button></li>
                        <li><button onClick={handleChangePassword} disabled={loading}>Change Password</button></li>
                        <li><Link to="/friends">Friends</Link></li>
                        <li><Link to="/photos">Photos</Link></li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </header>

            {/* Display user data if available */}
            {username && (
                <div className="username">
                    <h3>Welcome, {username}!</h3>
                </div>
            )}
            {/* Main Content */}
            {/* Your existing code for main content */}

            {/* Footer */}
            <footer className="dashboard-footer">
                <p>&copy; 2024 Facebook</p>
            </footer>
            {/* Loading spinner */}
            {loading && (
                <div className="overlay">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
