import { useEffect, useState } from "react";
import API from "../api";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        await API.get("/api/checkauth");
        setIsAuth(true);
      } catch {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  if (loading) return <p>Checking authentication...</p>;

  return isAuth ? children : null;
};

export default ProtectedRoute;