import React, { useState, useEffect } from 'react';
import DashboardNav from './DashboardNav';
import '../css/AccountSetting.css';

const AccountSetting = () => {
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });

    const [initialData, setInitialData] = useState({
        fullName: '',
        email: ''
    });

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/users/', {
                    method: 'GET',
                    credentials: 'include', // Include credentials such as cookies
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = await response.json();
                if (result.success) {
                    setUserData(result.data);
                    setFormData({
                        fullName: result.data.fullName,
                        email: result.data.email
                    });
                    setInitialData({
                        fullName: result.data.fullName,
                        email: result.data.email
                    });
                } else {
                    console.error('Failed to fetch user data:', result.message);
                }
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchUserData();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        setLoading(false);
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission for editing user data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/api/v1/users/update-account', {
                method: 'PUT',
                credentials: 'include', // Include credentials such as cookies
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                setUserData(result.data);
                setIsEditing(false);
                setInitialData({
                    fullName: result.data.fullName,
                    email: result.data.email
                });
                alert('User data updated successfully');
            } else {
                console.error('Failed to update user data:', result.message);
            }
        } catch (error) {
            console.error('Error updating user data:', error.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle cancel button click
    const handleCancel = () => {
        setFormData(initialData);
        setIsEditing(false);
        setLoading(true);
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-scroller">
            <DashboardNav />
            <div className="container form-container form-start-margin">
                <div className="dashboard-event">
                    <div className="change-password-form">
                        <h2>Account Settings</h2>
                        <div className="profile-info">
                            <img src={userData.avatar} alt="Profile" className="profile-image" />
                            {!isEditing ? (
                                <>
                                    <p><strong>Full Name:</strong> {userData.fullName}</p>
                                    <p><strong>Username:</strong> {userData.username}</p>
                                    <p><strong>Email:</strong> {userData.email}</p>
                                    <button onClick={() => setIsEditing(true)}>Edit</button>
                                </>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="fullName" className='color-white'>Full Name:</label>
                                        <input
                                            type="text"
                                            className="change-password-form-input-background"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className='color-white'>Email:</label>
                                        <input
                                            type="email"
                                            className="change-password-form-input-background"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className='mr-inpx-20' disabled={loading}>Save</button>
                                    <button type="button" onClick={handleCancel}>Cancel</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSetting;
