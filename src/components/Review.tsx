import { motion } from "motion/react";

type Review = {
  picture: string;
  author: string;
  review: string;
};

const Review = ({ picture, author, review }: Review) => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col gap-3 bg-gray-900 px-6 py-4       rounded-2xl"
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <motion.img
        src={picture}
        alt={author}
        className="w-20 h-20 rounded-full bg-white border-2 border-cyan"
        whileHover={{
          scale: 1.15,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      <p className="text-xl opacity-80">{author}</p>
      <p>{review}</p>
    </motion.div>
  );
};

export default Review;
