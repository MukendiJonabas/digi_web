import Image from "next/image";
import Devops from "@/public/devops.jpg"
export default function AProPos1(){
    return (
    <div className="flex flex-col pt-20 justify-center bg-center">
          <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
          <div className="flex items-center mb-4">
            <Image
              src={Devops}
              alt="Image de la mission"
              
              
              className="rounded-lg"
            />
            <p className="ml-4">
              Il y a cette notion selon laquelle pour faire croître une entreprise, il faut être impitoyable. 
              Mais nous savons qu'il y a une meilleure façon de grandir. Une où ce qui est bon pour le résultat 
              net est également bon pour les clients. Nous croyons que les entreprises peuvent croître avec 
              une conscience, et réussir avec une âme — et qu'elles peuvent le faire avec inbound. 
              C'est pourquoi nous avons créé un écosystème unissant logiciel, éducation et communauté pour 
              aider les entreprises à mieux croître chaque jour.
            </p>
          </div>
        </div>
)
}