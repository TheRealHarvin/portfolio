function Experience() {

  const cypherDigitalStack = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Ant Design",
  ]

  const dsseStack = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "SCSS",
  ]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-start flex-col w-3/6">
        <h2>Experience</h2>
      </div>
      <div className="w-3/6">
        <div className="flex pb-4">
          <div className="w-2/6"><p>February 2025 - August 2025</p></div>
          <div className="w-4/6">
            <header className="flex">
              <strong>Frontend Web Developer</strong>
              <p>Cypherdigital Inc.</p>
            </header>
            <p>Served as the sole frontend developer on QCE-Market, taking full ownership of the frontend side of the product. Built and maintained an interactive data table that allowed real-time editing with changes reflected directly in the backend. Integrated REST APIs and tested endpoints using Postman to ensure data accuracy before implementation. Handled bug fixes across Dev, UAT, and Production environments and was responsible for deploying production releases.</p>
            <a href="" className="pb-4"><strong>QCE-Market</strong></a>
            <div className="pt-4">
              {cypherDigitalStack.map((item, key) => {
                return (<span className="pr-4">
                  <span className="py-1 px-3 rounded-full text-center text-sm" style={{backgroundColor: "#04294C", color: "#fff"}} key={key}>
                  {item}
                </span>
                </span> )
              })}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/6">November 2022 - December 2024</div>
          <div className="w-4/6">
            <header className="flex">
              <strong>Frontend Web Developer</strong>
              <p>Dynamic Strategy Solutions Experts(DSSE)</p>
            </header>
            <p>Worked on a UI-heavy application focusing on pixel-perfect styling and REST API integrations. Handled bug fixes across FAT, UAT, and Production environments and was responsible for UAT deployments. Ensured consistent cross-browser compatibility maintaining functionality across both web and mobile browsers.</p>
            <div className="pt-4">
              {dsseStack.map((item, key) => {
                return (<span className="pr-4">
                  <span className="py-1 px-3 rounded-full text-center text-sm" style={{backgroundColor: "#04294C", color: "#fff"}} key={key}>
                  {item}
                </span>
                </span> )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;