import Image from "next/image";
import HeroSection from "@/components/herosection";
import Herosection2 from "@/components/herosection2";
import HeroSection3 from "@/components/herosection3";
import ProPos2 from "@/components/propos2"
import AProPos1 from "@/components/propos1"
export default function Home() {
  return (
    <div>
       <HeroSection/>
       <Herosection2/>
       <ProPos2/>
       <AProPos1/>
    </div>
  );
}
