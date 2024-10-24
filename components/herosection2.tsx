import Image from "next/image";
import Dev1 from "@/public/let-explore.jpg";
import Dev2 from "@/public/service-cloud.png";
import Dev3 from "@/public/service-dev-2.png";
import OIP from "@/public/OIP (1).jpg"
import BS from "@/public/BS_softDevelop-copy-3.png";
import Vision from "@/public/image-removebg-preview (1).png"
import Prs from "@/public/image-removebg-preview.png"
export default function Herosection2() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 gap-6 flex flex-row sm:px-0 sm:py-16 ">
      <div className="flex flex-row w-full h-48 sm:h-[100%]  justify-between gap- pt-4 sm:py-4 sm:gap-6">
        <div className="flex flex-col w-full h-50 aos-init aos-animate">
          <div className="congo w-30 h-24 sm:h-[60%]">
            <Image src={Vision} alt="ndunda" />
          </div>

         
            
          </div>
        </div>
        <div
          className="flex flex-col w-full h-50 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="congolicious w-30 h-24 sm:h-[60%] ">
            <Image src={Prs} alt="ndunda" />
          </div>
          
        </div>
        
        </div>
      
    
  );
}
