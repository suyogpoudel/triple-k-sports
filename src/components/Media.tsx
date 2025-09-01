import KKK from "../assets/kkk.png";
import SS from "../assets/ss.png";

const partners = [
  {
    src: KKK,
    alt: "Khel Ko Kura logo",
    title: "Khel Ko Kura",
    link: "https://www.instagram.com/khelkokura/",
  },
  {
    src: SS,
    alt: "Sports Sphere logo",
    title: "Sports Sphere",
    link: "https://www.instagram.com/sportssphere.np/",
  },
];

const Media = () => {
  return (
    <div className="bg-dark text-gray-200 flex flex-col items-center py-15 px-6">
      <h2 className="text-3xl font-monteserrat mb-8 font-bold text-cyan max-sm:text-2xl">
        Media Outreach Partners
      </h2>

      <div className="grid grid-cols-2 gap-6 m-auto">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="w-full flex flex-col justify-center items-center gap-2"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="w-24 rounded-full"
            />
            <p className="text-xl">{partner.title}</p>
            <a
              className="text-cyan underline hover:text-[#43b7be] hover:translate-x-1.25 hover:-translate-y-2.25 transition-transform duration-500 -translate-y-1"
              href={partner.link}
              target="_blank"
            >
              View Page
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
