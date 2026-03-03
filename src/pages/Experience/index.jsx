function Experience() {

  const experience = [
    {
      company: "Cypherdigital Inc.",
      role: "Frontend Web Developer",
      duration: "February 2025 - August 2025",
      description: "Served as the sole frontend developer on QCE-Market, taking full ownership of the frontend side of the product. Built and maintained an interactive data table that allowed real-time editing with changes reflected directly in the backend. Integrated REST APIs and tested endpoints using Postman to ensure data accuracy before implementation. Handled bug fixes across Dev, UAT, and Production environments and was responsible for deploying production releases.",
      projectName: "QCE-Market",
      projectLink: "https://emarket.quezoncity.gov.ph/",
      techStack: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Ant Design"],
    },
    {
      company: "Dynamic Strategy Solutions Experts(DSSE)",
      role: "Frontend Web Developer",
      duration: "November 2022 - December 2024",
      description: "Worked on a UI-heavy application focusing on pixel-perfect styling and REST API integrations. Handled bug fixes across FAT, UAT, and Production environments and was responsible for UAT deployments. Ensured consistent cross-browser compatibility maintaining functionality across both web and mobile browsers.",
      techStack: ["HTML & CSS", "JavaScript", "React", "SCSS"],
    },
  ]

  return (
    <div id="experience" className="flex flex-col justify-center items-center min-h-screen p-4 lg:p-0">
      <div className="flex flex-start flex-col lg:w-3/6 w-full md:p-0">
        <h2>Experience</h2>
      </div>
      <div className="w-full lg:w-3/6 lg:p-0">
        {experience.map((experience, key) => {
          return (
            <div className="flex flex-col lg:flex-row pb-4" key={key}>
              <div className="lg:w-2/6"><p>{experience.duration}</p></div>
              <div className="lg:w-4/6">
                <header className="flex">
                  <strong>{experience.role}</strong>
                  <p>{experience.company}</p>
                </header>
                <p>{experience.description}</p>
                {experience.projectLink && <a href={`${experience.projectLink}`} className="pb-4"><strong>{experience.projectName}</strong></a>}
                <div className="pt-4 flex flex-wrap gap-2">
                  {experience.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="py-1 px-3 rounded-full text-center text-xs sm:text-sm"
                      style={{backgroundColor: "#04294C", color: "#fff"}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Experience;