import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#ce6a6c] via-[#eaada2] to-[#bed3c3]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl bg-[#222e53] rounded-2xl shadow-2xl overflow-hidden ">
        {/* Form */}
        <div className="w-full p-10">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            {isLogin ? "Bienvenue" : "Créer un compte"}
          </h2>
          <p className="text-gray-300 mb-6 text-center">
            {isLogin ? (
              <>
                Nouveau ici ?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-[#4b919e] hover:underline"
                >
                  Inscrivez-vous
                </button>
              </>
            ) : (
              <>
                Vous avez déjà un compte ?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-[#4b919e] hover:underline"
                >
                  Connectez-vous
                </button>
              </>
            )}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-1/2 px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-1/2 px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
                />
              </div>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
            />
            <select
              type="role"
              placeholder="role"
              className="w-full px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
            >
              <option value="Admin">Admin</option>
              <option value="Investisseur">Investisseur</option>
              <option value="Startup">Startup</option>
              <option value="Visiteur">Visiteur</option>
            </select>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-3 rounded-xl bg-white text-[#222e53] border border-[#4b919e] focus:border-[#ce6a6c] focus:ring-1 focus:ring-[#ce6a6c] outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#4b919e] hover:bg-[#ce6a6c] rounded-xl text-white font-semibold transition duration-300"
            >
              {isLogin ? "Se connecter" : "Créer un compte"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
