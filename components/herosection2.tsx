import Image from "next/image";
import Dev1 from "@/public/let-explore.jpg";
import Dev2 from "@/public/service-cloud.png";
import Dev3 from "@/public/service-dev-2.png";
export default function Herosection2() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 flex flex-row sm:px-0 sm:py-16 ">
         
    <div className="flex flex-row w-full h-48 sm:h-[100%]  justify-between gap-2 pt-4 sm:py-4 sm:gap-6">
        <div className="flex flex-col w-full h-50 aos-init aos-animate">
            <div className="congo w-30 h-24 sm:h-[60%]">
            <Image
                src={Dev1}
                alt="ndunda"
                />
            </div>
            
            <div className="bg-white w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center ">
                
                <h3 className="text-[#040c07] text-[9px] px-2 font-bold sm:text-[25px] text-start ">Custom development</h3>
                <p className="px-2 text-[#040c07] font-normal text-[5px] sm:text-[15px] text-start">Creation of customized software to meet the specific needs of your company.</p>
                <a href="" target="_blank" rel="noreferrer" className="ml-2 mt-3 border-1 border-solid border-[#040c07] bg-[#040c07] text-white py-1 px-1 text-[7px] w-14 h-5 sm:text-[15px] sm:w-32 sm:h-10 flex items-center justify-center ">Get more</a>
                </div>
                </div>
                <div className="flex flex-col w-full h-50 aos-init aos-animate" data-aos="fade-up">
                    <div className="congolicious w-30 h-24 sm:h-[60%] ">
                        
                    <Image
                src={Dev2}
                alt="ndunda"
                />
                        </div>
                        <div className="bg-white w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center">
                            <h3 className="text-[#040c07] text-[8px] px-2 font-bold sm:text-[25px] text-start ">Cloud computing </h3>
                            <p className="px-2 text-[#040c07] font-normal text-[5px] sm:text-[15px] text-start">Provision of virtual infrastructure (servers, storage, networks) on demand via cloud services</p>
                            <a className="ml-2 mt-3 border-1 border-solid border-[#040c07] bg-[#040c07] text-white text-center flex items-center justify-center py-0 px-0 text-[7px] w-14 h-4 sm:text-[15px] sm:w-32 sm:h-10 " href="/congolicious-book">Get more</a>
                            </div>
                            </div>
                            <div className="flex flex-col w-full aos-init aos-animate" data-aos="fade-up">
                                <div className="bibititude w-30 h-24 sm:h-[60%]">
                                <Image
                                src={Dev3}
                                alt="ndunda"
                                  />   
                                </div>
                                <div className="bg-white w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center">
                                    <h3 className="px-2 text-[#040c07] text-[8px] font-bold sm:text-[25px] text-start ">IT Strategy Consulting</h3>
                                    <p className="px-2 text-[#040c07] font-normal text-[5px] sm:text-[15px] text-start">Helping businesses define a technology strategy based on their business goals</p>
                                    <a className="ml-2 mt-3 border-1 border-solid border-[#040c07] bg-[#040c07] text-white text-center flex items-center justify-center py-1 px-1 text-[7px] w-14 h-5 sm:text-[15px] sm:w-32 sm:h-10 " href="/bibititude">Get more</a>
                                    </div>
                                    </div>
                                    </div>

                                    </div>
  );
}
