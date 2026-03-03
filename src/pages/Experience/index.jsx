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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-start flex-col w-3/6">
        <h2>Experience</h2>
      </div>
      <div className="w-3/6">
        
        {experience.map((experience, key) => {
          return (
            <div className="flex pb-4" key={key}>
              <div className="w-2/6"><p>{experience.duration}</p></div>
              <div className="w-4/6">
                <header className="flex">
                  <strong>{experience.role}</strong>
                </header>
                <p>{experience.description}</p>
                {experience.projectLink && <a href={`${experience.projectLink}`} className="pb-4"><strong>{experience.projectName}</strong></a>}
                <div className="pt-4">
                  {experience.techStack.map((tech, index) => (
                    <span className="pr-4" key={index}>
                      <span className="py-1 px-3 rounded-full text-center text-sm" style={{backgroundColor: "#04294C", color: "#fff"}}>
                        {tech}
                      </span>
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