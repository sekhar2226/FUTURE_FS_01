import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container text-center">

        <img
          src={profile}
          alt="Basava Yagna Sekhar"
          className="profile-img"
        />

        <h1>Basava Yagna Sekhar</h1>

        <h4>
          Engineering Student | Full Stack Developer
        </h4>

        <p>
          Passionate about building responsive web applications
          using React, Django, Flask and SQL.
        </p>

        <p className="hero-tech">
          React • Django • Flask • SQL • JavaScript • Python
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            download
            className="btn btn-resume"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/sekhar2226"
            target="_blank"
            rel="noreferrer"
            className="btn btn-github"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sekhar-basava-206170330/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-linkedin"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;