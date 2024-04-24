import React from 'react';


const Project = () => {



  const projects = [
    {
      img: "../assets/images/pianoSimualtor.png",
      name: "Simulador de Piano",
      description: "Um jogo de Piano feito com Js e HTML e CSS",
    },
    {
      img: "../assets/images/Em_Brevex.png",
      name: "Em Breve",
      description: "Um novo e interesante projeto está por vir",
    },
    {
      img: "../assets/images/Em_Brevex.png",
      name: "Em Breve",
      description: "Um novo e interesante projeto está por vir",
    },
    {
      img: "../assets/images/Em_Brevex.png",
      name: "Em Breve",
      description: "Um novo e interesante projeto está por vir",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-6xl font-semibold">
          Meus <span className="text-cyan-600">Projetos</span>
        </h3>
        <p className="text-cyan-700 mt-3 text-lg">Confira!!!</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="card bg-lightslategray rounded-lg overflow-hidden">
              <img src={project.img} alt={project.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl mb-2">{project.name}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
