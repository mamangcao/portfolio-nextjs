export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-6xl mx-auto px-4 lg:px-36 text-black dark:text-white text-xs lg:text-sm py-8 text-center">
        <div className="border-t border-gray-300 mt-4 mb-4"></div>© {year} Abdul
        Haleem Mamangcao. All rights reserved.
      </footer>
  );
}