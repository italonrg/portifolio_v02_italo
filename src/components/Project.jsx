import React from "react";


const Project = () => {
  const projects = [
    {
      img: "/src/assets/images/pianoSimulator.png",
      name: "Piano Virtual",
      github_link: "https://github.com/italonrg",
      live_link: "https://italonrg.github.io/Piano-Virtual-html_css_Js-/",
    },
    {
      img: "/src/assets/images/Em_Brevex.png",
      name: "em-breve##",
      github_link: "https://github.com/italonrg",
      live_link: "https://italonrg.github.io/Piano-Virtual-html_css_Js-/",
    },
    {
      img: "/src/assets/images/Em_Brevex.png",
      name: "em-breve##",
      github_link: "https://github.com/italonrg",
      live_link: "https://italonrg.github.io/Piano-Virtual-html_css_Js-/",
    },
    {
      img: "/src/assets/images/Em_Brevex.png",
      name: "em-breve##",
      github_link: "https://github.com/italonrg",
      live_link: "https://italonrg.github.io/Piano-Virtual-html_css_Js-/",
    },
    {
      img: "/src/assets/images/Em_Brevex.png",
      name: "em-brevexx",
      github_link: "https://github.com/italonrg",
      live_link: "https://italonrg.github.io/Piano-Virtual-html_css_Js-/",
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
      {projects.map((project_info, i) => (
        <div className="h-fit w-full p-4 bg-slate-700 rounded-xl" key={i}>
          <img src={project_info.img} alt="" className="rounded-lg" />
          <h3 className="text-xl my-4">{project_info.name}</h3>
          <div className="flex gap-3">
            <a
              className="text-cyan-600"
              href={project_info.live_link}
            >
              Live Demo
            </a>
            <a
              className="text-cyan-600"
              href={project_info.github_link}
            >
              Projeto no Github
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;


