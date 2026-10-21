import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-slate-100">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
