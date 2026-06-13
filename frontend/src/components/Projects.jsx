function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React."
    },
    {
      title: "Weather App",
      desc: "Displays real-time weather data."
    },
    {
      title: "Student Management System",
      desc: "Manage student records using Django."
    }
  ];

  return (
    <section id="projects" className="container py-5">
      <h2>Projects</h2>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.title}>
            <div className="card p-3">
              <h5>{project.title}</h5>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;