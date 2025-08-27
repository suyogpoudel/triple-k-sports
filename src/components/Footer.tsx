import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-4 py-6 flex justify-between align-items text-gray-400">
      <p>&copy; 2024 Triple K Sports. All Rights Reserved.</p>

      <div className="flex gap-2">
        <a target="_blank" href="https://www.facebook.com/TripleKSportss">
          <IconBrandFacebook />
        </a>
        <a target="_blank" href="https://www.instagram.com/tripleksports/">
          <IconBrandInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
