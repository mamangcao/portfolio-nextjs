import Card from "./Card";
import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/lib/data/certifications";

export default function Certifications() {
  // Get only the 6 recent certifications
  const recentCertificates = certificates.slice(0, 6);

  return (
    <Card title="Recent Certifications" viewAllLink="/certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {recentCertificates.map((cert) => {
          const isLink = Boolean(cert.href);
          
          const footerText = cert.duration
            ? `${cert.duration} · ${cert.year}`
            : cert.year;

          return (
            <div
              key={cert.name}
              className={`group relative flex items-center bg-gray-50 dark:bg-midnight-100 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800 hover:-translate-y-0.5 transition p-2 ${
                isLink ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="min-w-0 flex-1">
                {isLink ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-hidden"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold text-black dark:text-white">
                        {cert.name}
                      </p>
                      <ArrowUpRight className="size-4 text-gray-700 dark:text-gray-200 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all flex-shrink-0" />
                    </div>
                    <p className="truncate text-xs font-mono text-gray-600 dark:text-gray-200 mt-1">
                      {cert.issuedby} · {footerText}
                    </p>
                  </a>
                ) : (
                  <>
                    <p className="text-xs font-semibold text-black dark:text-white">
                      {cert.name}
                    </p>
                    <p className="truncate text-xs font-mono text-gray-600 dark:text-gray-200 mt-1">
                      {cert.issuedby} · {footerText}
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}