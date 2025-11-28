import Card from "./Card"
import { ArrowUpRight } from "lucide-react";

const certificate = [
  {
    name: "Networking Devices & Initial Config.",
    issuedby: "CISCO NetAcad",
    year: "22 hrs · 2024",
    href: "https://www.credly.com/badges/d8c5f4f5-f93e-4d19-bc64-1eff2edd4024/public_url",
  },
  {
    name: "Networking Basics",
    issuedby: "CISCO NetAcad",
    year: "22 hrs · 2024",
    href: "https://www.credly.com/badges/1c03517d-fb62-4933-a35d-d12c828f04ec/public_url",
  },
  {
    name: "Technical Support Fundamental",
    issuedby: "Google (Coursera)",
    year: "19 hrs · 2024",
    href: "https://www.coursera.org/account/accomplishments/verify/TGS25BU9F3WC",
  },
  {
    name: "IT Essentials: PC Hardware & Software",
    issuedby: "Bangsamoro ICTO",
    year: "8 hrs · 2024",
  },
  {
    name: "Web Accessibility Audit",
    issuedby: "DICT Region 10 - ILCDB",
    year: "20 hrs · 2023",
  },
  {
    name: "Web Development for Web Developers",
    issuedby: "DICT Region 10 - ILCDB",
    year: "40 hrs · 2023",
  },
];

export default function Certifications() {
  return (
    <Card title="Recent Certifications" viewAllLink="/certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {certificate.map((cert) => {
          const isLink = Boolean(cert.href);
          return (
            <div
              key={cert.name}
              className={`group relative flex items-center bg-gray-50 dark:bg-midnight-100 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800 hover:-translate-y-0.5 transition p-2 ${
                isLink
                  ? "cursor-pointer"
                  : "cursor-default"
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
                      {cert.issuedby} · {cert.year}
                    </p>
                  </a>
                ) : (
                  <>
                    <p className="text-xs font-semibold text-black dark:text-white">
                      {cert.name}
                    </p>
                    <p className="truncate text-xs font-mono text-gray-600 dark:text-gray-200 mt-1">
                      {cert.issuedby} · {cert.year}
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
