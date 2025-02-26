import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eye from "../assets/myimages/eye.png";
import hide_eye from "../assets/myimages/hide_eye.png";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  let u1 = {
    username: "", // Product title
    password: "", // Product Image
  };

  const [user, setUser] = useState(u1);

  async function handleSubmit(event) {
    event.preventDefault();
    //alert('Form Submitted')

    try {
      const response = await fetch("http://localhost:8086/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        //alert(data.sname + " " +" user registered successfully!");
        alert("User Registration successful!");
        navigate("/");
        console.log(data);
        //resetForm();
      } else {
        alert("Failed to Register User");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target; //name=title value =T
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <label htmlFor="username">User Email</label>
            <input
              type="email"
              name="username"
              id="username"
              onChange={handleChange}
              value={user.username}
            />

            <label htmlFor="password">Password</label>          
            <div className="password-container">  
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                value={user.password}
                style={{marginRight:'20px'}}
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={hide_eye} alt="Hide Password" />
                ) : (
                  <img src={eye} alt="Show Password" />
                )}
              </button>
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit" style={{marginRight:'20px'}}>Register</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
