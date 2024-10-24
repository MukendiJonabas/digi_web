import Image from "next/image";
import Devops from "@/public/devops.jpg";
import Tel from "@/public/image-removebg-preview (2).png";
import Tab from "@/public/image-removebg-preview (3).png";
export default function AProPos1() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 gap-6 flex flex-row sm:px-0 sm:py-16 ">
      <div className="flex flex-col pt-20 justify-center bg-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <div className="flex items-center mb-4">
          <Image src={Tel} alt="Image de la mission" className="rounded-lg" />
          <Image src={Tab} alt="Image de la mission" className="rounded-lg" />
          <p className="text-green-500 font-bold text-xl">
            La plateforme <br />
            DigiPublic est concue <br />
            pour offrire une <br />
            expérience numérique
            <br />
            complète et intégrée <br />
            pour les services <br />
            publics, en s'appuyant <br />
            sur des applications <br />
            web et mobile
          </p>
        </div>
      </div>
    </div>
  );
}
