import { useAuth } from "../../hook/use_auth";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../utils/localStorage";
export default function RedirectIfLogin({ children }) {
  const { user } = useAuth();
  if (!getAccessToken()) return children;
  if (user) return <Navigate to="/" />;

  return children;
}

