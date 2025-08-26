import { IconBrandFacebook } from "@tabler/icons-react";
import { motion } from "motion/react";

type Card = {
  logo: string;
  title: string;
  link: string;
};

const CollabCard = ({ logo, title, link }: Card) => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col gap-3 bg-gray-900 px-6 py-4       rounded-2xl"
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <motion.img
        src={logo}
        alt={`${title} logo`}
        className="w-20 h-20 rounded-full bg-white"
        whileHover={{
          scale: 1.15,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      <p className="text-xl opacity-80">{title}</p>
      <motion.a
        href={link}
        target="_blank"
        className="inline-flex items-center gap-2 text-blue-500
                                 hover:text-blue-400 border-b border-transparent
                                 hover:border-blue-400 w-fit text-lg"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        View Page
        <IconBrandFacebook
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </motion.a>
    </motion.div>
  );
};

export default CollabCard;
