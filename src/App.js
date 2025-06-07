import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import validator from 'validator';
import "./App.css";

const projects = [
  {
    title: "iNoteBook",
    link: "#",
    image: "/projects/iNoteBook/iNoteBook.png",
    description: "Full-stack note-taking app with create/edit/delete features and user authentication.",
    tech: "React, Node.js, Express, MongoDB, Bootstrap"
  },
  {
    title: "To Do App",
    link: "#",
    image: "/projects/ToDoApp/ToDoApp.png",
    description: "Task manager using AngularJS with features like add/edit/delete, mark as important, complete tasks.",
    tech: "Angular, TypeScript, Tailwind CSS"
  },
  {
    title: "News Info",
    link: "#",
    image: "/projects/NewsInfo/NewsInfo.png",
    description: "News feed app with real-time category-based news, infinite scroll, and external linking.",
    tech: "React, Bootstrap"
  }
];

const certifications = [
  {
    title: "Mastering JavaScript Fundamentals",
    image: "/certificates/js-cert.png",
  },
  {
    title: "SQL: Basic to Advanced",
    image: "/certificates/sql-cert.png",
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({ success: false, message: '' });

  const handleCardClick = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      if (!validateEmail(form.email)) {
        console.log("inside validateEmail")
        setStatus({ success: false, message: "Please enter a valid email address." });
        return;
      }

      if (!validator.isEmail(form.email)) {
        console.log("inside validator")
        setStatus({ success: false, message: "Please enter a valid email address." });
        return;
      }

      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Failed to send message!" });
    }
    setButtonText("Send Message");
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", success: false });
      }, 10000); // 10 seconds

      return () => clearTimeout(timer); // Clean up on unmount or status change
    }
  }, [status.message]);

  return (
    <div className="app-container">
      <header>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="intro-section"
      >
        <h1>Kaushik Mahadev Bharshing</h1>
        <h2>Software Developer</h2>
        <p>
          Dedicated and proactive software engineer with a passion for continuous learning and professional growth. With a strong
          work ethic and a commitment to excellence, thrives in dynamic environment where innovation and problem-solving are valued.
        </p>
        <div className="icon-links">
          <a href="https://github.com/kaushik0410/" target="_blank" rel="noreferrer" className="icon-btn">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/kaushik-bharshing/" target="_blank" rel="noreferrer" className="icon-btn">
            <FaLinkedin size={30} />
          </a>
          <a href="/resumes/Kaushik_Bharshing_SE_Resume.pdf" download="Kaushik_Resume.pdf" className="resume-link">
            <FaDownload /> Resume
          </a>
        </div>
      </motion.section>

      <section id="education" className="content-section">
        <h3>Education</h3>
        <div className="education-list">
          <div className="education-card">
            <h4>Bachelor of Engineering in Computer Engineering</h4>
            <p>St. John College of Engineering and Technology, Mumbai University (2018–2022)</p>
            <p><strong>CGPA:</strong> 8.64/10</p>
          </div>
          <div className="education-card">
            <h4>12th (HSC)</h4>
            <p>Mithibai College, Mumbai University (2016–2018)</p>
            <p><strong>Percentage:</strong> 69.85%</p>
          </div>
          <div className="education-card">
            <h4>10th (SSC)</h4>
            <p>The Saraswati Vidyalaya (2016)</p>
            <p><strong>Percentage:</strong> 90.40%</p>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section">
        <h3>Skills</h3>
        <div className="skills-category">
          <h4>Frontend:</h4>
          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>AngularJS</span>
            <span>jQuery</span>
            <span>AJAX</span>
          </div>
        </div>

        <div className="skills-category">
          <h4>Backend:</h4>
          <div className="skills-list">
            <span>Java</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>JSP</span>
            <span>Servlets</span>
          </div>
        </div>

        <div className="skills-category">
          <h4>Frameworks:</h4>
          <div className="skills-list">
            <span>Spring Core</span>
            <span>Spring MVC</span>
            <span>Spring Boot</span>
            <span>Spring JPA</span>
            <span>Spring AOP</span>
            <span>Spring Cloud</span>
            <span>Spring Hibernate</span>
            <span>Microservices</span>
          </div>
        </div>

        <div className="skills-category">
          <h4>Database:</h4>
          <div className="skills-list">
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="skills-category">
          <h4>Web Dev:</h4>
          <div className="skills-list">
            <span>MERN</span>
            <span>Java Spring Stack</span>
            <span>RESTful APIs</span>
            <span>MVC Architecture</span>
          </div>
        </div>

        <div className="skills-category">
          <h4>Tools:</h4>
          <div className="skills-list">
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>
      </section>

      <section id="certifications" className="content-section">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((cert, idx) => (
            <li key={idx} onClick={() => setSelectedCert(cert)}>
              {cert.title}
            </li>
          ))}
        </ul>
      </section>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content-cert" onClick={(e) => e.stopPropagation()}>
            <h4>{selectedCert.title}</h4>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <button onClick={() => setSelectedCert(null)}>Close</button>
          </div>
        </div>
      )}

      <section id="experience" className="content-section">
        <h3>Experience</h3>
        <div className="experience-card">
          <h4>
            <span className="role">Software Engineer</span> –
            <span className="company"> In-Solutions Global Ltd</span>,
            <span className="location"> Maharashtra, India</span>
          </h4>
          <p className="duration">June 2022 – April 2024</p>
          <ul>
            <li>
              Developed and maintained modules for file processing, complaint settlement, and automated task execution using Java, PL/SQL, and Servlets.
            </li>
            <li>
              Created Control-M scripts to process files using bash scripts, reducing manual intervention and improving system efficiency.
            </li>
            <li>
              Built an Auto Mail Scheduler module to trigger automated emails based on specific user actions, improving communication flow.
            </li>
            <li>
              Designed and implemented the Online Dispute Registration module to handle multi-file uploads and REST API integration.
            </li>
            <li>
              Developed SD Mapper for front-end configuration using JSP, jQuery, and Ajax.
            </li>
            <li>
              Built an NFS Dispute File Processing module to streamline dispute workflows and reduce errors.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="content-section projects-grid">
        <h3>Projects</h3>
        <div className="grid-container">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx} onClick={() => handleCardClick(proj)}>
              <h4>
                {proj.title}{' '}
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <FaGithub size={30} />
                </a>
              </h4>
              <p>{proj.description}</p>
              <p><strong>Tech Stack:</strong> {proj.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content-project" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p><strong>Description: </strong>{selectedProject.description}</p>
            <p>
              <strong>Tech Stack:</strong> {selectedProject.tech}
            </p>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
            )}
            <div className="button-link-container">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="modal-link"
              >
                <FaGithub size={30} /> ↗
              </a>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">👤 Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label htmlFor="email">📧 Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="yourgmail@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label htmlFor="subject">📝 Subject</label>
          <input
            type="text"
            name="_subject"
            id="subject"
            required
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />

          <label htmlFor="message">💬 Message</label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            placeholder="Write your message here..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <button type="submit">📤 {buttonText}</button>
          {status.message && (
            <p style={{ color: status.success ? "green" : "red" }}><strong>{status.message}</strong></p>
          )}
        </form>
      </section>

      <footer className="footer-section">
        <div className="footer-container">
          <p>© 2025 <strong>Kaushik Bharshing</strong>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
