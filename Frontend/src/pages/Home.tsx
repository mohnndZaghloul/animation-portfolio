import AchievmentSection from "../components/templetes/AchievmentSection";
import ContactSection from "../components/templetes/ContactSection";
import CreativitySection from "../components/templetes/CreativitySection";
import ExperienceSection from "../components/templetes/ExperienceSection";
import FirstSection from "../components/templetes/FirstSection";
import PrinciplesSection from "../components/templetes/PrinciplesSection";
import SecondSection from "../components/templetes/SecondSection";
import SoftwareSection from "../components/templetes/SoftwareSection";

const Home = () => {
  return (
    <main className="bg-black text-white">
      <div className="overflow-hidden pt-20 lg:pt-0">
        <FirstSection />
      </div>
      <ExperienceSection />
      <AchievmentSection />
      <PrinciplesSection />
      <SoftwareSection />
      <SecondSection />
      <CreativitySection />
      <div className="overflow-hidden">
        <ContactSection />
      </div>
    </main>
  )
}

export default Home