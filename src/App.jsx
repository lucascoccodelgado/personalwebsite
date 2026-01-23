import './App.css'

const experiences = [
  {
    company: 'Pearson',
    type: 'Corporate Strategy',
    description: 'Driving enterprise strategy and long-term planning at a global education company. Work includes geographic expansion, education market analysis, and supporting cross-business execution on growth initiatives across K–12, higher education, workforce, and assessments.',
  },
  {
    company: 'Imagine Learning',
    type: 'Strategy & Corporate Development',
    description: "Strategy and corporate development for the U.S.'s largest K–12 digital curriculum provider, serving 15 million students nationwide. Worked closely with the C-suite on M&A diligence, venture investments, and internal operational strategy, with a focus on classroom fit, curriculum alignment, and district adoption.",
  },
  {
    company: 'EY-Parthenon',
    type: 'Education Strategy Consulting',
    description: 'Advised public school systems, nonprofits, and education organizations on growth and post-pandemic transformation. Embedded with senior district leadership to support work on attendance, procurement, leadership development, and system operations in a large Title I district.',
  },
  {
    company: 'Teach For America',
    type: 'High School Biology Teacher',
    description: 'Taught biology and biomedical science in a Title I high school. Designed and adapted instruction aligned to state standards and NGSS practices, including rebuilding coursework for remote and hybrid learning during COVID.',
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
    logo: '/BU-logo.png',
  },
  {
    school: 'Harvard University',
    degree: 'Bachelor of Arts (A.B.), Human Developmental & Regenerative Biology',
    note: 'Secondary field in Government',
    logo: '/Harvard-Logo.png',
  },
]

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Lucas Cocco Delgado, Ed.M.</h1>
        <p className="subtitle">K–12 Education, Strategy, AI</p>
      </div>
    </header>
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
    <section className="section">
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

function ExperienceCard({ company, type, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-company">{company}</h3>
        <span className="card-type">{type}</span>
      </div>
      <p className="card-description">{description}</p>
    </div>
  )
}

function Experience() {
  return (
    <section className="section">
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
    <section className="section">
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
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section cta">
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
        <Bio />
        <Experience />
        <Publications />
        <Education />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
