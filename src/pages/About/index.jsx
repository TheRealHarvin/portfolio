function AboutPage() {
  return (
    <div id="about" className="flex flex-col justify-center items-center w-full p-4 lg:p-0 website-content" style={{minHeight: "50vh"}}>
      <div className="flex flex-start flex-col lg:w-3/6 w-full">
      <div className="pb-4">
        <span className="text-3xl lg:text-4xl font-bold">Hey I'm <strong>Harvin</strong></span>
      </div>
      <div className="text-sm sm:text-base lg:text-base space-y-4">
        <p>A <strong>Frontend Web Developer</strong> with more than 2 years of experience building clean, functional web interfaces. I specialize in UI development and REST API integration, turning designs into responsive, user-friendly applications.</p>
        <p>I pay close attention to detail in everything I build — from pixel-perfect layouts to smooth API interactions. I work well in team environments and take ownership of my part in the product.</p>
        <p>Currently open to new opportunities where I can contribute, grow, and build things that matter.</p>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;