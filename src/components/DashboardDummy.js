import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logout from './Logout'; // Import the logout function
import '../css/Dashboard.css'; // Assuming you have a CSS file for styling


import '../css/DashboardDummy.css';
import logo from '../img/INSSAN-logo.png';
import DashboardNav from './DashboardNav';
import DashboardMainPanel from './DashboardMainPanel';

const DashboardDummy= () => {

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data
  const [username, setUsername] = useState(''); // State to store username    
  const [avatarUrl, setAvatarUrl] = useState(''); // State to store avatarUrl    

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
                  if (data && data.data && data.data.username && data.data.avatar) {
                    const uname = data.data.username;
                    const capitalizedUname = uname.charAt(0).toUpperCase() + uname.slice(1);
                    setUsername(capitalizedUname); // Capitalize the first letter of the username
                
                    setAvatarUrl(data.data.avatar);
                      // setUsername(data.data.username);
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


    return(

        
        <div className="container-scroller">
          {/* Display user data if available */}
            <DashboardNav/>
            <div class="container-fluid page-body-wrapper">
               {/* partial:partials/_navbar.html  */}
                
            {/* partial  */}
            <DashboardMainPanel />
         {/* main-panel ends  */}
      </div>



        </div>
    );
};
export default DashboardDummy;