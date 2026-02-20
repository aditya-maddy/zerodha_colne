import { useState } from "react";
import api from "../api"; // import the api instance
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
      const res = await api.post("/api/users/signup", {
        username: name,
        email,
        password,
      });

      // Save JWT token
      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard
      window.location.href = "https://zerodha-colne-dshboard.vercel.app";

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create your Zerodha account</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Creating account..." : "Create account"}</button>
      </form>
    </div>
  );
};

export default Signup;