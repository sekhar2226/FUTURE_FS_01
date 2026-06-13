function Certifications() {
  const certifications = [
    {
      title: "Agentic AI Course",
      issuer: "GeeksforGeeks",
    },
    {
      title: "Building AI Agents with ADK",
      issuer: "GeeksforGeeks",
    },
    {
      title: "Full Stack Web Development Internship",
      issuer: "Future Interns",
    }
  ];

  return (
    <section id="certifications" className="container py-5">
      <h2>Certifications</h2>

      <div className="row">
        {certifications.map((cert, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card p-4 text-center">
              <h5>{cert.title}</h5>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;