
import { experience } from "../../data/experience";

function CurriculumVitaePage() {
  const sectionDivider = <div style={{ height: "2px", width: "100%", backgroundColor: "#2D3748", margin: "8px 0 12px 0" }}></div>;

  return (
    <div id="curriculum-vitae" className="w-full max-w-4xl mx-auto p-8 pdf-page" style={{ backgroundColor: "#fff" }}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold tracking-widest mb-2">HARVIN A. GABRIEL</h1>
        <p className="text-lg font-semibold mb-3">Frontend Web Developer</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>0927-224-5756</span>
          <span>•</span>
          <span>harvingabriel12@gmail</span>
          <span>•</span>
          <span>Bacoor City, Cavite</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h5 className="text-sm font-bold uppercase tracking-wide mb-2">Professional Summary</h5>
        {sectionDivider}
        <p className="text-sm leading-relaxed text-gray-700">
          A Front End Web Developer with more than 2 years of experience building clean, functional web interfaces. I specialize in UI development and REST API integration, turning designs into responsive, user-friendly applications. I pay close attention to detail in everything I build from pixel-perfect layouts to smooth API interactions. I work well in team environments and take ownership of my part in the product. Currently open to new opportunities where I can contribute, grow, and build things that matter.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h5 className="text-sm font-bold uppercase tracking-wide mb-2">Work Experience</h5>
        {sectionDivider}
        {experience.map((exp, key) => (
          <div key={key} className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <strong className="text-sm">{exp.role}</strong>
            </div>
            <div className="flex justify-between items-start mb-3">
              <div className="text-sm">
                <strong>{exp.company}</strong>, {exp.location}
              </div>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <ul className="text-sm ml-4 space-y-1">
              {exp.responsibilites.map((responsibility, idx) => (
                <li key={idx} className="list-disc text-gray-700">{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h5 className="text-sm font-bold uppercase tracking-wide mb-2">Education</h5>
        {sectionDivider}
        <div className="flex justify-between items-start mb-1">
          <strong className="text-sm">Bachelors of Science in Computer Engineering</strong>
          <span className="text-sm text-gray-600">October 2022</span>
        </div>
        <p className="text-sm text-gray-700">AMA Computer College, Las Pinas City</p>
      </section>

      {/* Skills */}
      <section>
        <h5 className="text-sm font-bold uppercase tracking-wide mb-2">Skills</h5>
        {sectionDivider}
        <ul className="text-sm space-y-2">
          <li>
            <strong>Technical Skills:</strong> <span className="text-gray-700">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Responsive Design</span>
          </li>
          <li>
            <strong>Tools:</strong> <span className="text-gray-700">Git, REST APIs, Responsive Design</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CurriculumVitaePage;