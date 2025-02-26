import { useState } from 'react';
import './Login.css';
import eye from '../assets/myimages/eye.png';
import hide_eye from '../assets/myimages/hide_eye.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Use the environment variable REACT_APP_PORT in the request URL
        axios.post('http://localhost:8086/login', { username, password })
        //axios.post(`${process.env.REACT_APP_SPRINGBOOT_BASE_URL}/login`, { username, password })
            .then(result => {
                console.log(result);
                if(result.data === "no user")
                  alert("User does not exist")
                else if (result.data === "success") {
                    alert('Login Successfull')
                    navigate("/");
                }
                else if(result.data === "not success")
                  alert("Please enter correct password")
            })
            .catch(err => alert(err));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-fields">
                        <input type="email" placeholder="Enter Email" name='username' onChange={(e) => setUsername(e.target.value)} />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{marginRight:'20px'}}
                            />
                            <button
                                type="button"
                                className="password-toggle-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <img src={hide_eye} alt="" /> : <img src={eye} alt="" />}
                            </button>
                        </div>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
                <div className="login-forgot">
                    <p>Forgot your password?</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
