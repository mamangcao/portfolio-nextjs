import Card from "./Card";

const certificate = [
  {
    name: "Networking Devices & Initial Configuration",
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
  {
    name: "iDEYA HACK: Health Edition Finalist",
    issuedby: "iDEYA Center",
    year: "36 hrs · 2017",
  },
  {
    name: "CCNA R&S: Connecting Networks",
    issuedby: "CISCO Networking Academy",
    year: "2017",
  },
  {
    name: "CCNA R&S: Scaling Networks",
    issuedby: "CISCO Networking Academy",
    year: "2017",
  },
  {
    name: "CCNA R&S: Routing and Switching Essentials",
    issuedby: "CISCO Networking Academy",
    year: "2017",
  },
  {
    name: "CCNA R&S: Introduction to Networks",
    issuedby: "CISCO Networking Academy",
    year: "2016",
  },
];

export default function Certifications() {
  return (
    <Card title="Certifications">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {certificate.map((cert) => {
          const isLink = Boolean(cert.href);

          return (
            <div
              key={cert.name}
              className={`group relative flex items-center bg-gray-50 dark:bg-black rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800 hover:-translate-y-0.5 transition p-2 ${
                isLink
                  ? "cursor-pointer hover:bg-black dark:hover:bg-white"
                  : "cursor-default hover:bg-gray-100 dark:hover:bg-zinc-950"
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
                    <p className="text-xs font-semibold text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
                      {cert.name}
                    </p>
                    <p className="truncate text-xs font-mono text-gray-600 dark:text-gray-200 mt-1 group-hover:text-gray-200 dark:group-hover:text-gray-700">
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
