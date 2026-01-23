import './App.css'

const experiences = [
  {
    company: 'Pearson',
    type: 'Corporate Strategy',
    description: 'Driving enterprise strategy and long-term planning at a global education company. Work includes geographic expansion, education market analysis, and supporting cross-business execution on growth initiatives across K–12, higher education, workforce, and assessments.',
    logo: '/pearson_logo.jpeg',
  },
  {
    company: 'Imagine Learning',
    type: 'Strategy & Corporate Development',
    description: "Strategy and corporate development for the U.S.'s largest K–12 digital curriculum provider, serving 15 million students nationwide. Worked closely with the C-suite on M&A diligence, venture investments, and internal operational strategy, with a focus on classroom fit, curriculum alignment, and district adoption.",
    logo: '/imagine_learning_logo.jpeg',
  },
  {
    company: 'EY-Parthenon',
    type: 'Education Strategy Consulting',
    description: 'Advised public school systems, nonprofits, and education organizations on growth and post-pandemic transformation. Embedded with senior district leadership to support work on attendance, procurement, leadership development, and system operations in a large Title I district.',
    logo: '/ey_parthenon_logo.jpeg',
  },
  {
    company: 'Teach For America',
    type: 'High School Biology Teacher',
    description: 'Taught biology and biomedical science in a Title I high school. Designed and adapted instruction aligned to state standards and NGSS practices, including rebuilding coursework for remote and hybrid learning during COVID.',
    logo: '/tfa_logo.jpeg',
  },
]

const publications = [
  {
    title: 'Curriculum-Informed AI™: The Next Era of AI in Education',
    source: 'Imagine Learning',
    year: '2025',
    url: 'https://www.imaginelearning.com/pdf-viewer/?file=https://www.imaginelearning.com/wp-content/uploads/2025/04/Curriculum-Informed-AI-White-Paper.pdf',
    description: 'A framework for building AI in education grounded in high-quality curriculum and instructional integrity.',
  },
  {
    title: 'Imagine Impactful AI: Training AI on Efficacious Curricula to Empower Potential in K–12 Education',
    source: 'Imagine Learning',
    year: '2024',
    url: 'https://www.imaginelearning.com/pdf-viewer/?file=https://www.imaginelearning.com/wp-content/uploads/2024/03/IL-AI-Insights-Implications-White-Paper.pdf#zoom=auto&pagemode=none',
    description: 'Practical guidance on using curriculum-grounded AI to support educators while addressing trust, privacy, and equity.',
  },
  {
    title: 'How the Rapid Adoption of EdTech Is Changing K–12 Education',
    source: 'EY-Parthenon',
    year: '2022',
    url: 'https://www.ey.com/en_us/insights/education/the-rapid-adoption-of-edtech-is-changing-k-12',
    description: 'Research on post-COVID edtech use informed by educator interviews and classroom visits.',
  },
  {
    title: 'Complement Receptor C5aR1 Plays an Evolutionarily Conserved Role in Successful Cardiac Regeneration',
    source: 'Circulation (American Heart Association)',
    year: '2018',
    url: 'https://www.ahajournals.org/doi/10.1161/circulationaha.117.030801',
    description: 'Cross-species study identifying a conserved immune pathway associated with successful cardiac regeneration.',
  },
]

const education = [
  {
    school: 'Boston University',
    degree: 'Master of Education (Ed.M.), Curriculum & Teaching',
    note: 'Focus on Secondary Science Education & K–12 Equity',
    logo: '/BU-logo.png',
  },
  {
    school: 'Harvard University',
    degree: 'Bachelor of Arts (A.B.), Human Developmental & Regenerative Biology',
    note: 'Secondary field in Government',
    logo: '/Harvard-Logo.png',
  },
]

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-content">
          <h1 className="name">Lucas Cocco Delgado, Ed.M.</h1>
          <p className="subtitle">Educator, Strategist, K–12 & AI</p>
        </div>
        <a
          href="https://www.linkedin.com/in/lucascocco/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon />
        </a>
      </div>
    </header>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#education" className="nav-link">Education</a>
      <a href="#work" className="nav-link">Publications</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#interests" className="nav-link">Interests</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  )
}

function Headshot() {
  return (
    <div className="headshot">
      <img src="/headshot.jpeg" alt="Lucas Cocco Delgado" className="headshot-image" />
    </div>
  )
}

function Bio() {
  return (
    <section className="section bio">
      <Headshot />
      <div className="bio-content">
        <p>
          I'm a career educator and K–12 strategist with a passion for using technology to bridge the equity gap for marginalized learners across the globe. I grew up in Cuba, where education became the pathway that allowed me to attend college in the United States. My career started in the classroom as a high school biology teacher, then moved into education strategy and corporate development, working with large public school systems and national curriculum providers. Today, I work at the intersection of education, AI, and strategy, helping scale solutions that support teachers and students at the district and system level.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p>
          I started my career as a high school biology teacher through Teach For America. Teaching in a Title I school shaped how I think about education and what actually helps students and teachers in practice.
        </p>
        <p>
          After the classroom, I moved into education strategy consulting at EY-Parthenon. I worked with public school systems and education organizations on post-pandemic challenges, including a year embedded with a 250,000-student Title I district. My work focused on student attendance, procurement, leadership development, and system operations.
        </p>
        <p>
          I later joined Imagine Learning, the largest K–12 digital curriculum provider in the U.S., serving 15 million students nationwide. I worked in strategy and corporate development, partnering closely with the C-suite on M&A diligence, venture investments through Imagine Learning Ventures, and internal operational strategy. Much of my work involved evaluating classroom fit, curriculum alignment, and adoption risk for new products and AI-enabled tools.
        </p>
        <p>
          Today, I work on corporate strategy at Pearson, a global education company serving approximately 160 million learners worldwide. I support enterprise growth and long-term planning, including geographic expansion, education market modeling, and translating strategy into execution across business units.
        </p>
      </div>
    </section>
  )
}

function ExperienceCard({ company, type, description, logo }) {
  return (
    <div className="card">
      {logo && <img src={logo} alt={`${company} logo`} className="card-logo" />}
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-company">{company}</h3>
          <span className="card-type">{type}</span>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="card-grid">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  )
}

function PublicationCard({ title, source, year, url, description }) {
  return (
    <div className="publication">
      <div className="publication-meta">
        <span className="publication-source">{source}</span>
        <span className="publication-year">{year}</span>
      </div>
      <h3 className="publication-title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="publication-description">{description}</p>
    </div>
  )
}

function Publications() {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Selected Work</h2>
      <div className="publications-list">
        {publications.map((pub) => (
          <PublicationCard key={pub.title} {...pub} />
        ))}
      </div>
    </section>
  )
}

function EducationCard({ school, degree, note, logo }) {
  return (
    <div className="education-item">
      {logo && <img src={logo} alt={`${school} logo`} className="education-logo" />}
      <div className="education-details">
        <h3 className="education-school">{school}</h3>
        <p className="education-degree">{degree}</p>
        {note && <p className="education-note">{note}</p>}
      </div>
    </div>
  )
}

function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </div>
    </section>
  )
}

function PersonalInterests() {
  return (
    <section className="section" id="interests">
      <h2 className="section-title">Personal Interests</h2>
      <div className="interests-list">
        <div className="interest-item">
          <h3 className="interest-title">Powerlifting</h3>
          <p className="interest-description">
            I'm a novice-to-intermediate competitive powerlifter and compete in USAPL meets. I train consistently and enjoy the long, unglamorous process of getting stronger over time.
          </p>
          <p className="interest-description">
            My current competition personal bests (raw) are: 403 lb squat, 281 lb bench, 468 lb deadlift, 1,152 lb total.
          </p>
          <p className="interest-description">
            You can find my full meet history and results on{' '}
            <a href="https://www.openpowerlifting.org/u/lucascoccodelgado" target="_blank" rel="noopener noreferrer" className="interest-link">
              OpenPowerlifting
            </a>
          </p>
        </div>
        <div className="interest-item">
          <h3 className="interest-title">Dungeons & Dragons (Tabletop RPGs)</h3>
          <p className="interest-description">
            I'm an avid tabletop RPG game master and run multiple long-term Dungeons & Dragons campaigns in my free time. Storytelling, teaching, and facilitation are tightly intertwined in this medium, and being a GM lets me continue practicing those skills in a creative setting.
          </p>
          <p className="interest-description">
            Running campaigns means designing worlds, adapting to unpredictable players, explaining complex systems clearly, and keeping groups engaged over long arcs. It's part performance, part teaching, part problem-solving, and one of the ways I stay creative outside of work.
          </p>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section cta" id="contact">
      <div className="cta-buttons">
        <a
          href="https://www.linkedin.com/in/lucascocco/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          LinkedIn
        </a>
        <a
          href="mailto:lucascoccodelgado@gmail.com"
          className="btn btn-secondary"
        >
          Email me
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; 2026 Lucas Cocco Delgado</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/lucascocco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:lucascoccodelgado@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="app">
      <main className="main">
        <Header />
        <Nav />
        <Bio />
        <Experience />
        <Education />
        <Publications />
        <About />
        <PersonalInterests />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
