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

      {/* Experience + Side Info */}
      <section className="max-w-6xl mx-auto px-4 lg:px-36 py-4 grid md:grid-cols-2 gap-3">
        <div className="md:col-span-1">
          <Experience />
        </div>
        <div className="flex flex-col gap-3">
          <Education />
          <Eligibility />
          <TechStack />
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-4 lg:px-36 py-4">
        <Projects />
      </section>

      <section className="max-w-6xl mx-auto px-4 lg:px-36">
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
