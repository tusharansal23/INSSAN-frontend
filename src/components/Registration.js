import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../css/Registration.css';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setImage({
        file: file,
        previewURL: reader.result,
      });
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', image.file);

    try {
      const response = await fetch('http://localhost:4000/api/v1/users/Register', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      const data = await response.json();
      console.log("data=",data);
      console.log('User registered successfully:', data);
      // Redirect to another page after successful registration
      navigate('/AdminLogin'); // Change '/success' to the desired URL
    } catch (error) {
      console.error('Error registering user:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-container">
            <div className="registration-container">
                <div className="registration-wrapper">
                    <div className="registration-avatar">
                        {/* <img src={inssanAdmin} alt="Avatar"/> */}
                    </div>
                    <div className="registration-form">
                        <h2 className='registratiion-h2'>Register</h2>
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="fullName" className="form-label">Full Name</label>
                              <input type="text" className="form-control" id="fullName" value={fullName} placeholder='John Doe' onChange={handleFullNameChange} required />
                          </div>
                          <div className="form-group">
                              <label htmlFor="username" className="form-label">Username</label>
                              <input type="text" className="form-control" id="username" value={username} placeholder='John_Doe_19' onChange={handleUsernameChange} required />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email" value={email} placeholder='JohnDoe17@gmail.com' onChange={handleEmailChange} required />
                          </div>
                          <div className="form-group password-group">
                              <label htmlFor="password" className="form-label">Password</label>
                              {/* <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required /> */}

                              <div className="password-input">
                                  <input type={passwordVisible ? "text" : "password"} id="password" className="password" placeholder='password' onChange={handlePasswordChange} required />
                                  <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                  </button>
                              </div>

                          </div>
                          <div className="form-group">
                              <label htmlFor="image" className="form-label">Profile Image</label>
                              <input type="file" className="form-control" id="image" onChange={handleImageChange} required />
                          </div>
        
                          <button type="submit" className="btn btn-primary registration-button">Register</button>
        
                        </form>
                        {/* <button type="submit" className="btn btn-primary" disabled={loading}>
                          {loading ? 'Loading...' : 'Register'}
                        </button> */}
                        {loading && (
                          <div className="overlay">
                            <div className="spinner-border text-primary" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
        
                        )}
                        <div className="registration-options">
                            <p>Already have an account? <Link to="/AdminLogin">Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
};

export default Registration;
