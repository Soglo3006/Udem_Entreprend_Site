import React, {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import {motion, AnimatePresence} from 'framer-motion';

function App() {
  const eventImages = [
    "/Photo_evenement/Udem_Entreprend/IMG_0022.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04397.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04318.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04457.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04489.webp"
  ];

  const membreEquipe = [
    {
      name: "Diana Haq",
      role: "Présidente",
      image: "/Membre photo 2024-2025/Diana.jpg",
      linkedin: "https://www.linkedin.com/in/diana-haq/"
    },
    {
      name: "Flora H.-L",
      role: "Vice-Présidente Éxécutive",
      image: "/Membre photo 2024-2025/Flora.jpg",
      linkedin: "https://www.linkedin.com/in/flora-h-l-01697a26b/"
    },
    {
      name: "Ibrahim",
      role: "Vice-Président Affaires Externes",
      image: "/Membre photo 2024-2025/Ibrahim.jpg",
      linkedin: "https://www.linkedin.com/in/ibrahim-achabab-62266a2a0/"
    },
    {
      name: "Arianne Ly",
      role: "Vice-Présidente Évenements",
      image: "/Membre photo 2024-2025/Araianne.jpg",
      linkedin: "https://www.linkedin.com/in/arianne-ly/"
    },
    {
      name: "Tamia Bomboh",
      role: "Vice-Présidente commandites",
      image: "/Membre photo 2024-2025/Tamia.jpg",
      linkedin: "https://www.linkedin.com/in/tamia-bomboh-2a071b28a/"
    },
    {
      name: "Malik Hareb",
      role: "Trésorier",
      image: "/Membre photo 2024-2025/Malik.jpg",
      linkedin: "https://www.linkedin.com/in/malikhar/"
    },
    {
      name: "Lola Marchand",
      role: "Vice-Présidente affaires internes",
      image: "/Membre photo 2024-2025/Lola.jpg",
      linkedin: "https://www.linkedin.com/in/lola-concetta-marchand-612433289/"
    },
    {
      name: "Taoudi Bensouda",
      role: "Responsable Tehno & Innovation",
      image: "/Membre photo 2024-2025/Taoudi.jpg",
      linkedin: "https://www.linkedin.com/in/taoudi-bensouda/"
    },
    {
      name: "Myriam Iben Chekroun",
      role: "Responsable Communication",
      image: "/Membre photo 2024-2025/Myriam.jpg",
      linkedin: "https://www.linkedin.com/in/miryam-iben-chekroun-382724336/"
    },
    {
      name: "Nour Eltaani",
      role: "Vice-Présidente Communication",
      image: "/Membre photo 2024-2025/Nour.jpg",
      linkedin: "https://www.linkedin.com/in/nour-eltaani-95bb761a7/"
    }
  ]

  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemberIndex(prevIndex => {
        let nextIndex = Math.floor(Math.random() * membreEquipe.length);
        while (nextIndex === prevIndex) {
          nextIndex = Math.floor(Math.random() * membreEquipe.length);
        }
        return nextIndex;
      });
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const currentMember = membreEquipe[currentMemberIndex];

  useEffect(() => {
  const canvas = document.getElementById("star-canvas");
  const ctx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  const stars = Array.from({ length: 1500 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    for (const star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const update = () => {
    for (const star of stars) {
      star.x += star.dx;
      star.y += star.dy;
      if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
      if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    }
  };

  const animate = () => {
    draw();
    update();
    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("resize", resize);
  };
}, []);




  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans w-full ">
      <header className="flex items-center justify-between px-6 py-4 bg-[#0c0c1e] shadow-md">
        <div className="text-xl font-bold text-blue-300">
          <span className="text-white">UdeM </span>Entreprend
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#Qui-sommes-nous" className="hover:text-blue-400 transition">Qui sommes-nous?</a>
          <a href="#equipe" className="hover:text-blue-400 transition">Équipes</a>
          <a href="#evenements" className="hover:text-blue-400 transition">Événements</a>
          <a href="#partenaire" className="hover:text-blue-400 transition">Partenaire</a>
          <a href="#benevole" className="hover:text-blue-400 transition">Bénévole</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </header>
      <div className="relative bg-gradient-to-b from-[#0c0c1e] to-transparent h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1450px] h-[550px] bg-blue-500 rounded-b-full blur-2xl opacity-30 z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
            Udem Entreprend
            <br />Faconnons ensemble l'avenir de l'entrepreneuriat universitaire
          </h1>
          <br /> 
          <a href="#communaute" className="relative inline-block px-6 py-2 rounded-full text-white font-medium
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
              hover:text-white transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105">
            Découvrir le club
          </a>
        </div>
      </div>
      <canvas id="star-canvas" className="absolute top-[100px] left-0 w-full h-[5200px] z-0 pointer-events-none" />
      <section id="communaute" className="w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl text-blue-300 font-semibold">
            Une communauté en action
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-6"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-2xl shadow-xl"
          >
            {eventImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Événement ${index + 1}`}
                  className="w-full h-[550px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
      <div id='Qui-sommes-nous' className='m-7 "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen p-8 mb-10"'>
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse"> Qui sommes-nous?</h1>
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">UdeM Entreprend est l'association étudiante dédiée à l'entrepreneuriat de l'Université de Montréal.
          Nous accompagnons les étudiants dans leur parcours entrepreneurial en offrant des ressources,
          des formations et un réseau solide pour transformer leurs idées en projets concrets.</p>
          </motion.div>
        <div className="absolute top-[1800px] left-0 w-[200px] h-[400px] bg-purple-600 opacity-25 blur-3xl z-0" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-10">
          <img
            src="/Photo_evenement/Udem_Entreprend/YZA04168.webp"
            alt="Mission background"
            className="absolute w-full h-full object-cover object-[0%_30%] blur-[1px] brightness-80"
            loading="lazy"/>
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-[2px] border border-white/20 p-8 rounded-xl text-center max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-200 mb-4">Notre Mission</h2>
              <p className="text-gray-200 text-lg">
                Promouvoir l'entrepreneuriat à travers l'inspiration, la formation et l'accompagnement des étudiants de l'UdeM.
              </p>
            </motion.div>
          </div>
            </motion.div>
                    <div className="absolute top-[2200px] right-0 w-[200px] h-[400px] bg-blue-500 opacity-25 blur-3xl z-0" />
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          <img
            loading="lazy"
            src="/Photo_evenement/Udem_Entreprend/2019.webp"
            alt="Mission background"
            className="absolute w-full h-full object-cover object-[0%_20%] blur-[1px] brightness-80"/>
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-[2px] border border-white/20 p-8 rounded-xl text-center max-w-xl">
              <h2 className="text-3xl font-semibold text-blue-200 mb-4">Notre Vision</h2>
              <p className="text-gray-200 text-lg">
                Créer un écosystème entrepreneurial dynamique au sein de l'Université de Montréal,
                où chaque étudiant peut développer son potentiel entrepreneurial et contribuer à l'innovation de demain.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-[450px] flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl text-center max-w-2xl shadow-xl">
              <h1 className="text-4xl font-semibold text-blue-200 mb-4">Notre Histoire</h1>
              <p className="text-gray-300 text-xl">
                Fondée par des étudiants passionnés d'entrepreneuriat, UdeM Entreprend a vu le jour avec l'ambition de créer une communauté entrepreneuriale forte à l'Université de Montréal.
                Depuis nos débuts, nous avons accompagné des centaines d'étudiants dans la réalisation de leurs projets, organisant des événements inspirants et créant des liens durables avec
                l'écosystème entrepreneurial montréalais.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-[450px]">
              <Swiper 
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="h-[450px] flex items-center justify-center w-full rounded-xl overflow-hidden shadow-xl">
                <SwiperSlide>
                  <img
                    src="/Photo_evenement/Udem_Entreprend/equipe2019.webp"
                    alt="Vision de l'association"
                    loading="lazy"
                    className="w-full h-[450px] object-cover object-[0%_20%] rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/Membre photo 2023-2024/Photo Équipe.webp"
                    alt="Vision de l'association"
                    loading="lazy"
                    className="w-full h-[450px] object-cover object-[0%_20%] rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/Membre photo 2024-2025/Photo Équipe.jpg"
                    alt="Vision de l'association"
                    loading="lazy"
                    className="w-full h-[450px] object-cover rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/Photo_evenement/1744069996453.webp"
                    alt="Vision de l'association"
                    loading="lazy"
                    className="w-full h-[450px] object-cover rounded-lg"/>
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <div id='equipe' className="flex flex-col md:flex-row justify-between items-center p-5 shadow-lg gap-10 bg-[#0c0c1e] mt-30 relative z-10">
          <div className="md:w-1/2 text-left ml-15">
            <h1 className='text-3xl font-semibold text-blue-300 mb-6 max-w-xl'>Une équipe engagée pour stimuler l'entrepreneuriat étudiant</h1>
            <p className='mb-6 text-base leading-relaxed'>Notre équipe est composée d’étudiants passionnés qui accompagnent et inspirent la relève entrepreneuriale à l’Université de Montréal. Ensemble, nous bâtissons un écosystème dynamique et inclusif.</p>
            <a href='#Équipe' className="relative inline-block px-6 py-2 rounded-full text-white font-medium
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
              hover:text-white transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105">
              Voir les membres
            </a>
          </div>
          <div className="md:w-1/3 rounded-xl shadow-md p-4 text-center mr-15 relative min-h-[550px] md:min-h-[700px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMember.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full top-0 left-0">
                <img
                loading="lazy"
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-[400px] md:h-[500px]  rounded-xl object-cover mt-15"/>
                <h2 className="text-lg font-semibold">{currentMember.name}</h2>
                <p className="text-sm mb-2">{currentMember.role}</p>
                <a
                  href={currentMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline">
                  LinkedIn
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div id='evenements' className="p-10 items-center text-center">
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 } }
        viewport={{ once: true }}>
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse">Nos Évenements</h1>
        <p className="text-white mb-6">Découvrez les événements à venir organisés par UdeM Entreprend.</p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}>
        <a href='Événements' className="relative inline-block px-6 py-2 rounded-full text-white font-medium
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
            hover:text-white transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105">
          Voir les événements
        </a>
        </motion.div>
      </div>
      <div id='partenaire' className='p-10 bg-[#0c0c1e] items-center text-center relative z-10'>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse">Nos Partenaires</h1>
        <div className="flex justify-center items-center gap-4">
          <img src="/Partenaires/Millénium2.png" alt="millénium" className='m-4 filter grayscale hover:filter-none transition duration-500' loading="lazy"/>
          <img src="/Partenaires/logo-edc.svg" alt="edc" className='w-60 h-60 m-4 filter grayscale hover:grayscale-0 hover:invert transition duration-500 ' loading="lazy"/>
          <img src="/Partenaires/RBC.svg" alt="RBC" className='w-60 h-60 filter grayscale hover:filter-none transition duration-500' loading="lazy"/>
        </div>
      </div>            
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
      <footer  id='contact' className="bg-[#0c0c1e] text-white px-6 pt-10">
        <div className="flex flex-col md:flex-row justify-center items-start gap-16 text-center md:text-left">
          <div>
            <h1 className="mb-2 text-lg font-semibold">Contact</h1>
            <a href="mailto:info@udementreprend.ca" className="hover:underline">
              info@udementreprend.ca
            </a>
          </div>
          <div>
            <h1 className="mb-2 text-lg font-semibold">Suivez-nous</h1>
            <div className="flex flex-col items-center md:items-start space-y-1">
              <a href="https://www.facebook.com/entreprend.umontreal?locale=fr_CA" target="_blank" rel="noopener noreferrer" className="hover:underline"><img src="/Logo Club/Facebook.png" alt="Facebook" className='w-6 h-6 inline-block mr-1' loading="lazy"/>Facebook</a>
              <a href="https://www.instagram.com/udem.entreprend/" target="_blank" rel="noopener noreferrer" className="hover:underline"><img src="/Logo Club/Insta.png" alt="Instagram" className='w-6 h-6 inline-block mr-1' loading="lazy"/>Instagram</a>
              <a href="https://www.linkedin.com/company/udem-entreprend/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className="hover:underline"><img src="/Logo Club/Linkedin.png" alt="LinkedIn" className='w-6 h-6 inline-block mr-1' loading="lazy"/>LinkedIn</a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white/20" />
        <div className="text-center pb-6 text-sm">
          &copy; {new Date().getFullYear()} UdeM Entreprend. Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}

export default App