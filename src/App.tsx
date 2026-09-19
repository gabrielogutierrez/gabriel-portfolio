import gabrielPhoto from './assets/gabriel.jpg'
import flowTaskImage from './assets/flowtask.png'
import flowTaskRecurrence from './assets/flowtask-recorrencia.png'
import fiscalFlowImage from './assets/fiscalflow-cover.png'

const whatsappUrl =
  'https://wa.me/5554999074965?text=Ol%C3%A1%20Gabriel%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.'

const projects = [
  {
    name: 'FlowTask',
    label: 'Projeto em destaque',
    status: 'Em desenvolvimento ativo',
    description:
      'Planner mobile moderno em Flutter com Firebase Authentication, Cloud Firestore em tempo real, notificações locais, histórico, preferências e experiência visual em estilo agenda.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Material 3'],
    href: 'https://github.com/gabrielogutierrez/FlowTask',
    image: flowTaskImage,
    imageAlt: 'Tela do aplicativo FlowTask',
    imageClass: 'project-image-flowtask',
  },
  {
    name: 'FiscalFlow',
    label: 'Arquitetura full stack',
    status: 'Fase inicial',
    description:
      'Plataforma em construção para apoiar a conferência de documentos fiscais eletrônicos, com foco em decisões auditáveis e validação humana.',
    stack: ['C#', '.NET', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Docker'],
    href: 'https://github.com/gabrielogutierrez/FiscalFlow',
    image: fiscalFlowImage,
    imageAlt: 'Capa visual do projeto FiscalFlow',
    imageClass: 'project-image-cover',
  },
]

const skills = [
  ['Backend', 'C#, ASP.NET Core, APIs REST, Entity Framework Core'],
  ['Mobile', 'Flutter, Dart, React Native'],
  ['Frontend', 'TypeScript, Vue.js'],
  ['Dados', 'SQL Server, MySQL, PostgreSQL'],
  ['DevOps & Qualidade', 'Git, GitHub, Docker, testes e CI/CD'],
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a9.78 9.78 0 0 0-8.45 14.7L2.2 21.8l5.22-1.37A9.92 9.92 0 1 0 12 2Zm0 17.95a7.92 7.92 0 0 1-4.04-1.1l-.29-.17-3.1.82.83-3.02-.19-.31A7.96 7.96 0 1 1 12 19.95Zm4.37-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  )
}

export default function App() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav">
          <a className="brand" href="#top">
            <span className="brand-mark">GG</span>
            <span>Gabriel Gutierrez</span>
          </a>

          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
            <a href="#curriculos">Currículos</a>
            <a href="#contato">Contato</a>
          </div>

          <a
            className="nav-button"
            href="https://github.com/gabrielogutierrez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy-column">
          <div className="eyebrow">
            <span className="status-dot" />
            Aberto a novas oportunidades
          </div>

          <h1>
            Eu construo software que <span>resolve problemas reais.</span>
          </h1>

          <p className="hero-copy">
            Sou <strong>Gabriel Gutierrez</strong>, desenvolvedor de software com
            experiência em aplicações web e mobile, APIs, bancos de dados e
            produtos full stack.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Ver projetos ↗
            </a>
            <a
              className="button whatsapp-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
            <a
              className="button secondary"
              href="./curriculos/Gabriel_Gutierrez_Backend_NET.pdf"
              download
            >
              ↓ Baixar currículo
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/gabriel-gutierrez-607607331"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="quick-facts">
            <span>📍 Caxias do Sul, RS</span>
            <span>⌘ Full Stack & Mobile</span>
            <span>🇺🇸 Inglês fluente</span>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" />
          <div className="hero-photo-card">
            <img src={gabrielPhoto} alt="Gabriel Gutierrez" />
            <div className="photo-overlay">
              <strong>Gabriel Gutierrez</strong>
              <span>Desenvolvedor de Software</span>
            </div>
          </div>
          <div className="floating-card floating-card-top">
            <span className="mini-dot" />
            Disponível para conversar
          </div>
          <div className="floating-card floating-card-bottom">
            <strong>Full Stack</strong>
            <span>Web • Mobile • APIs</span>
          </div>
        </div>
      </section>

      <section className="section split" id="sobre">
        <div>
          <p className="kicker">Sobre mim</p>
          <h2>Engenharia com foco no que precisa funcionar.</h2>
        </div>
        <div className="about">
          <p>
            Minha experiência passa por desenvolvimento e manutenção de
            aplicações web e mobile, integrações REST, bancos relacionais,
            testes, debugging e trabalho colaborativo com Git.
          </p>
          <p>
            Gosto de transformar necessidades de negócio em soluções mais
            simples, organizadas e sustentáveis, sem perder de vista experiência
            de uso e qualidade técnica.
          </p>
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading">
          <div>
            <p className="kicker">Projetos selecionados</p>
            <h2>Código que dá contexto ao currículo.</h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/gabrielogutierrez"
            target="_blank"
            rel="noreferrer"
          >
            Ver GitHub ↗
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-top">
                <span>{project.label}</span>
                <span>{project.status}</span>
              </div>

              {project.name === 'FlowTask' ? (
                <div className="flowtask-gallery" aria-label="Telas do FlowTask">
                  <div className="flowtask-shot flowtask-shot-main">
                    <img src={flowTaskImage} alt="Tela principal do FlowTask" />
                  </div>
                  <div className="flowtask-shot flowtask-shot-secondary">
                    <img
                      src={flowTaskRecurrence}
                      alt="Criação de tarefa recorrente no FlowTask"
                    />
                  </div>
                  <a
                    className="project-media-badge gallery-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver projeto ↗
                  </a>
                </div>
              ) : (
                <a
                  className="project-media"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir projeto ${project.name} no GitHub`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className={project.imageClass}
                  />
                  <span className="project-media-badge">Ver projeto ↗</span>
                </a>
              )}

              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.stack.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">
                  Abrir repositório ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experiencia">
        <p className="kicker">Experiência</p>
        <h2>Produto, código e evolução contínua.</h2>

        <div className="timeline">
          <article>
            <span className="dot" />
            <div className="meta">
              <strong>KeyWorks</strong>
              <small>Mar/2025 – Jun/2026</small>
            </div>
            <div>
              <h3>Desenvolvedor Full Stack</h3>
              <p>
                Aplicações web e mobile com Flutter, React Native, C# e
                TypeScript. APIs REST, SQL Server/MySQL, testes, debugging e Git.
              </p>
              <p className="impact">
                Destaque: participação em sistema de RH que tornou o cadastro de
                colaboradores aproximadamente 5× mais rápido.
              </p>
            </div>
          </article>

          <article>
            <span className="dot muted" />
            <div className="meta">
              <strong>Ezex</strong>
              <small>Dez/2024 – Fev/2025</small>
            </div>
            <div>
              <h3>Preparador de Dados</h3>
              <p>
                Rotinas com Windows, computadores e servidores, Active
                Directory, redes e suporte a usuários.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="kicker">Tecnologias</p>
        <h2>Stack que uso para tirar ideias do papel.</h2>
        <div className="skills">
          {skills.map(([title, items]) => (
            <article key={title}>
              <div className="skill-icon">⌘</div>
              <h3>{title}</h3>
              <p>{items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section resume-section" id="curriculos">
        <div className="section-heading resume-heading">
          <div>
            <p className="kicker">Currículo</p>
            <h2>Uma versão para cada tipo de oportunidade.</h2>
            <p className="resume-intro">
              O mesmo perfil profissional, apresentado com foco diferente para
              vagas de backend .NET ou desenvolvimento mobile com Flutter.
            </p>
          </div>
        </div>

        <div className="resume-grid">
          <article className="resume-card">
            <div className="resume-icon">.NET</div>
            <div>
              <span className="resume-tag">Backend</span>
              <h3>Currículo Backend .NET</h3>
              <p>
                Versão direcionada para C#, ASP.NET Core, APIs, bancos de dados
                e desenvolvimento backend/full stack.
              </p>
            </div>
            <a
              className="button primary resume-button"
              href="./curriculos/Gabriel_Gutierrez_Backend_NET.pdf"
              download
            >
              ↓ Baixar PDF
            </a>
          </article>

          <article className="resume-card">
            <div className="resume-icon">FL</div>
            <div>
              <span className="resume-tag">Mobile</span>
              <h3>Currículo Mobile Flutter</h3>
              <p>
                Versão direcionada para Flutter, Dart e desenvolvimento de
                aplicações mobile com experiência em produto.
              </p>
            </div>
            <a
              className="button secondary resume-button"
              href="./curriculos/Gabriel_Gutierrez_Mobile_Flutter.pdf"
              download
            >
              ↓ Baixar PDF
            </a>
          </article>
        </div>
      </section>

      <section className="section contact" id="contato">
        <div>
          <p className="kicker">Contato</p>
          <h2>Tem um produto, uma vaga ou um problema interessante?</h2>
          <p>Fale comigo pelo canal que for mais fácil.</p>
        </div>

        <div className="contact-actions">
          <a
            className="button whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a
            className="button secondary"
            href="./curriculos/Gabriel_Gutierrez_Backend_NET.pdf"
            download
          >
            ↓ Currículo
          </a>
          <a
            className="button secondary"
            href="https://www.linkedin.com/in/gabriel-gutierrez-607607331"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="button secondary"
            href="https://github.com/gabrielogutierrez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <span>Gabriel Gutierrez</span>
        <span>Desenvolvedor de Software</span>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Gabriel pelo WhatsApp"
        title="Falar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  )
}
