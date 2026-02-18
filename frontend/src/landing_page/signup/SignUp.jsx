import { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
      "https://zerodha-colne-zsx2.onrender.com/signup",
      {
        username: name,
        email,
        password,
      },
      { withCredentials: true }
    );

    alert(res.data.message); // Signup successful
   
   window.location.href = "zerodha-colne-dshboard.vercel.app/dashboard";
    
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="signup-container">
      <h2>Create your Zerodha account</h2>
      <p className="subtitle">Start investing in stocks & mutual funds</p>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Creating account..." : "Create account"}</button>
      </form>
      <p className="login-text">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
