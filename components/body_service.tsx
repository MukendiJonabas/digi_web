import Image from "next/image";
import React from "react";
import service from "../public/servise.png";
import image1 from "../public/congo.png";
import mage1 from "./public/travail.png";

export default function ContactPage() {
  return (
    <>
      <div className=" view h-auto w-auto grid grid-cols md:grid-cols items-center justify-center">
        <div className="block text-white w-auto h-auto flex-col md:flex-row shadow shadow-green-800 m-5 rounded ">
          <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
            <section className="block bg-white w-auto h-auto  p-5 basis-7/12">
              <p className="text-[3.0rem] font-extrabold text-lime-800 mb-4 ">
                Pourquoi nous faire confiance{" "}
                <span className="size-96 text-green-800 font-extrabold">?</span>
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Puisque nous améliorons l'éfficacité des administrations
                publiques, par l'automatisation des processus, Simplification
                des procédures et l'optimisation de l'utilisation des resources
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Encore plus nous renforcons la transparence des actons publiques
                par un accès facile aux informations et par les services
                publiques totalement numériques
              </p>
            </section>

            <section className="block bg-white  pl-2 p-2 basis-5/12 border-l-2 border-green-800">
              <Image
                src={image1}
                alt="une image ratée"
                className="object-contain h-80 w-full"
              />
            </section>
          </section>
        </div>
        <div className="block bg-white text-black w-auto h-auto flex-col md:flex-row shadow shadow-green-800 m-5 rounded">
          <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
            <section className="block bg-white  pl-2 p-2 basis-5/12 border-r-2 border-green-800">
              <Image
                src={image1}
                alt="une image ratée"
                className="object-contain h-80 w-full"
              />
            </section>
            <section className="block bg-white w-auto h-auto  p-5 basis-7/12">
              <p className="text-[3.0rem] font-extrabold text-lime-800 mb-4 ">
                Qui est envisager beneficier de nos service{" "}
                <span className="size-96 text-green-800 font-extrabold">?</span>
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                L'ensemble de la populations est visé par nos solutions, dès
                l'adminastrateur le plus éléve au moins grader. Ainsi nous avons
                conçu une solution simple et accessible à tous, des services
                faciles à utiliser qui ne font que vous faciliter la vie.
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Tout cela est possible grâce au respect strict des normes
                securitaires
              </p>
            </section>
          </section>
        </div>
        <div className="block bg-white text-black w-auto h-auto flex-col md:flex-row shadow shadow-green-800 m-5 rounded">
          <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
            <section className="block bg-white w-auto h-auto  p-5 basis-7/12">
              <p className="text-[3.0rem] font-extrabold text-lime-800 mb-4 ">
                Perspective future{" "}
                <span className="size-96 text-green-800 font-extrabold">?</span>
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Nous envisageons mettre le numérique au service du bien commun.
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Tout cela est possible grâce aux touche surmesure de nos experts
                et un devouement louable des jeunes patriotes qui oeuvre pour le
                bien de tous{" "}
              </p>
            </section>

            <section className="block bg-white  pl-2 p-2 basis-5/12 border-l-2 border-green-800">
              <Image
                src={image1}
                alt="une image ratée"
                className="object-contain h-80 w-full"
              />
            </section>
          </section>
        </div>
        <div className="block bg-white text-white w-auto h-auto flex-col md:flex-row shadow shadow-green-800 m-5 rounded">
          <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
            <section className="block bg-white  pl-2 p-2 basis-5/12 border-r-2 border-green-800">
              <Image
                src={image1}
                alt="une image ratée"
                className="object-contain h-80 w-full"
              />
            </section>
            <section className="block bg-white w-auto h-auto  p-5 basis-7/12">
              <p className="text-[3.0rem] font-extrabold text-lime-800 mb-4 ">
                Perspective future{" "}
                <span className="size-96 text-green-800 font-extrabold">?</span>
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Nous envisageons mettre le numérique au service du bien commun.
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Tout cela est possible grâce aux touche surmesure de nos experts
                et un devouement louable des jeunes patriotes qui oeuvre pour le
                bien de tous{" "}
              </p>
            </section>
          </section>
        </div>
        <div className="block bg-white text-white mb-3 w-auto h-auto flex-col md:flex-row shadow shadow-green-800 m-5 rounded">
          <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
            <section className="block bg-white w-auto h-auto  p-5 basis-7/12">
              <p className="text-[3.0rem] font-extrabold text-lime-800 mb-4 ">
                Perspective future{" "}
                <span className="size-96 text-green-800 font-extrabold">?</span>
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Nous envisageons mettre le numérique au service du bien commun.
              </p>
              <p className="text-[1.1rem] font-bold text-lime-900 mb-4">
                Tout cela est possible grâce aux touche surmesure de nos experts
                et un devouement louable des jeunes patriotes qui oeuvre pour le
                bien de tous{" "}
              </p>
            </section>

            <section className="block bg-white  pl-2 p-2 basis-5/12 border-l-2 border-green-800">
              <Image
                src={image1}
                alt="une image ratée"
                className="object-contain h-80 w-full"
              />
            </section>
          </section>
        </div>
        <div className="block p-16 text-white mb-3 w-auto h-auto flex-col md:flex-row gap-3"></div>
      </div>
    </>
  );
}
