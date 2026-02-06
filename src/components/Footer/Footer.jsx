import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-gray-900 py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Arbaz Ahmad Ansari</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              link: "https://github.com/Arbaz-Ansari-ABM",
              icon: <FaGithub size={24} />,
              label: "GitHub"
            },
            {
              link: "https://www.linkedin.com/in/arbaz-ahmad-ansari-a2b53621b/",
              icon: <FaLinkedin size={24} />,
              label: "LinkedIn"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#8245ec] text-xl transition-transform transform hover:scale-110"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-600 mt-6">
          © {new Date().getFullYear()} Arbaz Ahmad Ansari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
