import { motion } from "motion/react";
// import Poster10 from "../assets/poster10.jpg";
// import Poster3 from "../assets/poster3.jpg";
import Logo from "../assets/favicon.png";
import BG from "../assets/bg.jpg";

// const cards = [
//   { src: Poster10, alt: "Kalapatthar", rotate: -15, x: -70, z: 0 },
//   { src: Poster3, alt: "King Sandeep", rotate: 15, x: 70, z: 20 },
// ];

const Home = () => (
  <div className="relative min-h-dvh flex justify-center items-center border-b-2 border-gray-200 px-6 text-gray-200">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    />
    {/* Overlay to reduce opacity */}
    <div className="absolute inset-0 bg-dark/75" />{" "}
    {/* 40% opacity black overlay */}
    {/* Main content */}
    <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-w-6xl">
      {/* Text Section */}
      <div className="flex flex-col gap-5 lg:w-[60%] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-monteserrat text-cyan leading-snug font-bold">
          Connecting Sports with the World.
        </h1>
        <p className="text-lg sm:text-xl opacity-90">
          Let’s build the future of sports together with us, where passion meets
          strategy, and every game transforms into a lasting brand story.
        </p>

        <div className="flex justify-center lg:justify-start gap-2">
          <motion.a
            href="https://wa.me/message/6RGDTTFJPRQMO1"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "#43b7be" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border-2 border-cya text-lg sm:text-xl px-4 py-2 rounded-lg cursor-pointer bg-cyan text-dark"
          >
            Contact Us!
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border-2 border-cyan text-cyan text-lg sm:text-xl px-4 py-2 rounded-lg cursor-pointer hover:bg-cyan hover:text-dark"
          >
            Hire Us!
          </motion.a>
        </div>
      </div>

      {/* Poster Stack */}
      {/* <div className="relative w-48 h-64 sm:w-60 sm:h-80 overflow-visible">
        {cards.map((card, i) => (
          <motion.img
            key={i}
            src={card.src}
            alt={card.alt}
            className="absolute top-0 left-0 h-full rounded-xl shadow-lg cursor-pointer"
            style={{ zIndex: card.z }}
            initial={{ rotate: card.rotate, x: card.x }}
            whileHover={{
              rotate: 0,
              x: 0,
              scale: 1.05,
              zIndex: 50,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </div> */}

      <motion.img
        src={Logo}
        alt="Logo"
        className="w-[30%] max-sm:w-[75%]"
        initial={{
          scale: 1,
        }}
        animate={{
          scale: [1.05, 1],
          y: [0, -5],
          x: [0, -5],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeatType: "mirror",
          repeat: Infinity,
        }}
      />
    </div>
  </div>
);

export default Home;
