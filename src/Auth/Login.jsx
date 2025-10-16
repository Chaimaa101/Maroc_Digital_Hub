import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/AuthSlice";
import { useForm } from "react-hook-form";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  console.log(user)
  const onSubmit = (data) => {
    dispatch(loginUser(data));
    console.log(data);
  };
  useEffect(() => {
    if (user) {
      if (user.role === "Admin") {
        navigate("/dashboard");
      } else if (user.role === "Startup") {
        navigate("/"); // home page
      } else {
        navigate("/"); // default route
      }
    }
  }, [user, navigate]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // 👈 Start invisible and slide down
      animate={{ opacity: 1, y: 0 }} // 👈 Fade in and mo ***ve to normal position
      exit={{ opacity: 0, y: -50 }} // 👈 Animate out when switching pages
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#bed3c3]  mt-24 rounded-2xl p-10 w-2xl m-auto "
    >
      <h2 className="text-3xl font-bold text-[#222e53] mb-2 text-center">
        Bienvenue
      </h2>
      <p className="text-[#3f5083] mb-6 text-center">
        Nouveau ici ?{" "}
        <Link to="/register" className="text-[#4b919e] hover:underline">
          Inscrivez-vous
        </Link>
      </p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: "l'email est requis",
          })}
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
        />
         {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        <input
          type="password"
          {...register("password", {
            required: "Le mot de passe est requis",
          })}
          placeholder="Mot de passe"
          className="w-full px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
        />
         {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#4b919e] rounded-xl text-white font-semibold transition duration-300"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-3">{error}</p>}
    </motion.div>
  );
}
