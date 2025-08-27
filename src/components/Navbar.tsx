import { useState } from "react";
import Logo from "../assets/logo.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#", label: "Home" },
    { href: "#featured", label: "Featured" },
    { href: "#collaborations", label: "Collaborations" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#wonders", label: "Wonders" },
    { href: "#contact", label: "Hire Us" },
  ];

  return (
    <nav className="bg-gray-200 fixed w-full top-0 z-50 shadow-md overflow-x-hidden">
      <div className="px-4 py-2 flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Logo */}
        <a href="#" className="flex gap-2 justify-center items-center">
          <img
            src={Logo}
            alt="Triple K Sports Logo"
            className="w-12" // ✅ replaced scale-150 with fixed width
          />
          <p className="text-lg text-cyan-2 font-fjalla">TRIPLE K SPORTS</p>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-md text-cyan-800">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group transition duration-300"
            >
              <span className="transition-colors duration-300 group-hover:text-cyan-600">
                {link.label}
              </span>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 w-full px-6 pb-4 flex flex-col gap-3 text-cyan-800 overflow-x-hidden">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group py-1 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition-colors duration-300 group-hover:text-cyan-600">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
