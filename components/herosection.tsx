import Image from "next/image";
import Dev from "../public/dev4.jpeg";
import Web from "@/public/agence-web.webp";
import logo from "@/public/logo-inline-green.png";
export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden backdrop-blur-sm bg-local bg-gray-900 py-24 sm:py-32">
      <div className="relative custom-image w-full h-screen isolate overflow-hidden bg-gray-900">
        <div className="absolute inset-0 -z-10 h-full w-full object-cover object-right backdrop-blur-sm bg-indigo-500 opacity-25">
          <Image
            src={Web}
            layout="fill"
            objectFit="cover"
            alt="Image de fond"
            quality={100}
          />
        </div>

        <div className=" relative flex  pt-20 justify-center h-[300px] mb-12 bg-center bg-cover gap-1 sm:h-screen sm:pt-96 sm:px-8 ">
          <div className="max-w-[1200px] w-[100%]  mx-auto px-4 sm:px-0">
            <div className="flex mb-1 p-1 gap-20  mt-2 text-center sm:p-2 w-fit sm:w-fit ">
              <div className="text-[#040c07] items-start justify-center text-left text-4xl text-[28px] font-bold sm:text-[30px]">
                <Image src={logo} alt="" width={300} />
                <p className="text-white  sm:text-[35px]">
                  We transform your challenges into opportunities thanks to
                  high-performance digital solutions
                </p>

                <div className="m-12 ml-1">
                  <a
                    href=""
                    rel="noreferrer"
                    target="_blank"
                    className="border-1 border-solid  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white px-4 sm:py-2 text-[10px] shadow-xl transition sm:text-[20px] sm:w-fit text-center w-fit py-2 see-video animate__animated animate__bounce animate__infinite"
                  >
                    Get more
                  </a>
                </div>
              </div>

              <div className="flex justify-center ml-2"></div>
            </div>
            <div className="mb-1 p-1 sm:p-2 w-fit sm:w-fit"></div>
            <div className="mb-1 p-1 sm:p-2 w-fit sm:w-fit">
              <h1 className="text-[#e4e7e5] text-[28px] font-bold sm:text-[30px]"></h1>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  );
}
