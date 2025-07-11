import React from "react";
import { Link } from "react-router-dom";

function EvenementsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white text-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-300 mb-6 animate-pulse">
        Page Événements
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
        Cette page est actuellement en cours de développement. Revenez bientôt
        pour découvrir tous nos événements passionnants!
      </p>
      <Link
        to="/home"
        className="relative inline-block px-6 py-3 rounded-full text-white font-medium
          border border-white/30 bg-white/10 backdrop-blur-md
          hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
          hover:text-white transition-all duration-300
          hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default EvenementsPage;
