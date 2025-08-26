import { useState } from "react";
import Logo from "../assets/logo.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "#featured", label: "Featured" },
    { href: "#collaborations", label: "Collaborations" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#wonders", label: "Wonders" },
    { href: "#contact", label: "Hire Us" },
  ];

  return (
    <nav className="bg-gray-200 fixed w-full top-0 z-50 shadow-md">
      <div className="px-4 py-2 flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="flex gap-2 justify-center items-center">
          <img src={Logo} alt="Triple K Sports Logo" className="w-10" />
          <p className="text-lg text-cyan font-fjalla">TRIPLE K SPORTS</p>
        </a>

        <div className="hidden md:flex gap-6 text-md text-cyan-800">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:border-b-2 border-cyan hover:font-semibold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-cyan-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 pb-4 flex flex-col gap-3 text-cyan-800">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:border-b-2 border-cyan hover:font-semibold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
