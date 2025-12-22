"use client"

import { useState, useEffect } from "react"
import {
  CodeIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  ExternalLinkIcon,
  SparklesIcon,
} from "./components/Icons"

function App() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="animated-bg" />

      {/* Floating orbs - mobile-first positioning */}
      <div
        className="orb orb-green w-64 h-64 md:w-96 md:h-96 top-10 left-5 md:top-20 md:left-10 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb orb-pink w-56 h-56 md:w-80 md:h-80 top-1/2 right-10 md:right-20 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orb orb-green w-48 h-48 md:w-64 md:h-64 bottom-20 left-1/4 md:left-1/3 animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10">
        {/* Navigation - mobile-first */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in w-[90%] max-w-2xl">
          <div className="glass rounded-full px-3 py-2 md:px-6 md:py-3 flex items-center justify-between md:justify-center gap-2 md:gap-6 overflow-x-auto">
            <a
              href="#hero"
              className="text-xs md:text-sm font-medium hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-xs md:text-sm font-medium hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              Sobre
            </a>
            <a
              href="#skills"
              className="text-xs md:text-sm font-medium hover:text-pink-400 transition-colors whitespace-nowrap"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xs md:text-sm font-medium hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              Projetos
            </a>
            <a
              href="#experience"
              className="text-xs md:text-sm font-medium hover:text-pink-400 transition-colors whitespace-nowrap"
            >
              Experiência
            </a>
            <a
              href="#contact"
              className="text-xs md:text-sm font-medium hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              Contato
            </a>
          </div>
        </nav>

        {/* Hero Section - mobile-first */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8">
                <SparklesIcon />
                <span className="text-xs md:text-sm font-medium gradient-text">Disponível para novos projetos</span>
              </div>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <span className="gradient-text">Desenvolvedor</span>
              <br />
              <span className="gradient-text-pink">Full-Stack</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in-up px-4"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              Criando experiências digitais modernas com código limpo, design pensado e atenção aos detalhes
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in-up px-4"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              <a
                href="#projects"
                className="btn-gradient px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-white flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center"
              >
                Ver Projetos
                <ExternalLinkIcon />
              </a>
              <a
                href="#contact"
                className="btn-gradient-pink px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-white flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <MailIcon />
                Contato
              </a>
            </div>

            <div
              className="flex items-center justify-center gap-4 md:gap-6 mt-12 md:mt-16 animate-fade-in"
              style={{ animationDelay: "1s", opacity: 0 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover-glow p-2.5 md:p-3 rounded-full transition-all"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover-glow p-2.5 md:p-3 rounded-full transition-all"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </section>

        {/* About Section - mobile-first */}
        <section id="about" className="py-16 md:py-32 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-12 hover-lift">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="p-2 md:p-3 bg-emerald-500/20 rounded-lg md:rounded-xl">
                  <UserIcon />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold gradient-text">Sobre Mim</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                    Desenvolvedor full-stack com formação técnica e superior completa, com experiência em empresas reais
                    e projetos independentes.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Apaixonado por criar interfaces modernas com animações suaves e experiências memoráveis. Busco
                    constantemente aprender novas tecnologias e melhorar minhas habilidades.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="glass rounded-lg md:rounded-xl p-3 md:p-4 hover-glow gloss-highlight">
                    <h3 className="font-semibold text-emerald-400 mb-1 md:mb-2 text-sm md:text-base">🎓 Formação</h3>
                    <p className="text-gray-400 text-sm md:text-base">Técnico + Ensino Superior completo</p>
                  </div>
                  <div className="glass rounded-lg md:rounded-xl p-3 md:p-4 hover-glow gloss-highlight">
                    <h3 className="font-semibold text-pink-400 mb-1 md:mb-2 text-sm md:text-base">💼 Experiência</h3>
                    <p className="text-gray-400 text-sm md:text-base">Empresas reais + Projetos freelance</p>
                  </div>
                  <div className="glass rounded-lg md:rounded-xl p-3 md:p-4 hover-glow gloss-highlight">
                    <h3 className="font-semibold text-emerald-400 mb-1 md:mb-2 text-sm md:text-base">🎨 Foco</h3>
                    <p className="text-gray-400 text-sm md:text-base">UI moderna, animações e polish visual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - mobile-first */}
        <section id="skills" className="py-16 md:py-32 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
              <div className="p-2 md:p-3 bg-pink-500/20 rounded-lg md:rounded-xl">
                <CodeIcon />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold gradient-text-pink">Skills & Tecnologias</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <div className="glass-strong rounded-xl md:rounded-2xl p-6 md:p-8 hover-lift">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4 md:mb-6">Frontend</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"].map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium gloss-highlight"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-xl md:rounded-2xl p-6 md:p-8 hover-lift">
                <h3 className="text-xl md:text-2xl font-bold text-pink-400 mb-4 md:mb-6">Backend</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"].map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge-pink px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium gloss-highlight"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-xl md:rounded-2xl p-6 md:p-8 hover-lift">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4 md:mb-6">Ferramentas</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Git", "Docker", "Figma", "VS Code", "Vercel", "AWS"].map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium gloss-highlight"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - mobile-first */}
        <section id="projects" className="py-16 md:py-32 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
              <div className="p-2 md:p-3 bg-emerald-500/20 rounded-lg md:rounded-xl">
                <BriefcaseIcon />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold gradient-text">Projetos em Destaque</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin",
                  tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
                  gradient: "from-emerald-500/20 to-emerald-600/20",
                },
                {
                  title: "Social Dashboard",
                  description: "Dashboard de analytics com gráficos interativos e dados em tempo real",
                  tags: ["Next.js", "TypeScript", "Chart.js", "WebSocket"],
                  gradient: "from-pink-500/20 to-pink-600/20",
                },
                {
                  title: "Task Management App",
                  description: "Aplicativo de gerenciamento de tarefas com drag & drop e colaboração",
                  tags: ["React", "Firebase", "Tailwind", "DnD Kit"],
                  gradient: "from-emerald-500/20 to-pink-500/20",
                },
                {
                  title: "AI Chat Assistant",
                  description: "Assistente virtual com IA para atendimento automatizado",
                  tags: ["React", "OpenAI", "Express", "MongoDB"],
                  gradient: "from-pink-500/20 to-emerald-500/20",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-xl md:rounded-2xl p-6 md:p-8 hover-lift gloss-highlight"
                >
                  <div
                    className={`w-full h-32 md:h-40 rounded-lg md:rounded-xl bg-gradient-to-br ${project.gradient} mb-4 md:mb-6 flex items-center justify-center`}
                  >
                    <BriefcaseIcon />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-6 flex gap-3">
                    <button className="text-sm flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                      Ver Demo
                      <ExternalLinkIcon />
                    </button>
                    <button className="text-sm flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors font-medium">
                      <GithubIcon />
                      Código
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section - mobile-first */}
        <section id="experience" className="py-16 md:py-32 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
              <div className="p-2 md:p-3 bg-pink-500/20 rounded-lg md:rounded-xl">
                <BriefcaseIcon />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold gradient-text-pink">Experiência</h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  role: "Desenvolvedor Full-Stack",
                  company: "Tech Company",
                  period: "2023 - Presente",
                  description: "Desenvolvimento de aplicações web modernas usando React, Node.js e PostgreSQL",
                  color: "emerald",
                },
                {
                  role: "Desenvolvedor Frontend",
                  company: "Startup Inc",
                  period: "2021 - 2023",
                  description: "Criação de interfaces responsivas e animações usando React e Tailwind CSS",
                  color: "pink",
                },
                {
                  role: "Desenvolvedor Junior",
                  company: "Digital Agency",
                  period: "2020 - 2021",
                  description: "Manutenção e desenvolvimento de websites institucionais e landing pages",
                  color: "emerald",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-xl md:rounded-2xl p-6 md:p-8 hover-lift relative pl-8 md:pl-12 timeline-item"
                >
                  <div
                    className={`absolute left-0 top-8 md:top-10 w-3 h-3 rounded-full bg-${exp.color}-500 shadow-lg shadow-${exp.color}-500/50`}
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-0">{exp.role}</h3>
                    <span className="text-xs md:text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className={`text-sm md:text-base font-semibold text-${exp.color}-400 mb-2 md:mb-3`}>
                    {exp.company}
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - mobile-first */}
        <section id="contact" className="py-16 md:py-32 px-4 md:px-6 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-strong rounded-2xl md:rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="p-2 md:p-3 bg-emerald-500/20 rounded-lg md:rounded-xl">
                  <MailIcon />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold gradient-text">Vamos Conversar?</h2>
              </div>

              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 leading-relaxed">
                Estou sempre aberto a novos projetos e oportunidades interessantes. Entre em contato e vamos criar algo
                incrível juntos!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href="mailto:seu@email.com"
                  className="btn-gradient px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-white flex items-center gap-2 justify-center text-sm md:text-base"
                >
                  <MailIcon />
                  Enviar Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient-pink px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-white flex items-center gap-2 justify-center text-sm md:text-base"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                <p className="text-xs md:text-sm text-gray-500">© 2025 - Todos os direitos reservados</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
