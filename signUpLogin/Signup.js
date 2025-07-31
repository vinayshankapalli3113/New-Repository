import React, { useState } from "react";

function Signup({ onSignup, toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onSignup({ email });
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <span onClick={toggleForm}>Login here</span>
      </p>
    </div>
  );
}

export default Signup;
