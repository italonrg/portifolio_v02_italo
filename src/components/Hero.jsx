import React from "react";
import hero from '../assets/images/minhaFoto03.png';


const Hero = () => {
  const social_media = ['logo-instagram', 'logo-whatsapp', 'logo-linkedin', 'logo-github'];

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      
      <div>
        <img src= {hero} alt="" className=""  />
      </div>

      <div className="flex-1">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-cyan-600 md:text-6xl text-5xl">Oi!<br /></span>
          Meu nome é <span>Ítalo Nascimento</span>
        </h1>
        <h4 className="text-xl mt-4 font-bold text-white">Desenvolvedor Back-end</h4>
        <button className="btn-primary mt-8 color bg-cyan-600">Contato</button>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center "></div>
        <div>
          {social_media?.map((icon) => (
            <div key={icon} className="text-white hover:text-cyan-600 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 mt-2">
              <ion-icon name={icon}></ion-icon>  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
