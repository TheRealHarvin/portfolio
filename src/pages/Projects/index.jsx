import { projects } from "../../data/projects";

function ProjectsPage() {
  return (
    <div id="projects" className="flex flex-col justify-center lg:items-center p-4 lg:p-0 website-content" style={{ minHeight: "50vh" }}>
      <div className="flex flex-start flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 pb-4">Projects</h2>
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project, key) => (
            <div onClick={project.link ? () => window.open(project.link, "_blank") : null} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg border hover:shadow-lg transition-shadow" style={{ borderColor: "#ebeef3", backgroundColor: "#faf9f9" }} key={key}>
              <img
                className="w-full sm:w-48 md:w-56 lg:w-64 h-auto rounded-lg lg:object-cover object-contain"
                src={project.preview}
                alt={project.title}
              />
              <div className="flex flex-col justify-start flex-1">
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed">{project.summary}</p>
                <div className="pt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span className="py-1 px-3 rounded-full text-center text-xs sm:text-sm" key={index} style={{backgroundColor: "#3b4d69", color: "#faf9f9"}}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;