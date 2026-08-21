import { useState } from 'react'
import './App.css'
import resume from './assets/Resume.pdf'
import myPhoto from './assets/myphoto.jpeg'
import weatherImage from './assets/weather.png'
import precoffee from './assets/precoffee.png'
import foodie from './assets/foodie.png'

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
  'MySQL',
  'Git & GitHub',
  'Power BI',
  'APIs',
]

const experiences = [
  {
    company: 'Intellisys IT Solutions pvt.ltd',
    role: 'Prompt Engineer Intern',
    duration: '2026 - Present',
    description:
      'Built and maintained responsive business applications, dashboards, and client portals using React, Node.js, and MySQL.',
    technologies: ['React', 'Node.js', 'MySQL', 'REST API'],
    achievements: [
      'Reduced manual reporting time by 40%',
      'Improved user experience across client dashboards',
    ],
  },
  
]

const education = [
  {
    degree: 'BBA (Computer Application)',
    college: 'Dr. Babasaheb Ambedkar College Aundh , Pune',
    year: '2023 - 2026',
    score: '7.33 CGPA',
    detail:
      'Developed a strong foundation in programming, databases, web development, and computer applications. Currently expanding my technical skills through Full Stack Development and Data Analysis, with a focus on building practical, real-world projects.',
  },
  
]

const projects = [
  {
    name: 'Weather App',
    image: weatherImage,
    description:
      'A responsive weather application developed using HTML, CSS, and JavaScript that fetches real-time weather information through a weather API. Users can search for a city and view its current weather conditions in a simple and user-friendly interface.',
    features: [
      'City-based weather search',
      'Humidity information',
      'Weather condition',
      'Real-time weather data',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/dhiraj112233a/Weather-App',
    demo: 'https://weather-5pntogzco-dhiraj14.vercel.app/',
  },
  {
    name: 'Premium Coffee Website',
    image: precoffee,
    description:
      'A modern and responsive Premium Coffee website developed using React and Vite, designed to provide an engaging and visually appealing coffee shop experience. The website showcases premium coffee products, categories, and shop information through reusable React components with a clean and user-friendly interface.',
    features: [
      'Premium Coffee Showcase',
      'Responsive Home Page',
      'Responsive Design',
      'Coffee Menu',
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'HTML'],
    github: 'https://github.com/dhiraj112233a/Premium-Coffee',
    demo: 'https://premium-coffee-seven.vercel.app/',
  },
  {
    name: 'Netflix Clone App',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
    description:
      'A responsive Netflix Clone developed to replicate the core look and feel of a modern streaming platform. The application features a movie and TV-show browsing interface with categorized content, attractive banners, movie cards, and an interactive user experience.',
    features: ['Movie & TV Show Showcase', 'Responsive Design', 'Netflix-inspired UI'],
    tech: ['React', 'CSS', 'APIs'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Foodie Application',
    image: foodie,
    description:
      'Foodie is a modern and responsive food delivery web application developed using React.js and Vite. The application provides users with an attractive platform to explore food categories, discover popular dishes, and navigate through login and registration pages. It uses reusable React components and React Router for smooth navigation between different pages.',
    features: ['Responsive Home Page', 'Popular Foods', 'Modern Food-Delivery UI'],
    tech: ['React.js', 'Vite', 'JavaScript'],
    github: 'https://github.com/dhiraj112233a/Responsive-Foodie-Project',
    demo: 'https://responsive-foodie-project.vercel.app/',
  },
]

const services = [
  'Frontend Web Development',
  'React.js Development',
  'Responsive Website Development',
  'Full Stack Web Development',
  'Python Development',
  'SQL & Database Management',
  'Data Analysis & Visualization',
  'Power BI Dashboard Development',
  'API Integration',
]

const certificates = [
  'Full Stack Web Development',
  'Python for Data Analysis',
  'Power BI & Data Visualization',
  'SQL & Database Management',
  'React.js & Frontend Development',
  'JavaScript Fundamentals',
]

const testimonials = [
  {
    name: 'Sahil Talape',
    role: 'Client',
    quote:
      'The interface was modern, smooth, and highly user-friendly. It delivered exactly what we needed for our business workflow.',
  },
  {
    name: 'Rohit Sharma',
    role: 'Project Manager',
    quote:
      'Great communication, strong technical execution, and consistent delivery. The project quality was excellent from start to finish.',
  },
  {
    name: 'Neha Verma',
    role: 'Student Mentor',
    quote:
      'A thoughtful developer who understands design, user behavior, and technical problem solving in equal measure.',
  },
]

const githubStats = [
  { value: '15+', label: 'Repositories' },
  { value: '10k+', label: 'Lines of Code' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '85%', label: 'Code Quality' },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'dhirajdalvi2005@gmail.com',
    href: 'mailto:dhirajdalvi2005@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhiraj-dalvi',
    href: 'https://www.linkedin.com/in/dhiraj-dalvi-bbb347425',
  },
  {
    label: 'GitHub',
    value: 'github.com/dhiraj112233a',
    href: 'https://github.com/dhiraj112233a',
  },
]

const resumePoints = [
  'Full Stack Web Development using React, JavaScript, Python, and SQL',
  'Responsive and user-friendly web application development',
  'Data analysis and visualization using Python, SQL, and Power BI',
  'Experience building practical projects with APIs and databases',
  'Strong foundation in frontend development, backend programming, and problem solving',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">D</div>
          <div>
            <span className="brand-name">Dhiraj Dalvi</span>
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
          <a className="resume-btn" href={resume} download="Dhiraj-Dalvi-Resume.pdf">
            Download Resume
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
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
            <span className="hero-badge">Available for freelance &amp; full-time roles</span>
            <h1>
              Hi, I&apos;m <span>Dhiraj Dalvi</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="lead">
              I design and build responsive web experiences, business systems, and
              data-driven interfaces that help companies grow.
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
              <a href="https://github.com/dhiraj112233a" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dhiraj-dalvi-bbb347425"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>





          <div className="hero-visual">
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="profile-card glass-card">
              <img src={myPhoto} alt="Dhiraj Dalvi" loading="eager" />
              <div className="profile-overlay">
                <span>Based in Pune, India</span>
                <strong>Student &amp; Developer</strong>
              </div>
            </div>
            <div className="floating-badge badge-one">React</div>
            <div className="floating-badge badge-two">Python</div>
            <div className="floating-badge badge-three">SQL</div>
          </div>
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
                I am a BBA (Computer Application) graduate with a strong interest in Full
                Stack Web Development and Data Analysis. I am currently developing my
                skills in frontend technologies such as HTML, CSS, JavaScript, and
                React.js, along with backend development using Python and database
                management with SQL.
              </p>
              <p>
                I enjoy building responsive, user-friendly web applications and working on
                practical projects that help me strengthen my technical and problem-solving
                skills. I am also exploring data analysis and visualization using Python,
                SQL, and Power BI.
              </p>
              <p>
                My goal is to continuously learn new technologies, gain practical industry
                experience, and build efficient digital solutions that combine technology,
                creativity, and business understanding.
              </p>
            </div>

            <div className="about-points glass-card">
              <h3>Interests</h3>
              <ul>
                <li>Full-Stack Web Application Development</li>
                <li>Exploring new frameworks and libraries</li>
                <li>Watching tech &amp; coding videos</li>
                <li>Exploring AI &amp; Emerging Technologies</li>
                <li>Problem Solving</li>
                <li>Gaming &amp; Technology</li>
              </ul>
            </div>
          </div>

          <div className="strengths-grid">
            {[
              'Problem Solving',
              'Communication',
              'Ownership',
              'Adaptability',
              'Clean Coding',
              'Business Thinking',
            ].map((item) => (
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
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  decoding="async"
                />
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
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
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
            <h2>Achievements &amp; training</h2>
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
            <h2>Feedback from clients &amp; teams</h2>
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
                <p>
                  BBA (Computer Application) graduate with a strong interest in Full Stack
                  Web Development and Data Analysis. Skilled in HTML, CSS, JavaScript,
                  React.js, Python, and SQL, with a growing understanding of Power BI and
                  data visualization. Passionate about building responsive web
                  applications, analyzing data, solving problems, and continuously learning
                  new technologies. Seeking an opportunity to apply my technical and
                  business knowledge in a professional environment while contributing to
                  real-world projects and growing as a developer.
                </p>
              </div>
            </div>

            <div className="resume-details glass-card">
              <h3>Highlights</h3>
              <ul>
                {resumePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                href={resume}
                className="btn btn-primary"
                download="Dhiraj-Dalvi-Resume.pdf"
              >
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
                <input type="text" name="name" placeholder="Name" aria-label="Name" />
                <input type="email" name="email" placeholder="Email" aria-label="Email" />
              </div>
              <div className="field-row">
                <input type="tel" name="phone" placeholder="Phone" aria-label="Phone" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                />
              </div>
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                aria-label="Message"
              />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>

            <div className="contact-panel glass-card">
              <div className="contact-list">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
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
          <a href="https://github.com/dhiraj112233a" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhiraj-dalvi-bbb347425"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p>© 2026 Dhiraj. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
