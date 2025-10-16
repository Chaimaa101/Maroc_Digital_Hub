import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../store/AuthSlice";
import { useForm } from "react-hook-form";

export default function Register() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#bed3c3]  mt-24 rounded-2xl p-10 w-2xl m-auto "
    >
      <h2 className="text-3xl font-bold text-[#222e53] mb-2 text-center">
        Créer un compte
      </h2>
      <p className="text-[#3a4873]  mb-6 text-center">
        Vous avez déjà un compte ?{" "}
        <Link to="/login" className="text-[#4b919e]  hover:underline">
          Connectez-vous
        </Link>
      </p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3">
          <input
            type="text"
            {...register("prenom", {
              required: "Le prénom est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            placeholder="Prénom"
            className="w-1/2 px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
          />
          {errors.prenom && (
            <p className="text-red-500 text-sm mt-1">{errors.prenom.message}</p>
          )}
          <input
            type="text"
            {...register("nom", {
              required: "Le nom est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            placeholder="Nom"
            className="w-1/2 px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
          />
          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
          )}
        </div>

        <select
          {...register("role", {
            required: "La rôle est requise",
          })}
          className="w-full px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
        >
          <option value="Visiteur">Visiteur</option>
          <option value="Admin">Admin</option>
          <option value="Investisseur">Investisseur</option>
          <option value="Startup">Startup</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}

        <input
          type="email"
          {...register("email", {
            required: "L'email est requis",
            minLength: {
              value: 3,
              message: "L'email doit contenir au moins 3 caractères",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // ✅ regex pour valider un format d'email
              message: "Format d'email invalide",
            },
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
            minLength: {
              value: 6,
              message: "Le mot de passe doit contenir au moins 6 caractères",
            },
            pattern: {
              // value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
              message:
                "Le mot de passe doit contenir au moins une majuscule et un chiffre",
            },
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
          {loading ? "Inscription..." : "S'inscrire"}
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-3">{error}</p>}
    </motion.div>
  );
}
