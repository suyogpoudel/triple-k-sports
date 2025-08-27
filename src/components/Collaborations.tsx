import CollabCard from "./CollabCard";
import BK from "../assets/bk.jpeg";
import DC from "../assets/dc.png";
import MW from "../assets/mw.png";
import PL from "../assets/pl.png";
import DWC from "../assets/dwc.png";
import KM from "../assets/km.png";

const Collaborations = () => {
  return (
    <div className=" bg-dark text-gray-200 flex flex-col items-center py-12 px-6 border-b-2 border-gray-200">
      <h2 className="text-3xl font-monteserrat mb-8 font-bold text-cyan">
        Collaborations
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CollabCard
          logo={BK}
          title="Biratnagar Kings"
          link="https://www.facebook.com/biratnagarkingsofficial/"
        />
        <CollabCard
          logo={MW}
          title="Mithila Warriors"
          link="https://www.facebook.com/MithilaWarriors/"
        />
        <CollabCard
          logo={PL}
          title="Pokhara Lakers"
          link="https://www.facebook.com/profile.php?id=61572304433255"
        />
        <CollabCard
          logo={DC}
          title="Duhabi Capitals"
          link="https://www.facebook.com/Duhabicapitals/"
        />
        <CollabCard
          logo={DWC}
          title="Dhangadhi Wildcats"
          link="https://www.facebook.com/Baagaayobaag"
        />
        <CollabCard
          logo={KM}
          title="Kathmandu Mavericks"
          link="https://www.facebook.com/kathmavericks/"
        />
      </div>
    </div>
  );
};

export default Collaborations;
