import HeroSection from "@/components/HeroSection";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import ThreeLineDivider from '@/components/ThreeLineDivider'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ThreeLineDivider />
      <PublicationsSection />
      <ThreeLineDivider />
      <ProjectsSection />
      <ThreeLineDivider />
      <ExperienceSection />
      <ThreeLineDivider />
      <EducationSection />
      <ThreeLineDivider />
      <SkillsSection />
      <ThreeLineDivider />
      <ContactSection />
    </main>
  )
}
