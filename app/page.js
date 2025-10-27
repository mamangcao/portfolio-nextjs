import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Eligibility from "@/components/Eligibility";
// import Footer from "@/components/Footer";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto lg:px-28">
        <Hero />
      </section>

      {/* About Me */}
      <section className="max-w-6xl mx-auto px-4 lg:px-36">
        <AboutMe />
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-4 lg:px-36 grid gap-3 grid-rows-[repeat(4,auto)] lg:grid-cols-2 lg:auto-rows-auto">
        {/* Education */}
        <div className="order-1 lg:row-start-1 lg:col-start-2">
          <Education />
        </div>

        {/* Eligibility */}
        <div className="order-2 lg:row-start-2 lg:col-start-2">
          <Eligibility />
        </div>

        {/* Experience */}
        <div className="order-3 lg:row-start-1 lg:row-end-4 lg:col-start-1">
          <Experience />
        </div>

        {/* Tech Stack */}
        <div className="order-4 lg:row-start-3 lg:col-start-2">
          <TechStack />
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-4 lg:px-36 mt-3 lg:mt-1">
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
