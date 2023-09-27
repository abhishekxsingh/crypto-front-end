import axios from 'axios';
import React from 'react';
import "./index.scss";

const Signup = () => {

    const makeRegistration = async (evt) => {
        if ( evt && evt.preventDefault) {
            evt.preventDefault()   
        }

        const formData = new FormData (evt.target);

        const data = {}
          for (const [key, value] of formData) {
            console.log(key, value)
            data[key] = value;
          }
          if (data) {
            if(data.password===data.confirmPassword) {
                delete data.confirmPassword
               const result = await axios.post("http://localhost:3001/registration", data)
               if(result) {
                   window.location.href ="./login"
                }
            }
          }
    }
    return (
        <div className="login-box">
            <h2>Welcome back</h2>
            <p>Enter your details</p>
            <form onSubmit={makeRegistration}>
                <div className="form-group">
                    <label for="UserID">UserID</label>
                    <i className="fa-solid fa-user"></i>
                    <input type="UserID" id="UserID" placeholder="UserID" name="userName" required />
                </div>
                <div className="form-group">
                    <label for="name">Name</label>
                    <i className="fa-solid fa-user"></i>
                    <input type="name" id="name" placeholder="name" name="name" required />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" id="email" placeholder="email" name="email" required />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder="Your password" name="password" required />
                </div>
                <div className="form-group">
                    <label for="confirmpassword">confirmPassword</label>
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" id="confirmpassword"  placeholder="Your confirmpassword" name="confirmPassword" required />
                </div>
                <div>
                    <button className="btn" type ='submit'>Log In</button>
                </div>
            </form>
            <div>
                <a href="/" className="forgot">
                    Forgot Your Password?
                </a>
            </div>
        </div>
    );
}

export default Signup;
