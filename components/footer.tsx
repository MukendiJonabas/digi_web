//import digi from "../public/group.png";
import partenaires from "../public/partenaires.png";
import Image2 from "../public/Image-2-removebg-preview.png";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-600">
      <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
        <section className="bg-white w-auto h-auto flex flex-col md:flex-row p-5 basis-7/12">
          <Image
            src={partenaires}
            alt="une image ratée"
            className="object-contain h-80 w-full"
          />
        </section>
        <section className="bg-white  pl-2 p-2  basis-7/12  rounded">
          <p className="text-[0.9rem] font-semibold text-lime-800">
            {" "}
            Faire Marché avec la digitalisation est notres VISION
          </p>
          <Image
            src={Image2}
            alt="une image ratée"
            className="object-contain  w-full rounded-xl h-full"
          />
        </section>
      </section>
      <section className=" w-full flex flex-col md:flex-row p-5  items-center justify-center  bg-green-950">
        <section className=" w-auto h-auto  p-3 basis-6/12 bg-green-950 flex flex-col md:flex-row gap-3 justify-around  text-green-50">
          <div className="text-[0.7rem] font-semibold">
            &copy; all reseved sycamore Sarl 2024
          </div>
          <div className="text-[0.7rem] font-semibold">
            appel nous : +243(0) 81 333 87 77{" "}
          </div>
        </section>
        <section className="bg-green-950 w-auto h-auto  p-3 basis-6/12 flex flex-col md:flex-row justify-around text-green-50 gap-3">
          <div className="text-[0.7rem] font-semibold">
            E-mail : info@sycamore.cd
          </div>
          <div className="text-[0.7rem] font-semibold">
            Site Web : www.sycamore.cd
          </div>
        </section>
      </section>
    </footer>
  );
}
