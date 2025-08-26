import { motion } from "motion/react";

type Card = {
  logo: string;
  title: string;
  link: string;
};

const CollabCard = ({ logo, title, link }: Card) => {
  return (
    <motion.a
      href={link}
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
    </motion.a>
  );
};

export default CollabCard;
