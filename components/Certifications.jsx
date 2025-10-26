import Card from "./Card";

const certificate = [

  {
    name: "Networking Devices & Initial Configuration",
    issuedby: "CISCO Networking Academy",
    year: "2024",
  },
  {
    name: "Networking Basics",
    issuedby: "CISCO Networking Academy",
    year: "2024",
  },
  {
    name: "Technical Support Fundamental",
    issuedby: "Google (through Coursera)",
    year: "2024",
  },
  {
    name: "IT Essentials: PC Hardware & Software",
    issuedby: "Bangsamoro ICTO",
    year: "2024",
  },
  { name: "Web Accessibility Audit",
    issuedby: "DICT Region 10 - ILCDB",
    year: "2023", },
  {
    name: "Web Development for Web Developers",
    issuedby: "DICT Region 10 - ILCDB",
    year: "2023",
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
        {certificate.map((cert) => (
          <div
            key={cert.name}
            className="group relative flex items-center bg-gray-50 dark:bg-black rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800 hover:bg-black dark:hover:bg-white hover:-translate-y-0.5 transition p-2"
          >
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-hidden">
                <span aria-hidden="true" className="absolute inset-0" />
                <p className="text-xs font-semibold text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
                  {cert.name}
                </p>
                <p className="truncate text-xs font-mono text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-200 dark:group-hover:text-gray-700">
                  {cert.issuedby}{" "}· {cert.year}

                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
