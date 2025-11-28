export interface Certificate {
  name: string;
  issuedby: string;
  year: string;
  duration?: string; // optional
  href?: string; // optional
}

export const certificates: Certificate[] = [
  {
    name: "Networking Devices & Initial Configuration",
    issuedby: "CISCO Networking Academy",
    duration: "22 hrs",
    year: "2024",
    href: "https://www.credly.com/badges/d8c5f4f5-f93e-4d19-bc64-1eff2edd4024/public_url",
  },
  {
    name: "Networking Basics",
    issuedby: "CISCO Networking Academy",
    duration: "22 hrs",
    year: "2024",
    href: "https://www.credly.com/badges/1c03517d-fb62-4933-a35d-d12c828f04ec/public_url",
  },
  {
    name: "Technical Support Fundamental",
    issuedby: "Google (Coursera)",
    duration: "19 hrs",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/TGS25BU9F3WC",
  },
  {
    name: "IT Essentials: PC Hardware & Software",
    issuedby: "Bangsamoro ICTO",
    duration: "8 hrs",
    year: "2024",
  },
  {
    name: "Web Accessibility Audit",
    issuedby: "DICT Region 10 - ILCDB",
    duration: "20 hrs",
    year: "2023",
  },
  {
    name: "Web Development for Web Developers",
    issuedby: "DICT Region 10 - ILCDB",
    duration: "40 hrs",
    year: "2023",
  },
  {
    name: "iDEYAHACK: Health Edition Finalist",
    issuedby: "iDEYA: CIT @ MSU-IIT",
    duration: "36 hrs",
    year: "2017",
    href: "https://medium.com/@ideya.cit/ideyahack-launched-2nd-edition-focused-on-health-60ffa4823ad8",
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