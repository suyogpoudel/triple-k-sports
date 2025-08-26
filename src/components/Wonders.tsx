import Wonder1 from "../assets/wonder1.jpg";
import Wonder2 from "../assets/wonder2.jpg";
import Wonder3 from "../assets/wonder3.jpg";
import { motion } from "motion/react";

const wonders = [
  {
    src: Wonder1,
    alt: "Wonder 1",
    link: "https://www.facebook.com/photo.php?fbid=122123929712562988&set=pb.61566889644844.-2207520000&type=3",
  },
  {
    src: Wonder2,
    alt: "Wonder 2",
    link: "https://www.facebook.com/photo/?fbid=122123065838798956&set=a.122120729498798956",
  },
  {
    src: Wonder3,
    alt: "Wonder 3",
    link: "https://www.facebook.com/photo.php?fbid=122125288112562988&set=pb.61566889644844.-2207520000&type=3",
  },
];

const Wonders = () => {
  return (
    <div className="min-h-dvh bg-dark text-gray-200 flex flex-col items-center py-12 px-6 border-b-2 border-gray-200">
      <h2 className="text-3xl font-monteserrat font-bold mb-2">
        Crafting Wonders
      </h2>
      <h3 className="text-lg mb-6 opacity-75">Where we created magic</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {wonders.map((wonder, i) => (
          <div key={i} className="w-full">
            <img
              src={wonder.src}
              alt={wonder.alt}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <motion.a
              target="_blank"
              href={wonder.link}
              className="text-blue-400 underline"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              View Post &rarr;
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wonders;
