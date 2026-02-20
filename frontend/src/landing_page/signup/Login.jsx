import { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
      "https://zerodha-colne-zsx2.onrender.com/api/users/login",
      { username, password }
    );

    // ✅ Save JWT token
    localStorage.setItem("token", res.data.token);

    // ✅ Redirect after saving
    window.location.href =
      "https://zerodha-colne-dshboard.vercel.app/dashboard";

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="signup-container">
      <h2>Login to your account</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      <p className="login-text">Create an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
