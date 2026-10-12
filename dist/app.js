const resumeUrl = '/assets/steve-wohlwend-resume.pdf';
const projectUrl = 'https://petmomentshop.com/';
const email = window.PORTFOLIO_CONFIG.contactEmail;
const main = document.querySelector('#main');
const experience = [
  { company: 'JPMorgan Chase & Co.', role: 'Software Engineer', dates: 'May 2026 — Present', scope: 'Real-time fraud detection', text: 'Modernizing credit card fraud detection with Python, FastAPI, and Java. Building REST APIs and data aggregation services, React and TypeScript monitoring interfaces, and independently deployable fraud-rule microservices.', tech: 'Python · FastAPI · Java · React · AWS' },
  { company: 'Wells Fargo & Company', role: 'Software Engineer', dates: 'Nov 2025 — May 2026', scope: 'Enterprise access management', text: 'Engineered onboarding, access provisioning, and application lifecycle workflows with Python, Java, and Spring Boot. Developed React interfaces and MCP integrations for AI-agent workflow automation, with Terraform and AWS infrastructure automation.', tech: 'Spring Boot · React · MCP · Terraform' },
  { company: 'American Electric Power', role: 'Senior Java Developer', dates: 'Nov 2018 — Sep 2025', scope: 'Application modernization', text: 'Led the refactoring of a 200K+ line Java codebase with Spring Boot and Hibernate. Migrated legacy applications to Docker and Kubernetes, automated deployments, and remediated hundreds of security vulnerabilities.', tech: 'Java · Hibernate · Kubernetes · Jenkins' },
  { company: 'Lexon Corporation', role: 'Java Developer', dates: 'Aug 2015 — Feb 2018', scope: 'Legacy-to-web migration', text: 'Worked with a 12-person team to replace Java applets with JSF and web interfaces. Introduced Liquibase for Oracle schema versioning and integrated barcode hardware with VB.NET applications.', tech: 'Java · JSF · Oracle · Liquibase' },
  { company: 'McGraw-Hill Education', role: 'Java Developer', dates: 'Feb 2014 — Aug 2015', scope: 'Education applications', text: 'Developed Java and Spring applications with web interfaces and SQL integrations. Improved reliability through performance monitoring, structured logging, diagnostics, and production incident resolution.', tech: 'Java · Spring · JavaScript · SQL' },
  { company: 'Fiserv, Inc.', role: 'Java Application Specialist', dates: 'Apr 2010 — Feb 2014', scope: 'Enterprise application operations', text: 'Supported Java and J2EE applications, SOAP integrations, and web interfaces. Managed CI/CD, deployments, security certificates, disaster recovery, and application support across environments.', tech: 'Java · J2EE · SOAP · CI/CD' }
];
function home() {
  main.innerHTML = `
  <section class="shell professional-intro">
    <p class="eyebrow">STEVE WOHLWEND / SENIOR SOFTWARE ENGINEER</p>
    <div class="professional-grid"><div>
      <h1>Enterprise depth.<br><em>Full-stack delivery.</em></h1>
      <p class="professional-summary">I’m a senior full-stack software engineer with 15+ years of experience designing, developing, and modernizing enterprise applications across financial services, energy, and technology.</p>
      <div class="intro-actions"><a class="button" href="#work">Explore my work <span>↓</span></a><a class="quiet-link" href="${resumeUrl}" target="_blank" rel="noopener noreferrer">View resume ↗</a></div>
    </div><aside class="profile-brief" aria-label="Professional profile"><span>AT A GLANCE</span><dl>
      <div><dt>EXPERIENCE</dt><dd>15+ years in software engineering</dd></div>
      <div><dt>SPECIALIZATION</dt><dd>Enterprise modernization</dd></div>
      <div><dt>DELIVERY</dt><dd>Full-stack & cloud-native systems</dd></div>
      <div><dt>BASED IN</dt><dd>Columbus, Ohio</dd></div>
    </dl></aside></div>
    <div class="intro-foot"><span>JAVA / PYTHON / REACT / AWS</span><a href="#experience">PROFESSIONAL EXPERIENCE ↓</a></div>
  </section>
  <section class="section alternate" id="work"><div class="shell">
    <div class="section-heading"><div><p class="eyebrow">01 / PERSONAL PROJECT</p><h2>Beyond enterprise.<br><em>Built for people.</em></h2></div><p>A personal project with a live website.<br>Explore the product and its customer experience.</p></div>
    <article class="featured-project">
      <a class="featured-visual" href="/projects/pet-moment-shop/" aria-label="Explore Pet Moment Shop"><img src="/assets/pet-moment-desktop.png" alt="Pet Moment Studio homepage showing a framed dog portrait and keepsakes" width="1440" height="1000" loading="lazy"><span class="visual-open">Explore project ↗</span></a>
      <div class="featured-info"><p class="eyebrow">PERSONAL PROJECT / COMMERCE</p><h3><a href="/projects/pet-moment-shop/">Pet Moment Shop <span>↗</span></a></h3><p>A commission-based storefront for personalized pet keepsakes, with a guided path from product discovery to reservation.</p><div class="project-tags"><span>Product presentation</span><span>Commission journey</span><span>Responsive experience</span></div><div class="project-actions"><a class="button" href="/projects/pet-moment-shop/">View case study <span>→</span></a><a class="quiet-link" href="${projectUrl}" target="_blank" rel="noopener noreferrer">Visit website ↗</a></div></div>
    </article>
  </div></section>
  <section class="section" id="experience"><div class="shell">
    <div class="section-heading"><div><p class="eyebrow">02 / PROFESSIONAL EXPERIENCE</p><h2>Systems that matter.<br><em>Experience that lasts.</em></h2></div><p>Application modernization, distributed services, and production delivery across six organizations.</p></div>
    <div class="career-list">${experience.map((job, i) => `<article class="career-entry"><div class="career-meta"><span class="index">0${i + 1}</span><p>${job.dates}</p></div><div class="career-role"><h3>${job.company}</h3><p>${job.role}</p></div><div class="career-description"><h4>${job.scope}</h4><p>${job.text}</p><span class="tech-line">${job.tech}</span></div></article>`).join('')}</div>
  </div></section>
  <section class="section alternate" id="about"><div class="shell about-layout">
    <div><p class="eyebrow">03 / ABOUT & TECHNICAL STRENGTHS</p><h2>From legacy systems<br>to <em>cloud-native software.</em></h2><p class="about-summary">My work connects backend engineering, responsive interfaces, and the infrastructure needed to run them. I bring a strong background in distributed systems, microservices, and production application support.</p><div class="education"><span class="eyebrow">EDUCATION</span><h3>The Ohio State University</h3><p>B.S. Computer Science and Engineering<br>2005 — 2009</p></div></div>
    <div class="capabilities"><article><span class="index">01 / BACKEND & SYSTEMS</span><h3>Services built to evolve.</h3><p>Java, Python, Spring Boot, FastAPI, REST APIs, Hibernate, and distributed systems.</p></article><article><span class="index">02 / FRONTEND ENGINEERING</span><h3>Connected user experiences.</h3><p>React, TypeScript, Next.js, JavaScript, and responsive web interfaces integrated with enterprise APIs.</p></article><article><span class="index">03 / CLOUD & DELIVERY</span><h3>From code to production.</h3><p>AWS, Terraform, Docker, Kubernetes, Jenkins, Maven, Gradle, and CI/CD automation.</p></article><article><span class="index">04 / RELIABILITY & AUTOMATION</span><h3>Operational responsibility.</h3><p>Secure coding, vulnerability remediation, production diagnostics, disaster recovery, and MCP workflow integrations.</p></article></div>
  </div></section>`;
}
function projectPage() {
  document.title = 'Pet Moment Shop — Steve Wohlwend';
  main.innerHTML = `<section class="shell project-page">
    <a class="breadcrumb" href="/#work">← Personal projects</a>
    <div class="project-intro"><div><p class="eyebrow">PERSONAL PROJECT / COMMERCE</p><h1>Pet Moment<br><em>Shop.</em></h1><p>A personal project centered on a thoughtful digital experience for families commissioning personalized pet keepsakes.</p></div><a class="button" href="${projectUrl}" target="_blank" rel="noopener noreferrer">Visit website <span>↗</span></a></div>
    <figure class="case-hero"><img src="/assets/pet-moment-desktop.png" alt="Desktop view of the live Pet Moment Studio homepage" width="1440" height="1000"><figcaption>Live website · Desktop homepage</figcaption></figure>
    <div class="case-content"><aside><div><span>PROJECT</span><p>Pet Moment Shop</p></div><div><span>CONTEXT</span><p>Personal project</p></div><div><span>EXPERIENCE</span><p>Product discovery & commission reservations</p></div><a class="quiet-link" href="${projectUrl}" target="_blank" rel="noopener noreferrer">petmomentshop.com ↗</a></aside><article>
      <section><span class="index">01 / PRODUCT</span><h2>A personal product.<br>A clear customer journey.</h2><p>The site presents personalized pet keepsakes as a single commissioned collection: portraits, a memory book, a framed portrait, a candle, and a figurine. Product details and the studio process help visitors understand the offer before beginning a reservation.</p></section>
      <section><span class="index">02 / EXPERIENCE</span><h2>Discovery, detail, decision.</h2><p>Editorial imagery introduces the product. Individual pieces receive dedicated descriptions, followed by process guidance and answers to common questions. Commission calls to action provide a consistent next step throughout the page.</p></section>
      <section><span class="index">03 / INTERFACE</span><h2>One experience.<br>Different screens.</h2><p>The desktop layout gives product photography room to lead. On mobile, navigation and content adapt to a narrower screen while keeping the commission journey accessible.</p></section>
    </article></div>
    <div class="case-gallery"><figure class="collection-shot"><img src="/assets/pet-moment-collection.png" alt="Live Pet Moment Shop product collection section" width="1440" height="1000" loading="lazy"><figcaption>Product details · Desktop</figcaption></figure><figure class="mobile-shot"><img src="/assets/pet-moment-mobile.png" alt="Live Pet Moment Studio homepage on a mobile screen" width="390" height="844" loading="lazy"><figcaption>Homepage · Mobile</figcaption></figure></div>
    <div class="case-end"><a href="/#work" class="quiet-link">← Back to projects</a><a href="${projectUrl}" class="button" target="_blank" rel="noopener noreferrer">Explore the live website <span>↗</span></a></div>
  </section>`;
}
function contactPage() {
  document.title = 'Contact Steve Wohlwend — Senior Software Engineer';
  main.innerHTML = `<section class="shell contact-page"><a class="breadcrumb" href="/">← Back to home</a><div class="contact-page-grid"><div class="contact-intro"><p class="eyebrow">STEVE WOHLWEND / COLUMBUS, OHIO</p><h1>Let’s talk<br><em>engineering.</em></h1><p>For software engineering opportunities, project discussions, or technical collaboration, send me a message.</p><div class="contact-direct"><span>EMAIL</span><a href="mailto:${email}">${email} ↗</a></div></div>
    <form id="contact-form" method="post" action="https://formsubmit.co/${encodeURIComponent(email)}"><div class="form-heading"><h2>Get in touch.</h2><span>CONTACT</span></div><div class="field-row"><div><label for="name">Your name <span>*</span></label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div><label for="email">Your email <span>*</span></label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div></div><label for="subject">Subject</label><select id="subject" name="subject"><option>Software engineering opportunity</option><option>Project discussion</option><option>Technical collaboration</option><option>General enquiry</option></select><label for="message">Your message <span>*</span></label><textarea id="message" name="message" rows="6" minlength="10" maxlength="10000" required></textarea><input name="_subject" type="hidden" value="Steve Wohlwend — Portfolio enquiry"><input name="_template" type="hidden" value="table"><input name="_honey" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true"><button type="submit" class="button send-button">Send message <span>↗</span></button><p class="delivery-note">Your name, email, and message are sent through FormSubmit. You can also email me directly.</p><p id="form-status" role="status"></p></form></div></section>`;
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) { e.preventDefault(); form.reportValidity(); return; }
    form.querySelector('.send-button').disabled = true;
    document.querySelector('#form-status').textContent = 'Continuing to secure submission…';
  });
  addEventListener('pageshow', () => { form.querySelector('.send-button').disabled = false; });
}
function notFound() {
  document.title = 'Page not found — Steve Wohlwend';
  main.innerHTML = '<section class="shell project-page"><p class="eyebrow">PAGE NOT FOUND</p><h1>Let’s get you<br><em>back on track.</em></h1><div class="intro-actions"><a href="/" class="button">Back to home →</a></div></section>';
}
const route = location.pathname.replace(/\/+$/, '');
if (!route) home();
else if (route === '/contact') contactPage();
else if (route === '/projects/pet-moment-shop') projectPage();
else notFound();
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0d1524' : '#f7f4ed';
  document.querySelectorAll('button[data-theme]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.theme === theme)));
  try { localStorage.setItem('steve-theme', theme); } catch {}
}
let theme = 'dark';
try { theme = localStorage.getItem('steve-theme') || 'dark'; } catch {}
setTheme(theme === 'light' ? 'light' : 'dark');
document.querySelectorAll('button[data-theme]').forEach(b => b.onclick = () => setTheme(b.dataset.theme));
const menu = document.querySelector('.menu'), navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.onclick = () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); };
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
const progress = document.querySelector('.progress');
function updateProgress() { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%'; }
addEventListener('scroll', updateProgress, { passive: true });
addEventListener('resize', updateProgress);
updateProgress();
document.querySelector('#year').textContent = new Date().getFullYear();
