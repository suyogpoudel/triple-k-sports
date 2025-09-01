import Poster11 from "../assets/poster11.jpg";
import Poster12 from "../assets/poster12.jpg";
import Poster3 from "../assets/poster3.jpg";
import Poster4 from "../assets/poster4.jpg";
import Poster13 from "../assets/poster13.jpg";
import Poster6 from "../assets/poster6.jpg";
import Poster14 from "../assets/poster14.jpg";
import Poster15 from "../assets/poster15.jpg";
import Poster16 from "../assets/poster16.jpg";
import Poster17 from "../assets/poster17.jpg";
import Poster18 from "../assets/poster18.jpg";
import Poster21 from "../assets/poster21.jpg";

const posters = [
  { src: Poster12, alt: "Poster 12" },
  { src: Poster13, alt: "Poster 13" },
  { src: Poster6, alt: "Poster 6" },
  { src: Poster14, alt: "Poster 14" },
  { src: Poster3, alt: "Poster 3" },
  { src: Poster11, alt: "Poster 11" },
  { src: Poster4, alt: "Poster 4" },
  { src: Poster18, alt: "Poster 18" },
  { src: Poster15, alt: "Poster 15" },
  { src: Poster16, alt: "Poster 16" },
  { src: Poster17, alt: "Poster 17" },
  { src: Poster21, alt: "Poster 21" },
];

const Featured = () => {
  return (
    <div className="min-h-dvh bg-dark text-gray-200 flex flex-col items-center py-15 px-6">
      <h2 className="text-3xl font-monteserrat mb-8 font-bold text-cyan max-sm:text-2xl">
        Featured Posters
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {posters.map((poster, i) => (
          <div key={i} className="w-full">
            <img
              src={poster.src}
              alt={poster.alt}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
