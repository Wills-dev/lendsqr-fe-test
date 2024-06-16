import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";

import { Spin } from "antd";
import { Toaster } from "react-hot-toast";

import { useLogin } from "@/hooks/useLogin";

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { handleChange, handleSubmit, loading, loginDetails } = useLogin();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <Toaster />
      <div className="left-container">
        <div className="logo-wrapper">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
        </div>
        <div className="empty-state">
          <img src="/assets/emptyState.svg" alt="Image" className="image" />
        </div>
      </div>
      <div className="right-container">
        <div className="logo-wrapper">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
        </div>
        <div className="right-wrapper">
          <div className="welcome-message">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="email"
                value={loginDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <div className="password-input">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </span>
              </div>
            </div>
            <Link to="/">Forgot PASSWORD?</Link>
            {!loading ? (
              <button type="submit">LOG IN</button>
            ) : (
              <button>
                <Spin />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
