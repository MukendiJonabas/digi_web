import Image from "next/image";
import Devops from "@/public/devops.jpg";
import Tel from "@/public/image-removebg-preview (3).png";
import Tab from "@/public/image-removebg-preview (4).png";
export default function AProPos1() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 gap-6 flex flex-row sm:px-0 sm:py-16 ">
      <div className="flex flex-col pt-20 justify-center pr-100 bg-center">
        <h1 className="text-3xl font-bold">Notre vision</h1>
        <div className="flex items-center gap-12 mb-4">
          <Image src={Tel} alt="Image de la mission" className="rounded-lg" />
          
          
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
          <p className="">DigiPublic : Accélérer la transformation numérique du secteur public

La gamme complète de solutions DigiPublic offre aux administrations et collectivités les moyens de mener à bien leur transformation digitale, à travers les actions clés suivantes : <br /> <br />

Moderniser la gestion des ressources humaines et le développement des compétences des agents <br /> <br />
Digitaliser les systèmes d'information hospitaliers et de santé publique <br /> <br />
Déployer des outils numériques pour l'éducation et la gestion scolaire
Mettre en place des guichets uniques pour les prestations et services sociaux <br /> <br />
Informatiser les processus de la justice et de la sécurité publique
Instaurer des plateformes de suivi environnemental et d'aménagement du territoire <br /> <br />
Développer des solutions de e-tourisme et de promotion économique <br /> <br />
Construire des systèmes intelligents de gestion des villes et des territoires <br /> <br />
Ces actions clés permettront d'améliorer significativement les services rendus aux citoyens et aux entreprises, en leur offrant un accès simplifié et transparent aux informations et démarches administratives.</p>
        </div>
      </div>
    </div>
  );
}
