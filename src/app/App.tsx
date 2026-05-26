/// <reference types="@react-three/fiber" />
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Twitter,
  X,
  Star,
  Trophy,
} from "lucide-react";

const logo = new URL("../images/logo.jpeg", import.meta.url).href;
const Rafah = new URL("../images/Rafah.png", import.meta.url).href;
const Rayah = new URL("../images/Rayah.jpeg", import.meta.url).href;
const Yaqeen = new URL("../images/Yaqeen.png", import.meta.url).href;
const GDG = new URL("../images/GDG.png", import.meta.url).href;
const EstateMap = new URL("../images/EstateMap.png", import.meta.url).href;

const PROJECTS = [
  {
    id: "01",
    title: "Rafah Platform",
    category: "Web Platform",
    year: "2026",
    description:
      "A web-based quality-of-life analysis platform that helps users compare neighborhoods in Jeddah using trusted Saudi data sources, interactive visualizations, and an AI-powered assistant.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "MongoDB"],
    image: Rafah,
    tagColors: ["purple", "blue", "pink", "yellow", "green"],
  },
  {
    id: "02",
    title: "Interactive Web Games Platform",
    category: "Web Platform",
    year: "2026",
    description:
      "A web-based interactive platform designed for workshops and community events, featuring engaging group games that help break the ice and encourage interaction among attendees.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    image: GDG,
    tagColors: ["purple", "blue", "pink", "yellow", "green"],
  },
  {
    id: "03",
    title: "Yaqeen Application",
    category: "UI/UX Design",
    year: "2025",
    description:
      "A UI/UX design project for a Hajj and Umrah application that helps users track Tawaf and Sa’i through a smartwatch while providing real-time family monitoring and essential pilgrimage services.",
    tags: ["Figma"],
    image: Yaqeen,
    tagColors: ["pink"],
  },
  {
    id: "04",
    title: "Rayah Platform",
    category: "Educational Web Platform",
    year: "2025",
    description:
      "An interactive educational web platform showcasing major Islamic historical events through engaging storytelling, visual elements, and immersive user experiences.",
    tags: ["React", "JavaScript", "Figma", "Node.js", "MongoDB"],
    image: Rayah,
    tagColors: ["purple", "blue", "pink", "yellow", "green"],
  },
  {
    id: "05",
    title: "Estate Map",
    category: "Mobile App",
    year: "2024",
    description:
      "A real estate mobile application that allows users to browse property details and enables owners to add and manage properties using Firebase and Google Maps integration.",
    tags: ["Java", "XML", "Firebase", "Google Maps"],
    image: EstateMap,
    tagColors: ["pink", "yellow", "green", "blue"],
  },
];

const AWARDS = [
  {
    year: "2025",
    title: "3rd Place Winner – Historical and Heritage Sites Hackathon",
    org: "Umm Al-Qura University",
    description:
      "Yaqeen Application, a Hajj and Umrah app that tracks Tawaf and Sa’i via a smartwatch, enables real-time family monitoring, and provides essential pilgrimage services.",
    icon: Trophy,
    bg: "bg-[#fdf4ff]",
    iconColor: "text-[#c084fc]",
    iconBg: "bg-[#f3e8ff]",
    borderColor: "border-[#e9d5ff]",
  },
  {
    year: "2026",
    title: "Jahiziyyah Academic Excellence Medal ",
    org: "ETEC",
    description:
      "Honored with the Jahiziyyah Medal by ETEC for achieving exceptional performance in the Jahiziyyah test for the Software Engineering program at the University of Jeddah.",
    icon: Star,
    bg: "bg-[#eff6ff]",
    iconColor: "text-[#60a5fa]",
    iconBg: "bg-[#dbeafe]",
    borderColor: "border-[#bfdbfe]",
  },
];

const TAG_STYLES: Record<string, string> = {
  purple: "bg-[#f3e8ff] text-[#7e22ce]",
  blue: "bg-[#dbeafe] text-[#1d4ed8]",
  pink: "bg-[#fce7f3] text-[#be185d]",
  yellow: "bg-[#fef9c3] text-[#854d0e]",
  green: "bg-[#dcfce7] text-[#166534]",
};

const EXPERIENCE = [
  {
    role: "Web Developer Trainee",
    company: "Development Data Center (DDC)",
    period: "Jun 2025 — Aug 2025",
    location: "Jeddah, Saudi Arabia",
    description:
      "Contributed to the development of Rayah, an interactive educational web application showcasing major Islamic historical events through engaging digital experiences.",
    highlights: [
      "Built and improved interactive web features for the Rayah platform",
      "Worked on story-driven user experiences using visual and audio elements",
      "Collaborated with the development team to enhance usability and content presentation",
    ],
    color: "purple",
    dot: "bg-[#c084fc]",
    badge: "bg-[#f3e8ff] text-[#7e22ce]",
  },
  {
    role: "Web Design & Development Committee Member",
    company: "Google Developer Groups – University of Jeddah",
    period: "Feb 2026 — May 2026",
    location: "Jeddah, Saudi Arabia",
    description:
      "Participated in designing and developing web solutions for student initiatives while collaborating on technical projects and learning activities.",
    highlights: [
      "Designed the UI for a games website used in workshops and activities",
      "Developed the front-end and improved the overall user experience",
    ],
    color: "blue",
    dot: "bg-[#60a5fa]",
    badge: "bg-[#dbeafe] text-[#1d4ed8]",
  },
];

const NAV_LINKS = [
  { label: "Projects", id: "projects" },
  { label: "Awards", id: "awards" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm shadow-purple-100" : ""
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg text-foreground hover:text-[#be185d] transition-colors"
        >
          Eng. Ebtehal
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-sans text-sm font-semibold text-muted-foreground hover:text-[#c084fc] transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="font-sans text-sm font-semibold px-5 py-2 rounded-full bg-[#f472b6] text-white hover:bg-[#ec4899] transition-colors duration-200 shadow-sm"
          >
            Hire Me ✨
          </button>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 py-7 flex flex-col gap-6 shadow-sm">
          {[...NAV_LINKS, { label: "Hire Me ✨", id: "contact" }].map(
            ({ label, id }) => (
              <button
                key={label}
                onClick={() => {
                  scrollTo(id);
                  setMenuOpen(false);
                }}
                className="font-sans text-sm font-semibold text-left text-muted-foreground hover:text-[#c084fc] transition-colors"
              >
                {label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}

function SectionEyebrow({
  children,
  color = "purple",
}: {
  children: React.ReactNode;
  color?: "purple" | "pink" | "blue" | "yellow";
}) {
  const styles = {
    purple: "bg-[#f3e8ff] text-[#7e22ce]",
    pink: "bg-[#fce7f3] text-[#be185d]",
    blue: "bg-[#dbeafe] text-[#1d4ed8]",
    yellow: "bg-[#fef9c3] text-[#854d0e]",
  };
  return (
    <div className="mb-5">
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase ${styles[color]}`}
      >
        {children}
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-72 h-72 rounded-full bg-pink-100 blur-3xl opacity-45 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-yellow-100 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center py-24 lg:py-32">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow color="pink">Full-Stack Developer & UI/UX Designer</SectionEyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-[1.05] text-foreground mb-6"
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8cb2e5 20%, #c084fc 40%, #f472b6 60%, #fbf13c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ebtehal.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-[480px] mb-10 font-sans"
          >
            Software engineering graduate passionate about mobile apps, web development, and UI/UX design,
            focused on creating impactful digital experiences through creativity and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-wrap items-center gap-3 mb-14"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 rounded-full bg-[#8cb2e5] text-white px-7 py-3.5 font-sans text-sm font-semibold hover:bg-[#5685c2] transition-colors shadow-md shadow-purple-200"
            >
              View My Work <ArrowUpRight size={14} />
            </button>
            <a
              href="./docs/Ebtehal_Alzahrani_CV.pdf"
              download="Ebtehal_Alzahrani_CV.pdf"
              className="flex items-center gap-2 rounded-full border-2 border-[#f9a8d4] text-[#be185d] px-7 py-3.5 font-sans text-sm font-semibold hover:bg-[#fce7f3] transition-colors"
            >
              Download CV <Download size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-8"
          >
          </motion.div>
        </div>

        {/* Right Column — Floating Circular Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            // This handles the smooth, infinite up-and-down floating animation
            y: [0, -15, 0]
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.1 },
            scale: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
            y: {
              duration: 2,          // Speed up: lowered from 4s to 2s for a punchier float
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="hidden lg:flex flex-col items-center gap-6"
        >
          {/* Gradient ring around photo */}
          <div
            className="p-[4px] rounded-full shadow-xl shadow-purple-200"
            style={{
              background:
                "linear-gradient(135deg, #8cb2e5 20%, #c084fc 40%, #f472b6 60%, #fbf13c 100%)",
            }}
          >
            <div className="w-72 h-72 rounded-full overflow-hidden bg-[#f3e8ff]">
              <img
                src={logo}
                alt="Ebtehal, Full-Stack Engineer and UI Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-2 bg-white rounded-full border border-border px-4 py-2 shadow-sm">
            <MapPin size={12} className="text-[#f472b6]" />
            <span className="font-sans text-xs text-muted-foreground font-semibold">
              Jeddah, Saudi Arabia
            </span>
          </div>

          {/* Floating color tags */}
          <div className="flex gap-2 flex-wrap justify-center">
            {[
              { label: "React", color: "blue" },
              { label: "Figma", color: "purple" },
              { label: "TypeScript", color: "pink" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${TAG_STYLES[color]}`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#fdf8ff]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <SectionEyebrow color="purple">Selected Work</SectionEyebrow>
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-tight text-foreground">
            Projects I'm proud of
          </h2>
        </motion.div>

        <div className="space-y-6">
          {/* Feature project */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md hover:shadow-purple-100 transition-shadow duration-400"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {PROJECTS[0].category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {PROJECTS[0].year}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                    {PROJECTS[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-md mb-8">
                    {PROJECTS[0].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].tags.map((t, i) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${TAG_STYLES[PROJECTS[0].tagColors[i] ?? "purple"]
                        }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden bg-[#f3e8ff] min-h-[260px]">
                <img
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Two smaller projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.slice(1).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md hover:shadow-purple-100 transition-shadow duration-400"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#eff6ff]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t, j) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${TAG_STYLES[project.tagColors[j] ?? "purple"]
                          }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <SectionEyebrow color="blue">Recognition</SectionEyebrow>
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-tight text-foreground">
            Honors & Awards
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {AWARDS.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-3xl border p-10 ${award.bg} ${award.borderColor} hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${award.iconBg}`}
                  >
                    <Icon size={20} className={award.iconColor} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-medium ${award.iconColor} tracking-wider`}
                      >
                        {award.year}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {award.org}
                      </span>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl text-foreground mb-2 leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#fdf8ff]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <SectionEyebrow color="yellow">Career</SectionEyebrow>
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-tight text-foreground">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#c084fc] via-[#f472b6] to-[#60a5fa] hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-8 w-10 h-10 rounded-full ${job.dot} shadow-md hidden md:flex items-center justify-center`}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-3xl border border-border p-8 lg:p-10 shadow-sm hover:shadow-md hover:shadow-purple-100 transition-shadow duration-300">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl lg:text-2xl text-foreground leading-tight mb-1">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold ${job.badge}`}
                        >
                          {job.company}
                        </span>
                        <span className="font-sans text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap mt-1 bg-[#fdf4ff] px-3 py-1.5 rounded-full border border-[#e9d5ff]">
                      {job.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${job.dot}`}
                        />
                        <span className="text-foreground/80 leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create the FormData object
    const formData = new FormData();
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;

    formData.append("access_key", accessKey);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Web3Forms accepts FormData directly!
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" }); // Clears form on success
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border-2 border-[#e9d5ff] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 text-sm font-sans focus:outline-none focus:border-[#c084fc] transition-colors duration-200";

  return (
    <section id="contact" className="py-28 bg-[#fff0f9] relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-yellow-100 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-100 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <SectionEyebrow color="pink">Get In Touch</SectionEyebrow>
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-tight text-foreground">
            {"Let's build something"}
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #8cb2e5, #c084fc, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              wonderful together.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Open to exciting opportunities, creative collaborations, and new projects. Feel free to reach out — I respond within 24 hours!
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "Ebtehal.alzah@gmail.com",
                  bg: "bg-[#fce7f3]",
                  color: "text-[#f472b6]",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Jeddah, Saudi Arabia",
                  bg: "bg-[#dbeafe]",
                  color: "text-[#60a5fa]",
                },
              ].map(({ Icon, label, value, bg, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${bg}`}
                  >
                    <Icon size={15} className={color} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-foreground text-sm font-sans">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {[
                {
                  Icon: Github,
                  bg: "bg-[#f3e8ff]",
                  color: "text-[#c084fc]",
                  href: "https://github.com/EbtehalAlzahrani",
                  key: "github",
                },
                {
                  Icon: Linkedin,
                  bg: "bg-[#dbeafe]",
                  color: "text-[#60a5fa]",
                  href: "https://www.linkedin.com/in/ebtehal-alzahrani-a89047316",
                  key: "linkedin",
                },
                {
                  Icon: Twitter,
                  bg: "bg-[#fce7f3]",
                  color: "text-[#f472b6]",
                  href: "https://x.com/engbetwo",
                  key: "twitter",
                },
              ].map(({ Icon, bg, color, href, key }) => (
                <a
                  key={key}
                  href={href}
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${bg} ${color} hover:opacity-80 transition-opacity`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="bg-white rounded-3xl border-2 border-[#e9d5ff] p-14 text-center shadow-sm">
                <p className="font-display text-3xl text-[#c084fc] mb-3">
                  Message sent! 🎉
                </p>
                <p className="text-muted-foreground text-sm">
                  {"I'll be in touch within 24 hours. Talk soon!"}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-border p-8 shadow-sm space-y-5"
              >
                {[
                  {
                    id: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email address",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block font-sans text-sm font-semibold text-foreground mb-2"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [id]: e.target.value })
                      }
                      required
                      className={inputClass}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full py-4 font-sans text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-md shadow-pink-200 disabled:opacity-50" // 👈 Added disabled:opacity-50 to make it look faded when clicked
                  style={{
                    background: "linear-gradient(135deg, #c084fc 0%, #f472b6 100%)",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message ✨"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="font-display text-base text-foreground">
          Eng. Ebtehal
        </span>
        <div className="flex items-center gap-7">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-sans text-sm font-semibold text-muted-foreground hover:text-[#c084fc] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
        <span className="font-sans text-xs text-muted-foreground">
          © 2026 Eng. Ebtehal · Made with 💜
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Awards />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
