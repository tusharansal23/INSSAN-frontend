import '../css/AdminLogin.css';
import inssanAdmin from '../img/inssan-admin.jpg';
const AdminLogin = () => {

    return (

        <div className="admin_container">
            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-avatar">
                        <img src={inssanAdmin} alt="Avatar"/>
                    </div>
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group">
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" required/>
                            </div>
                            <div className="form-group">
                                <label for="password">Password:</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className="login-options">
                            <a href="#">Forgot username/password?</a>
                            <span>or</span>
                            <a href="#">Create a new account</a>
                        </div>
                    </div>
                </div>
                <div className="login-description">
                    <p>Login Form 12 is a free snippet that offers a more personalized sign-in 
                        experience for your users. The avatar and the name sections are part of 
                        the design for everyone with an account. The widget also includes options 
                        to link to forgot username/password or "create a new account."</p>
                </div>
            </div>
        </div>
    );
} ;
export default AdminLogin;