import { Element } from "react-scroll";
import { projectsDetail } from "../assets/files/projectsDetail";
import { SiGithub } from "react-icons/si";

function Projects() {
  return (
    <Element name="projects" className="py-5 px-6 md:py-10 md:px-12">
      <h1 className="text-4xl font-bold text-center text-sky-600">Projects</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {projectsDetail.map((project) => (
          <div
            className="flex flex-col justify-center items-start bg-slate-500/20 rounded-xl overflow-hidden hover:border-2 h-96 border-transparent hover:border-sky-600 transition-all duration-300 ease-in-out hover:scale-105 shadow-sm shadow-gray-600"
            key={project.name}
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-56 w-full rounded-md object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-sm text-slate-300 text-justify">
                {project.description}
              </p>
              <a
                href={project.url}
                className="ml-auto text-slate-300 hover:text-white flex items-center space-x-2 mt-2 border border-slate-300 hover:border-white py-2 px-4 rounded cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="text-2xl" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </Element>
  );
}

export default Projects;
