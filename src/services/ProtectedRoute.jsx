// ✅ 1. We import the tools we need
import { Navigate } from "react-router-dom";   // To redirect the user
import { toast } from "react-toastify";        // To show pop-up messages
import { useSelector } from "react-redux";     // To get user info from Redux store
import { useEffect } from "react";             // To run code when user or roles change

/**
 * ProtectedRoute component
 * - children: the page you want to protect (for example: AdminPage)
 * - allowedRoles: list of roles that can access this page
 */
export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  // ✅ 2. Get the current user from Redux store
  const user = useSelector((state) => state.auth.user);
  // Example: user = { name: "Chaimaa", role: "admin" }

  // ✅ 3. This effect runs when the user or allowedRoles change
  useEffect(() => {
    // ❌ Case 1: user is not logged in
    if (!user) {
      toast.warning(" Veuillez vous connecter pour accéder à cette page");
    }

    // ❌ Case 2: user is logged in but doesn't have the right role
    if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      toast.error("Vous n'êtes pas autorisé à accéder à cette page");
    }
  }, [user, allowedRoles]); // Runs again when these values change

  // ✅ 4. If there is no user → redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ 5. If user is logged in but role is not allowed → redirect to home
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ 6. If everything is OK → show the protected page
  return children;
};
