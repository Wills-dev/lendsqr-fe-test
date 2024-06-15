import React, { useState } from "react";

const PasswordInput: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input">
      <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        required
        placeholder="Password"
      />
      <button
        type="button"
        className="toggle-password"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;
