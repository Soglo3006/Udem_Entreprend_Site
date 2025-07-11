import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function BenevolePage() {
  const [InfoFormulaire,SetInfoFormulaire] = useState({
    firstname: "",
    lastname: "",
    email: "",
    programme: "",
    message: ""
  })

  const [errors,Seterrors] = useState({})
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (InfoFormulaire.firstname.trim()===""){
      newErrors.firstname = "Prénom requis !";
    }
    if (InfoFormulaire.lastname.trim()===""){
      newErrors.lastname = "Nom requis !";
    }
    if (InfoFormulaire.email.trim()===""){
      newErrors.email = "Email requis !";
    }

    if (Object.keys(newErrors).length > 0) {
      Seterrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/benevole", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(InfoFormulaire),
      });

      if (!response.ok) {
      alert("Erreur côté serveur !");
      return;
    }
      
      alert("Candidature envoyée avec succès !");
      SetInfoFormulaire({
        firstname: "",
        lastname: "",
        email: "",
        programme: "",
        message: ""
      });
      navigate("/home",{
        state:{ message: "Merci d'avoir completer le formulaire"}
      });
    } catch (error) {
      alert(error.message);
    }
  }

  
  return (
    <div className="relative bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans overflow-hidden">
      <div className="absolute top-6 left-6 z-20">
        <Link to="/home" className="text-white text-2xl">
          ←
        </Link>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(400)].map((_, i) => {
          const size = Math.random() * 1.5 + 0.5;
          const duration = Math.random() * 4 + 2;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animation: `twinkle ${duration}s ease-in-out infinite, float ${duration + 2}s ease-in-out infinite alternate`
              }}
            ></div>
          );
        })}
      </div>
      
      <div className="relative z-10 py-10 px-8 flex justify-center items-center min-h-screen">
        <div className="absolute -inset-2 bg-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse z-0"></div>

        <div className="relative z-10 max-w-2xl w-full bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold text-center text-blue-300">
            Devenir Bénévole
          </h2>
          <p className="text-center text-white/90">
            Rejoignez notre équipage et contribuez à des missions entrepreneuriales extraordinaires.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname" className="text-white/80">
                  Prénom *
                </label>
                <input
                  type="text"
                  value={InfoFormulaire.firstname}
                  onChange={(e) => SetInfoFormulaire({...InfoFormulaire, firstname: e.target.value})}
                  name="firstname"
                  placeholder="Alexandre"
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                />
                {errors.firstname && <p className="text-red-400">{errors.firstname}</p>}
              </div>
              <div>
                <label htmlFor="lastname" className="text-white/80">
                  Nom *
                </label>
                <input
                  type="text"
                  value={InfoFormulaire.lastname}
                  onChange={(e)=> SetInfoFormulaire({...InfoFormulaire, lastname:e.target.value})}
                  name="lastname"
                  placeholder="Booh Louha"
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                />
                {errors.lastname && <p className="text-red-400">{errors.lastname}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-white/80">
                Email *
              </label>
              <input
                type="email"
                value={InfoFormulaire.email}
                onChange={(e)=>SetInfoFormulaire({...InfoFormulaire, email:e.target.value})}
                name="email"
                placeholder="votre.email@umontreal.ca"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              />
              {errors.email && <p className="text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="program" className="text-white/80">
                Programme d'études
              </label>
              <input
                type="text"
                value={InfoFormulaire.programme}
                onChange={(e) => SetInfoFormulaire({...InfoFormulaire,programme:e.target.value})}
                name="programme"
                placeholder="Ex : Bac Informatique"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white/80">
                Message
              </label>
              <textarea
                value={InfoFormulaire.message}
                onChange={(e) => SetInfoFormulaire({...InfoFormulaire,message:e.target.value})}
                name="message"
                rows="4"
                placeholder="Pourquoi voulez-vous rejoindre la mission ?"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition transform hover:scale-105"
            >
              Envoyer la candidature
            </button>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default BenevolePage;
