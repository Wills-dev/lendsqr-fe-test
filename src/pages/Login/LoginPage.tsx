import React from "react";
import "./LoginPage.scss";

import { Link } from "react-router-dom";

import PasswordInput from "@/components/PasswordInput";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
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
          <form className="login-form">
            <div className="input-container">
              <input
                type="email"
                id="email"
                required
                placeholder="Email"
                className="email"
              />
            </div>
            <div className="input-container">
              <PasswordInput />
            </div>
            <Link to="/">Forgot PASSWORD?</Link>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
