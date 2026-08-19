import { useState } from 'react'
import './App.css'
import resume from './assets/Resume.pdf'


const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Vite',
  'Python',
  'Node.js',
  'Express.js',
  'MySQL',
  'Git & GitHub',
  'Power BI',
  'APIs',
  'ERP Systems',
  'UI/UX',
  'REST APIs',
]

const experiences = [
  {
    company: 'Intellisys IT Solutions pvt.ltd',
    role: 'Prompt Engineer Intern',
    duration: '2026 - Present',
    description:
      'Built and maintained responsive business applications, dashboards, and client portals using React, Node.js, and MySQL.',
    technologies: ['React', 'Node.js', 'MySQL', 'REST API'],
    achievements: ['Reduced manual reporting time by 40%', 'Improved user experience across client dashboards'],
  },
  
]

const education = [
  {
    degree: 'BBA (Computer Application)',
    college: 'Dr. Babasaheb Ambedkar College Aundh , Pune',
    year: '2023 - 2026',
    score: '7.33 CGPA',
    detail: 'Developed a strong foundation in programming, databases, web development, and computer applications. Currently expanding my technical skills through Full Stack Development and Data Analysis, with a focus on building practical, real-world projects.',
  },
  
]

const projects = [
  {
    name: 'Weather App',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    description: 'A responsive weather application developed using HTML, CSS, and JavaScript that fetches real-time weather information through a weather API. Users can search for a city and view its current weather conditions in a simple and user-friendly interface.',
    features: ['City-based weather search', 'Humidity information', 'Weather condition' , 'Real-time weather data'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Premium Coffee Website',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    description: 'A modern and responsive Premium Coffee website developed using React and Vite, designed to provide an engaging and visually appealing coffee shop experience. The website showcases premium coffee products, categories, and shop information through reusable React components with a clean and user-friendly interface.',
    features: ['Premium Coffee Showcase', 'Responsive Home Page', 'Responsive Design' , 'Coffee Menu'],
    tech: ['React.js', 'Vite', 'JavaScript' , 'HTML'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Netflix Clone App',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
    description: 'A responsive Netflix Clone developed to replicate the core look and feel of a modern streaming platform. The application features a movie and TV-show browsing interface with categorized content, attractive banners, movie cards, and an interactive user experience.',
    features: ['Movie & TV Show Showcase', 'Responsive Design', 'Netflix-inspired UI'],
    tech: ['React', 'CSS', 'APIs'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Foodie Application',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    description: 'Foodie is a modern and responsive food delivery web application developed using React.js and Vite. The application provides users with an attractive platform to explore food categories, discover popular dishes, and navigate through login and registration pages. It uses reusable React components and React Router for smooth navigation between different pages.',
    features: ['Responsive Home Page', 'Popular Foods', 'Modern Food-Delivery UI'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
]

const services = [
  'Website Development',
  'Web Application Development',
  'ERP Development',
  'React Development',
  'Backend Development',
  'Python Development',
  'Dashboard Development',
  'API Development',
]

const certificates = [
  'Full Stack Web Development',
  'Python for Data & Automation',
  'Power BI Fundamentals',
  'JavaScript Basic Concepts',
]

const testimonials = [
  {
    name: 'Sahil Talape',
    role: 'Client',
    quote: 'The interface was modern, smooth, and highly user-friendly. It delivered exactly what we needed for our business workflow.',
  },
  {
    name: 'Rohit Sharma',
    role: 'Project Manager',
    quote: 'Great communication, strong technical execution, and consistent delivery. The project quality was excellent from start to finish.',
  },
  {
    name: 'Neha Verma',
    role: 'Student Mentor',
    quote: 'A thoughtful developer who understands design, user behavior, and technical problem solving in equal measure.',
  },
]

const githubStats = [
  { value: '50+', label: 'Repositories' },
  { value: '10k+', label: 'Lines of Code' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '85%', label: 'Code Quality' },
]

const contactLinks = [
  { label: 'Email', value: 'dhirajdalvi2005@gmail.com', href: 'dhirajdalvi2005@gmail.com' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/dhiraj-dalvi-bbb347425', href: 'https://www.linkedin.com/in/dhiraj-dalvi-bbb347425' },
  { label: 'GitHub', value: 'https://github.com/dhiraj112233a', href: 'https://github.com/dhiraj112233a' },
]

const resumePoints = [
  'Career summary and project-driven experience',
  'Technical skills across frontend and backend',
  'Business process and automation expertise',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">D</div>
          <div>
            <span className="brand-name">Dhiraj</span>
            <span className="brand-role">Student</span>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="resume-btn" href={resume} download='resume'>
            Download Resume
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <span className="hero-badge">Available for freelance & full-time roles</span>
            <h1>
              Hi, I&apos;m <span>Dhiraj</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="lead">
              I design and build responsive web experiences, business systems, and data-driven interfaces that help companies grow.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#resume">
                Download Resume
              </a>
            </div>

            <div className="socials" aria-label="Social links">
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card glass-card">
              <img
                src = "./images/myphoto.jpeg"
                alt="Profile portrait"
              />
              <div className="profile-overlay">
                <span> </span>
                <strong>Full Stack Developer</strong>
              </div>
            </div>
            <div className="floating-badge badge-one">React</div>
            <div className="floating-badge badge-two">Python</div>
            <div className="floating-badge badge-three">Mongo db</div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span className="eyebrow">About Me</span>
            <h2>Building practical digital experiences</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy glass-card">
              <p>
                I am a passionate developer focused on crafting elegant, efficient, and business-friendly digital products. My work blends frontend design, backend logic, and scalable architecture to deliver solutions that look strong and perform reliably.
              </p>
              <p>
                My career objective is to create meaningful technology experiences that improve operational efficiency, deliver measurable value, and help businesses grow with confidence.
              </p>
            </div>

            <div className="about-points glass-card">
              <h3>What I do</h3>
              <ul>
                <li>Design and develop responsive websites</li>
                <li>Build business dashboards and ERP modules</li>
                <li>Create scalable backend APIs and integrations</li>
                <li>Turn complex processes into clean user experiences</li>
              </ul>
            </div>
          </div>

          <div className="strengths-grid">
            {['Problem Solving', 'Communication', 'Ownership', 'Adaptability', 'Clean Coding', 'Business Thinking'].map((item) => (
              <div className="strength-pill glass-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>Technologies I work with</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-card glass-card">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span className="eyebrow">Experience</span>
            <h2>Professional journey</h2>
          </div>

          <div className="timeline">
            {experiences.map((job) => (
              <article className="timeline-card glass-card" key={job.company}>
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span>{job.duration}</span>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="tag-row">
                  {job.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <ul>
                  {job.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <span className="eyebrow">Education</span>
            <h2>Academic background</h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="edu-card glass-card" key={item.degree}>
                <span className="edu-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <p className="edu-college">{item.college}</p>
                <p className="edu-score">{item.score}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Selected work</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card glass-card" key={project.name}>
                <img src={project.image} alt={project.name} />
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Business and freelance support</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card glass-card" key={service}>
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="certificates">
          <div className="section-heading">
            <span className="eyebrow">Certifications</span>
            <h2>Achievements & training</h2>
          </div>

          <div className="cert-grid">
            {certificates.map((item) => (
              <div key={item} className="cert-card glass-card">
                <span className="cert-badge">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="github">
          <div className="section-heading">
            <span className="eyebrow">GitHub / Coding Activity</span>
            <h2>Code, learning, and continuous growth</h2>
          </div>

          <div className="github-grid">
            {githubStats.map((stat) => (
              <div key={stat.label} className="stat-card glass-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-heading">
            <span className="eyebrow">Testimonials</span>
            <h2>Feedback from clients & teams</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial-card glass-card" key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <div className="section-heading">
            <span className="eyebrow">Resume</span>
            <h2>Overview for recruiters</h2>
          </div>

          <div className="resume-grid">
            <div className="resume-preview glass-card">
              <div className="resume-mini">
                <span className="resume-mark">D</span>
                <div>
                  <strong>Dhiraj</strong>
                  <p>Full Stack Developer</p>
                </div>
              </div>
              <div className="resume-meta">
                <p>Career Summary</p>
                <p>Experienced in web development, ERP solutions, and dashboard systems with a strong focus on user-centered design.</p>
              </div>
            </div>

            <div className="resume-details glass-card">
              <h3>Highlights</h3>
              <ul>
                {resumePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href="/resume.pdf" className="btn btn-primary" download>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s work together</h2>
          </div>

          <div className="contact-grid">
            <form className="contact-form glass-card">
              <div className="field-row">
                <input type="text" placeholder="Name" aria-label="Name" />
                <input type="email" placeholder="Email" aria-label="Email" />
              </div>
              <div className="field-row">
                <input type="tel" placeholder="Phone" aria-label="Phone" />
                <input type="text" placeholder="Subject" aria-label="Subject" />
              </div>
              <textarea rows="5" placeholder="Message" aria-label="Message" />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>

            <div className="contact-panel glass-card">
              <div className="contact-list">
                {contactLinks.map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>
              <div className="map-box">
                <div className="map-pin" />
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand-mark">D</div>
          <div>
            <strong>Dhiraj</strong>
            <span>Portfolio</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/dhiraj112233a" target="_blank" rel="noreferrer">GitHub</a>
          <a href="http://www.linkedin.com/in/dhiraj-dalvi-bbb347425" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <p>© 2026 Dhiraj. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
