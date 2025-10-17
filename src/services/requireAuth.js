import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const requireAuth = (user, action) => {
  if (!user) {
    toast.warning("Veuillez vous connecter à votre compte !");
    return;
  }
  action();
};

