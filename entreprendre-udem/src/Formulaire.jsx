<div id='benevole'className="relative z-10 py-16 px-8 flex justify-center items-center min-h-[700px]">
        <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping shadow-md"></div>
        <div className="absolute -inset-2 bg-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse z-0"></div>
        <div className="relative z-10 max-w-2xl w-full bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold text-center text-blue-300">Devenir Bénévole</h2>
          <p className="text-center text-white/90">
            Rejoignez notre équipage et contribuez à des missions entrepreneuriales extraordinaires.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname" className="text-white/80">Prénom *</label>
                <input type="text" id="firstname" name="firstname" placeholder='Jean'
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"/>
              </div>
              <div>
                <label htmlFor="lastname" className="text-white/80">Nom *</label>
                <input type="text" id="lastname" name="lastname" placeholder='Dupont'
                  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"/>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-white/80">Email *</label>
              <input type="email" id="email" name="email" placeholder='votre.email@umontreal.ca'
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"/>
            </div>
            <div>
              <label htmlFor="program" className="text-white/80">Programme d'études</label>
              <input type="text" id="program" name="program" placeholder="Ex : Bac Informatique"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"/>
            </div>
            <div>
              <label htmlFor="message" className="text-white/80">Message</label>
              <textarea id="message" name="message" rows="4"
                placeholder='Pourquoi voulez-vous rejoindre la mission ?'
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition transform hover:scale-105">
              Envoyer la candidature
            </button>
          </form>
        </div>
      </div>