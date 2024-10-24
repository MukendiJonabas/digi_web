import Image from "next/image";
import React from "react";
import service from "../public/servise.png";
import congo from "../public/congo.png";

export default function Body_service() {
  return (
    <section className="border-t-8 border-lime-900">
      <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center ">
        <section className="bg-white w-auto h-auto  p-5 basis-7/12">
          <p className="text-[1.8rem] font-bold text-green-700 mb-4">
            DigiPublic, une solution de Sycamore SARL, est un ensemble de
            solutions numériques innovantes conçues pour transformer le secteur
            publique.
          </p>
          <p className="text-[0.9rem] font-bold text-green-800 mb-4">
            Nous aidons les administrations publiques à ameliorer leur
            efficacité, leur transparence et leur sécurité grâce à des
            technologies de pointe.
          </p>
          <button className="bg-gradient-to-t from-green-100 to-green-50 p-2">
            S'OCTROYER UN DOCUMENT
          </button>
        </section>

        <section className="bg-white  pl-2 p-2 basis-5/12 border-l-2 border-green-800">
          <Image
            src={service}
            alt="une image ratée"
            className="object-contain h-80 w-full"
          />
        </section>
      </section>
      <section className=" w-full flex flex-col md:flex-row gap-3 p-10 pr-44 pl-44 items-center justify-center">
        <section className="bg-white w-auto h-auto  p-5 basis-5/12">
          <Image
            src={congo}
            alt="une image ratée"
            className="object-contain h-80 w-full"
          />
        </section>
        <section className="bg-white  pl-2 p-2  basis-7/12 border-l-2 border-green-100">
          <p className="text-[1.8rem] font-bold text-green-950 mb-3">
            Actions Transeversales
          </p>
          <p className="text-[1.1rem] font-bold text-green-700 mb-3">
            Digipublic cybersecurité
          </p>
          <p className="text-[0.8rem] text-green-900 mb-3">
            Pour assurer la protection des actifs de la province, il est
            essentiel de mettre en place une organisation procative de
            surveillance et d'intervation face aux risques de sécurité
            informatique et aux cyberattaques.
          </p>
          <p className="text-[1.0rem] font-extrabold text-green-950 mb-3">
            Organisation et Gouvernance
          </p>
          <p className="text-[0.8rem] text-green-900 mb-3">
            Nous élaborons une stratégie provinciale complète en matière de
            cybersécurité, définirons une politique provinciale de cybersecurité
            et mettrons en place une charte pour intégrer la cybersécurité dans
            tous les projets
          </p>
          <p className="text-[1.0rem] font-extrabold text-green-950 mb-3">
            Opérations
          </p>
          <p className="text-[0.8rem] text-green-900 mb-3">
            Nous construirons un centre Opérationnel de Sécurité (SOC) et un
            Centre de Réponse aux Incidents de Sécurité (CERT) dédiés à la
            province. De plus, nous créerons une Force d'Information Provinciale
            chargée de lutter contre la désinformation en ligne, de surveiller
            la cybersécurité de la province et de sécuriser les plateformes
            numériques en exploitation.
          </p>
          <p className="text-[1.0rem] font-extrabold text-green-950 mb-3">
            Formation et Sensibilisation
          </p>
          <p className="text-[0.8rem] text-green-900 mb-3">
            Nous proposerons des formations pour les agents de terrain afin de
            renforcer leur compétences en matière de cybersécurité. De plus,
            nous sensibiliserons tous les acteurs concernés aux risques liés à
            la cybersécurité.
          </p>
        </section>
      </section>
    </section>
  );
}
