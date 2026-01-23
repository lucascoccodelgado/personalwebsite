import { useState } from 'react'
import './App.css'

const content = {
  en: {
    subtitle: 'Educator, Strategist, K–12 & AI',
    nav: {
      experience: 'Experience',
      education: 'Education',
      publications: 'Publications',
      about: 'About',
      interests: 'Interests',
      contact: 'Contact',
    },
    bio: "I'm a career educator and K–12 strategist with a passion for using technology to bridge the equity gap for marginalized learners across the globe. I grew up in Cuba, where education became the pathway that allowed me to attend college in the United States. My career started in the classroom as a high school biology teacher, then moved into education strategy and corporate development, working with large public school systems and national curriculum providers. Today, I work at the intersection of education, AI, and strategy, helping scale solutions that support teachers and students at the district and system level.",
    sectionTitles: {
      experience: 'Experience',
      education: 'Education',
      publications: 'Selected Work',
      about: 'About',
      interests: 'Personal Interests',
    },
    experiences: [
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
      {
        company: 'Stanford University School of Medicine',
        type: 'Teaching & Residential Leadership',
        description: 'Served as Head Teaching Assistant and Head Residential Advisor for summer programs at Stanford University School of Medicine. Led instructional teams and residential staff while teaching cardiothoracic surgical skills in simulation labs alongside faculty. Taught and supported over 300 high school, college, and first-year medical students, combining hands-on instruction, curriculum design, mentorship, and program operations in an intensive academic environment.',
        logo: '/Stanford-Logo.png',
      },
    ],
    education: [
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
    ],
    publications: [
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
    ],
    about: [
      { text: 'I started my career as a ', bold: 'high school biology teacher', after: ' through Teach For America. Teaching in a ' },
      { bold: 'Title I school', after: ' shaped how I think about education and what actually helps students and teachers in practice.' },
      { text: 'After the classroom, I moved into ', bold: 'education strategy consulting at EY-Parthenon', after: '. I worked with public school systems and education organizations on post-pandemic challenges, including a year ' },
      { bold: 'embedded with a 250,000-student Title I district', after: '. My work focused on student attendance, procurement, leadership development, and system operations.' },
      { text: 'I later joined ', bold: 'Imagine Learning', after: ', the largest K–12 digital curriculum provider in the U.S., serving ' },
      { bold: '15 million students nationwide', after: '. I worked in ' },
      { bold: 'strategy and corporate development', after: ', partnering closely with the C-suite on M&A diligence, venture investments through Imagine Learning Ventures, and internal operational strategy. Much of my work involved evaluating classroom fit, curriculum alignment, and adoption risk for new products and AI-enabled tools.' },
      { text: 'Today, I work on ', bold: 'corporate strategy at Pearson', after: ', a global education company serving approximately ' },
      { bold: '160 million learners worldwide', after: '. I support enterprise growth and long-term planning, including geographic expansion, education market modeling, and translating strategy into execution across business units.' },
    ],
    interests: {
      powerlifting: {
        title: 'Powerlifting',
        p1: "I'm a novice-to-intermediate competitive powerlifter and compete in USAPL meets. I train consistently and enjoy the long, unglamorous process of getting stronger over time.",
        p2: 'My current competition personal bests (raw) are:',
        stats: { squat: '403 lb', bench: '281 lb', deadlift: '468 lb', total: '1,152 lb' },
        p3: 'You can find my full meet history and results on',
        linkText: 'OpenPowerlifting',
      },
      dnd: {
        title: 'Dungeons & Dragons (Tabletop RPGs)',
        p1: "I'm an avid tabletop RPG game master and run multiple long-term Dungeons & Dragons campaigns in my free time. Storytelling, teaching, and facilitation are tightly intertwined in this medium, and being a GM lets me continue practicing those skills in a creative setting.",
        p2: "Running campaigns means designing worlds, adapting to unpredictable players, explaining complex systems clearly, and keeping groups engaged over long arcs. It's part performance, part teaching, part problem-solving, and one of the ways I stay creative outside of work.",
      },
    },
    cta: {
      linkedin: 'LinkedIn',
      email: 'Email me',
    },
  },
  es: {
    subtitle: 'Educador, Estratega, K–12 e IA',
    nav: {
      experience: 'Experiencia',
      education: 'Educación',
      publications: 'Publicaciones',
      about: 'Sobre mí',
      interests: 'Intereses',
      contact: 'Contacto',
    },
    bio: 'Soy educador de formación y trabajo en estrategia educativa en K–12, con un fuerte interés en el uso responsable de la tecnología para reducir brechas de equidad para estudiantes históricamente marginados a nivel global. Crecí en Cuba, donde la educación fue el camino que me permitió acceder a la universidad en los Estados Unidos. Mi trayectoria profesional comenzó en el aula como profesor de biología en secundaria, y luego evolucionó hacia la estrategia educativa y el desarrollo corporativo, trabajando con grandes sistemas escolares públicos y proveedores nacionales de currículo. Hoy trabajo en educación, inteligencia artificial y estrategia, apoyando la implementación y el escalamiento de soluciones utilizadas por distritos y sistemas educativos.',
    sectionTitles: {
      experience: 'Experiencia',
      education: 'Educación',
      publications: 'Publicaciones seleccionadas',
      about: 'Sobre mí',
      interests: 'Intereses personales',
    },
    experiences: [
      {
        company: 'Pearson',
        type: 'Estrategia Corporativa',
        description: 'Trabajo en estrategia empresarial y planificación de largo plazo en una empresa global de educación. Mi trabajo incluye expansión geográfica, análisis de mercados educativos y apoyo a la ejecución de iniciativas de crecimiento en K–12, educación superior, formación laboral y evaluaciones.',
        logo: '/pearson_logo.jpeg',
      },
      {
        company: 'Imagine Learning',
        type: 'Estrategia y Desarrollo Corporativo',
        description: 'Estrategia y desarrollo corporativo para el mayor proveedor de currículo digital K–12 en Estados Unidos, que atiende a 15 millones de estudiantes a nivel nacional. Trabajé estrechamente con el equipo ejecutivo en procesos de diligencia para M&A, inversiones de venture a través de Imagine Learning Ventures y estrategia operativa interna, con foco en la adecuación al aula, la alineación curricular y la adopción por parte de los distritos.',
        logo: '/imagine_learning_logo.jpeg',
      },
      {
        company: 'EY-Parthenon',
        type: 'Consultoría en Estrategia Educativa',
        description: 'Asesoré a sistemas escolares públicos, organizaciones sin fines de lucro y entidades educativas en procesos de crecimiento y transformación postpandemia. Estuve integrado durante un año con el liderazgo senior de un distrito Title I (programa federal para distritos con alta proporción de estudiantes de bajos ingresos) de 250.000 estudiantes, apoyando trabajo en asistencia estudiantil, adquisiciones, desarrollo de liderazgo y operaciones del sistema.',
        logo: '/ey_parthenon_logo.jpeg',
      },
      {
        company: 'Teach For America',
        type: 'Profesor de Biología en Secundaria',
        description: 'Enseñé biología y ciencias biomédicas en una escuela secundaria Title I (escuela que recibe fondos federales por atender a estudiantes de bajos ingresos). Diseñé y adapté instrucción alineada con estándares estatales y prácticas NGSS, incluyendo la reconstrucción de cursos para enseñanza remota e híbrida durante la pandemia de COVID.',
        logo: '/tfa_logo.jpeg',
      },
      {
        company: 'Stanford University School of Medicine',
        type: 'Docencia y Liderazgo Residencial',
        description: 'Desempeñé el rol de Asistente de Enseñanza Principal y Asesor Residencial Principal en programas de verano en la Escuela de Medicina de la Universidad de Stanford. Lideré equipos de instrucción y personal residencial mientras enseñaba habilidades quirúrgicas cardiotorácicas en laboratorios de simulación junto con profesores. Enseñé y apoyé a más de 300 estudiantes de secundaria, universitarios y de primer año de medicina, combinando instrucción práctica, diseño curricular, mentoría y operaciones de programa en un entorno académico intensivo.',
        logo: '/Stanford-Logo.png',
      },
    ],
    education: [
      {
        school: 'Boston University',
        degree: 'Master of Education (Ed.M.), Curriculum & Teaching',
        note: 'Enfoque en educación científica en secundaria y equidad en K–12',
        logo: '/BU-logo.png',
      },
      {
        school: 'Harvard University',
        degree: 'Bachelor of Arts (A.B.), Human Developmental & Regenerative Biology',
        note: 'Campo secundario en Government',
        logo: '/Harvard-Logo.png',
      },
    ],
    publications: [
      {
        title: 'Curriculum-Informed AI™: The Next Era of AI in Education',
        source: 'Imagine Learning',
        year: '2025',
        url: 'https://www.imaginelearning.com/pdf-viewer/?file=https://www.imaginelearning.com/wp-content/uploads/2025/04/Curriculum-Informed-AI-White-Paper.pdf',
        description: 'Un marco para desarrollar inteligencia artificial en educación basado en currículo de alta calidad e integridad instruccional.',
      },
      {
        title: 'Imagine Impactful AI: Training AI on Efficacious Curricula to Empower Potential in K–12 Education',
        source: 'Imagine Learning',
        year: '2024',
        url: 'https://www.imaginelearning.com/pdf-viewer/?file=https://www.imaginelearning.com/wp-content/uploads/2024/03/IL-AI-Insights-Implications-White-Paper.pdf#zoom=auto&pagemode=none',
        description: 'Guía práctica sobre el uso de IA anclada en el currículo para apoyar a docentes, abordando confianza, privacidad y equidad.',
      },
      {
        title: 'How the Rapid Adoption of EdTech Is Changing K–12 Education',
        source: 'EY-Parthenon',
        year: '2022',
        url: 'https://www.ey.com/en_us/insights/education/the-rapid-adoption-of-edtech-is-changing-k-12',
        description: 'Investigación sobre el uso de tecnología educativa tras la pandemia, basada en entrevistas a docentes y visitas a aulas.',
      },
      {
        title: 'Complement Receptor C5aR1 Plays an Evolutionarily Conserved Role in Successful Cardiac Regeneration',
        source: 'Circulation (American Heart Association)',
        year: '2018',
        url: 'https://www.ahajournals.org/doi/10.1161/circulationaha.117.030801',
        description: 'Estudio comparativo entre especies que identifica una vía inmunológica conservada asociada con la regeneración cardíaca exitosa.',
      },
    ],
    about: [
      { text: 'Comencé mi carrera como ', bold: 'profesor de biología en secundaria', after: ' a través de Teach For America. Enseñar en una ' },
      { bold: 'escuela Title I', after: ' (con alta proporción de estudiantes de bajos ingresos) marcó profundamente cómo pienso sobre la educación y sobre qué es lo que realmente ayuda a estudiantes y docentes en la práctica.' },
      { text: 'Después del aula, pasé a la ', bold: 'consultoría en estrategia educativa en EY-Parthenon', after: '. Trabajé con sistemas escolares públicos y organizaciones educativas en desafíos postpandemia, incluyendo un año ' },
      { bold: 'integrado con un distrito Title I de 250.000 estudiantes', after: '. Mi trabajo se centró en asistencia estudiantil, adquisiciones, desarrollo de liderazgo y operaciones del sistema.' },
      { text: 'Posteriormente me uní a ', bold: 'Imagine Learning', after: ', el mayor proveedor de currículo digital K–12 en Estados Unidos, que atiende a ' },
      { bold: '15 millones de estudiantes', after: '. Trabajé en ' },
      { bold: 'estrategia y desarrollo corporativo', after: ', colaborando estrechamente con el equipo ejecutivo en procesos de M&A, inversiones a través de Imagine Learning Ventures y estrategia operativa interna. Gran parte de mi trabajo consistió en evaluar la adecuación al aula, la alineación curricular y el riesgo de adopción de nuevos productos y herramientas habilitadas por IA.' },
      { text: 'Actualmente trabajo en ', bold: 'estrategia corporativa en Pearson', after: ', una empresa global de educación que sirve aproximadamente a ' },
      { bold: '160 millones de estudiantes en todo el mundo', after: '. Apoyo el crecimiento empresarial y la planificación de largo plazo, incluyendo expansión geográfica, modelación de mercados educativos y la traducción de la estrategia en ejecución a través de distintas unidades de negocio.' },
    ],
    interests: {
      powerlifting: {
        title: 'Powerlifting',
        p1: 'Soy powerlifter competitivo de nivel principiante a intermedio y compito en eventos de USAPL. Entreno de forma constante y disfruto el proceso largo y poco glamoroso de ganar fuerza con el tiempo.',
        p2: 'Mis mejores marcas actuales en competencia (raw) son:',
        stats: { squat: '403 lb', bench: '281 lb', deadlift: '468 lb', total: '1.152 lb' },
        p3: 'Puedes ver mi historial completo de competencias y resultados en',
        linkText: 'OpenPowerlifting',
      },
      dnd: {
        title: 'Dungeons & Dragons (juegos de rol de mesa)',
        p1: 'Soy director de juego activo en juegos de rol de mesa y dirijo múltiples campañas de Dungeons & Dragons a largo plazo en mi tiempo libre. La narración, la enseñanza y la facilitación están profundamente entrelazadas en este formato, y ser GM me permite seguir desarrollando estas habilidades en un entorno creativo.',
        p2: 'Dirigir campañas implica diseñar mundos, adaptarse a jugadores impredecibles, explicar sistemas complejos con claridad y mantener a los grupos comprometidos a lo largo del tiempo. Es parte actuación, parte enseñanza y parte resolución de problemas, y una de las formas en que mantengo la creatividad fuera del trabajo.',
      },
    },
    cta: {
      linkedin: 'LinkedIn',
      email: 'Correo electrónico',
    },
  },
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function LanguageToggle({ lang, setLang }) {
  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  )
}

function Header({ lang, setLang, t }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-content">
          <h1 className="name">Lucas Cocco Delgado, Ed.M.</h1>
          <p className="subtitle">{t.subtitle}</p>
        </div>
        <div className="header-actions">
          <LanguageToggle lang={lang} setLang={setLang} />
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
      </div>
    </header>
  )
}

function Nav({ t }) {
  return (
    <nav className="nav">
      <a href="#experience" className="nav-link">{t.nav.experience}</a>
      <a href="#education" className="nav-link">{t.nav.education}</a>
      <a href="#work" className="nav-link">{t.nav.publications}</a>
      <a href="#about" className="nav-link">{t.nav.about}</a>
      <a href="#interests" className="nav-link">{t.nav.interests}</a>
      <a href="#contact" className="nav-link">{t.nav.contact}</a>
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

function Bio({ t }) {
  return (
    <section className="section bio">
      <Headshot />
      <div className="bio-content">
        <p>{t.bio}</p>
      </div>
    </section>
  )
}

function About({ t }) {
  const paragraphs = []
  let currentParagraph = []

  t.about.forEach((item, index) => {
    if (item.text) {
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph)
        currentParagraph = []
      }
      currentParagraph.push(<span key={`text-${index}`}>{item.text}</span>)
    }
    if (item.bold) {
      currentParagraph.push(<strong key={`bold-${index}`}>{item.bold}</strong>)
    }
    if (item.after) {
      currentParagraph.push(<span key={`after-${index}`}>{item.after}</span>)
    }
  })
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph)
  }

  return (
    <section className="section" id="about">
      <h2 className="section-title">{t.sectionTitles.about}</h2>
      <div className="about-content">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
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

function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">{t.sectionTitles.experience}</h2>
      <div className="card-grid">
        {t.experiences.map((exp) => (
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

function Publications({ t }) {
  return (
    <section className="section" id="work">
      <h2 className="section-title">{t.sectionTitles.publications}</h2>
      <div className="publications-list">
        {t.publications.map((pub) => (
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

function Education({ t }) {
  return (
    <section className="section" id="education">
      <h2 className="section-title">{t.sectionTitles.education}</h2>
      <div className="education-list">
        {t.education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </div>
    </section>
  )
}

function PersonalInterests({ t }) {
  const { powerlifting, dnd } = t.interests
  return (
    <section className="section" id="interests">
      <h2 className="section-title">{t.sectionTitles.interests}</h2>
      <div className="interests-list">
        <div className="interest-item">
          <h3 className="interest-title">{powerlifting.title}</h3>
          <p className="interest-description">{powerlifting.p1}</p>
          <p className="interest-description">
            {powerlifting.p2} <strong>{powerlifting.stats.squat}</strong> squat, <strong>{powerlifting.stats.bench}</strong> bench, <strong>{powerlifting.stats.deadlift}</strong> deadlift, <strong>{powerlifting.stats.total}</strong> total.
          </p>
          <p className="interest-description">
            {powerlifting.p3}{' '}
            <a href="https://www.openpowerlifting.org/u/lucascoccodelgado" target="_blank" rel="noopener noreferrer" className="interest-link">
              {powerlifting.linkText}
            </a>
          </p>
        </div>
        <div className="interest-item">
          <h3 className="interest-title">{dnd.title}</h3>
          <p className="interest-description">{dnd.p1}</p>
          <p className="interest-description">{dnd.p2}</p>
        </div>
      </div>
    </section>
  )
}

function CTA({ t }) {
  return (
    <section className="section cta" id="contact">
      <div className="cta-buttons">
        <a
          href="https://www.linkedin.com/in/lucascocco/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {t.cta.linkedin}
        </a>
        <a
          href="mailto:lucascoccodelgado@gmail.com"
          className="btn btn-secondary"
        >
          {t.cta.email}
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
  const [lang, setLang] = useState('en')
  const t = content[lang]

  return (
    <div className="app">
      <main className="main">
        <Header lang={lang} setLang={setLang} t={t} />
        <Nav t={t} />
        <Bio t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Publications t={t} />
        <About t={t} />
        <PersonalInterests t={t} />
        <CTA t={t} />
      </main>
      <Footer />
    </div>
  )
}

export default App
