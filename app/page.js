import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Eligibility from "@/components/Eligibility";
import Hackathon from "@/components/Hackathon";
import BeyondCoding from "@/components/BeyondCoding";
// import Footer from "@/components/Footer";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto lg:px-28">
        <Hero />
      </section>

      <section className="max-w-6xl mx-auto px-4 lg:px-36 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><AboutMe /></div>
        <div className="flex flex-col gap-4 lg:gap-2">
          <Education/>
          <Eligibility/>
          </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 lg:px-36 py-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <Experience />
          </div>
        <div className="flex flex-col gap-4">
          <Hackathon/>
          <TechStack/>
          <BeyondCoding/>
          </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-4 lg:px-36">
        <Projects />
      </section>

      <section className="max-w-6xl mx-auto px-4 lg:px-36 py-3 lg:py-4">
        <Certifications />
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 lg:px-36 text-black dark:text-white text-xs lg:text-sm py-8 text-center">
        <div className="border-t border-gray-300 mt-4 mb-4"></div>© {year} Abdul
        Haleem Mamangcao. All rights reserved.
      </footer>
    </main>
  );
}
