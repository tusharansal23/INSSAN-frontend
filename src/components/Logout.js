// logout.js
import Cookies from 'js-cookie';

const Logout = async () => {
    
const accessToken = Cookies.get('accessToken');
    try {
        const response = await fetch('http://localhost:4000/api/v1/users/logout', {
            method: 'POST',
            credentials: 'include' // Include credentials such as cookies
        });
        if (!response.ok) {
            throw new Error('Logout failed');
        }
        return true; // Logout successful
    } catch (error) {
        console.error('Error logging out:', error.message);
        return false; // Logout failed
    }
};

export default Logout;
