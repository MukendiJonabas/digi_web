import Image from "next/image";
import Dev from "@/public/dev4.jpeg";
export default function HeroSection() {
  return (
    <div>
      <div className=" flex flex-col pt-20 justify-center h-[300px] mb-12 bg-center bg-cover gap-1 sm:h-screen sm:pt-96 sm:px-8 ">
        <div className="max-w-[1200px] w-[100%]  mx-auto px-4 sm:px-0">
          <div className="flex mb-1 p-1 gap-20  mt-2 text-center sm:p-2 w-fit sm:w-fit ">
            <div className="text-[#040c07] items-start justify-center text-left text-4xl text-[28px] font-bold sm:text-[30px]">
              <p className="text-5xl">IT Software Solution & Consultation</p>
              <p className="text-[#040c07]  sm:text-[35px]">
              We transform your challenges into opportunities thanks to high-performance digital solutions
              </p>

              <div className="m-12 ml-1">
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="border-1 border-solid border-[#040c07] bg-[#040c07] text-white px-4 sm:py-2 text-[10px] shadow-xl transition sm:text-[20px] sm:w-fit text-center w-fit py-2 see-video animate__animated animate__bounce animate__infinite"
                >
                 Get more 
                </a>
              </div>
            </div>

            <div className="flex justify-center ml-2">
              <Image
                src={Dev}
                alt="Sample image"
                
                
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mb-1 p-1 sm:p-2 w-fit sm:w-fit"></div>
          <div className="mb-1 p-1 sm:p-2 w-fit sm:w-fit">
            <h1 className="text-[#e4e7e5] text-[28px] font-bold sm:text-[30px]"></h1>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4"></div>
    </div>
  );
}
