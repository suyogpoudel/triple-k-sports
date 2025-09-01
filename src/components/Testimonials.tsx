import Review from "./Review";
import BK from "../assets/bk.jpeg";
import DC from "../assets/dc.png";
import MW from "../assets/mw.png";
import LB from "../assets/lokeshbam.jpg";
import DWC from "../assets/dwc.png";
import KM from "../assets/km.png";
import ST from "../assets/sujanthapalia.jpeg";
import SM from "../assets/shermalla.jpg";

const Testimonials = () => {
  return (
    <div className="min-h-dvh bg-dark text-gray-200 flex flex-col items-center py-15 px-6">
      <h2 className="text-3xl font-monteserrat mb-8 font-bold text-cyan max-sm:text-2xl">
        Testimonials
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Review
          picture={ST}
          author={"Sujan Thapaliya"}
          review={
            "Working with Triple K Sports has been amazing. Their creativity and support let me focus fully on my game. Highly recommend them to any athlete. Excited for what’s ahead!"
          }
        />
        <Review
          picture={SM}
          author={"Sher Malla"}
          review={
            "Triple K sports has been incredible in helping me connect with fans and share my cricket journey on and off the field. Their professionalism and creativity have taken my profile to the next level."
          }
        />
        <Review
          picture={BK}
          author={"Biratnagar Kings"}
          review={
            "Triple K Sports played a key role in making Season 1 of the NPL a success, managing our Fan TV and creating impactful content for our main page that significantly boosted our reach."
          }
        />
        <Review
          picture={DC}
          author={"Duhabi Capitals"}
          review={
            "Triple K Sports gave us outstanding support in both the KPL and MPL, managing our media presence and creating engaging content that helped us connect with fans more effectively."
          }
        />
        <Review
          picture={MW}
          author={"Mithila Warriors"}
          review={
            "Triple K Sports provided excellent support during the season, managing our media activities and creating engaging content that enhanced our fan engagement and overall reach."
          }
        />
        <Review
          picture={DWC}
          author={"Dhangadhi Wildcats"}
          review={
            "In the fast-paced energy of NKL, Triple K Sports was the power behind our voice. From sharp media coverage to engaging fan content, they kept the Wild Cats spirit alive and reaching further than ever."
          }
        />
        <Review
          picture={LB}
          author={"Lokesh Bam"}
          review={
            "As a player, I’m grateful to have Triple K Sports as my media partner. They’ve helped keep my fans updated about my performances with instant news and some of the best graphics in Nepal."
          }
        />
        <Review
          picture={KM}
          author={"Kathmandu Mavericks"}
          review={
            "Triple K Sports captured our spirit in every moment, turning our NKL journey into engaging stories that truly resonated with our fans. Truly appreciate their work!"
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
