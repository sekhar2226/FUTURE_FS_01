import { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
  "https://future-fs-01-ngpb.onrender.com/api/contact/",
  form
);

      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to send message.");
    }
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-5">Contact</h2>

      <div className="text-center mb-5">
        <h3 className="mb-3">Let's Connect</h3>

        <p className="fs-5">
          <FaEnvelope className="me-2 text-info" />
          sekharbasava26@gmail.com
        </p>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://github.com/sekhar2226"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={35} />
          </a>

          <a
            href="https://www.linkedin.com/in/sekhar-basava-206170330/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Write your message..."
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success px-4 py-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;