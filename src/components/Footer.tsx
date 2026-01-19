import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-4 py-6 flex lg:justify-between items-center text-gray-400 lg:flex-row flex-col gap-3">
      <p>&copy; 2024 Triple K Sports.</p>

      <div className="flex gap-2">
        <a
          className="hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          href="https://www.facebook.com/TripleKSportss"
        >
          <IconBrandFacebook />
        </a>
        <a
          className="hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          href="https://www.instagram.com/tripleksports/"
        >
          <IconBrandInstagram />
        </a>
      </div>
      <a
        href="https://www.linkedin.com/in/poudelsuyog/"
        className="flex gap-1 justify-center items-center hover:text-gray-300 transition-colors duration-200"
        target="_blank"
      >
        Developer ID:
        <IconBrandLinkedin />
      </a>
    </div>
  );
};

export default Footer;
