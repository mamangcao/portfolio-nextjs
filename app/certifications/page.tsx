import { certificates } from "@/lib/data/certifications";
import Link from "next/link";
import { ArrowUpRight, MoveLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";

interface Certificate {
  name: string;
  year: string | number;
  href?: string; // optional
  issuedby: string;
  duration: string;
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen dark:bg-midnight-50 fade-in-up">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-36 pt-16 sm:pt-24 pb-12">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="flex mb-2 items-center gap-2 group hover:text-midnight-100 transition-colors"
          >
            <MoveLeft className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-purple-500 dark:group-hover:text-yellow-200 group-hover:-translate-x-2 transition-transform" />
            <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-yellow-200">Abdul Haleem Mamangcao</span>
          </Link>
          <h1 className="text-4xl text-midnight-100 dark:text-white font-bold mb-8">
            All Certifications
          </h1>
        </div>
        <div className="mt-6 sm:mt-8 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="hidden min-w-full divide-y divide-gray-300 dark:divide-zinc-800 md:table">
                <thead className="bg-white dark:bg-midnight-50 sticky top-0 z-10">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0"
                    >
                      Certification Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Issued By
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                  {(certificates as Certificate[]).map((cert) => (
                    <tr key={cert.name}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
                        {cert.year}
                      </td>
                      <td className="whitespace-normal py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 dark:text-white sm:pl-0">
                        {cert.href ? (
                          <a
                            href={cert.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-yellow-200 transition-colors"
                          >
                            <span>{cert.name}</span>
                            <ArrowUpRight className="size-4 text-gray-400 transition-transform group-hover:text-purple-600 dark:group-hover:text-yellow-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                          </a>
                        ) : (
                          <span>{cert.name}</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
                        {cert.issuedby}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
                        {cert.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="md:hidden">
                <div className="sticky top-0 z-10 bg-white dark:bg-midnight-50 border-b border-gray-300 dark:border-zinc-800 px-4 py-3 mb-2">
                  <div className="flex items-center gap-x-3 text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                    <span className="w-12">Year</span>
                    <span className="flex-auto">Certification Details</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-zinc-800 rounded-lg overflow-hidden shadow-sm">
                  {(certificates as Certificate[]).map((cert) => (
                    <div key={cert.name} className="py-4 px-4">
                      <div className="flex items-center gap-x-3">
                        <p className="text-sm text-gray-500 dark:text-gray-200 w-12 flex-shrink-0">
                          {cert.year}
                        </p>
                        <div className="flex-auto">
                          {cert.href ? (
                            <a
                              href={cert.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-yellow-200 transition-colors"
                            >
                              <span>{cert.name}</span>
                              <ArrowUpRight className="size-4 text-gray-400 dark:text-gray-200 transition-transform group-hover:text-purple-600 dark:group-hover:text-yellow-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                              {cert.name}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            {cert.issuedby}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
