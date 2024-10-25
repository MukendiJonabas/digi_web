import Image from "next/image";
import Web from "@/public/agence-web.webp";
export default function ProPos2() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 gap-6 flex flex-row sm:px-0 sm:py-16 ">
    <div className="flex flex-col pt-10">
      
      <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
      
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-700">
        
      </h1>

      <div className="space-y-8">
        {/* Application Web Admin */}
        <div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-teal-900">Améliorer l'éfficacité des administration publiques</h2>
          <p className="mt-4">
            Automatisation des processus : Réduire le temps et les efforts nécessaires pour effectuer des taches administratives en Automatisant les processus manuels.
          </p>
          <p className="mt-2">
            Simplification des procédures: Rendre les procédures administratives plus simples et plus facile à comprendre pour les citoyens et les fonctionnaires.
          </p>
          <p className="mt-2">
            Optimisation de l'utilisation des ressources: Utiliser les ressources de manière plus efficace en réduisant le gaspillage et en maximisant l'impact des investissements. 
          </p>
        </div>

        {/* Application Web User */}
        <div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-teal-900">Renforcer la transparence des actions publiques</h2>
          <p className="mt-4">
            Accès facile aux informations : Fournir aux citoyens un accès facile et sécurisé aux informations sur les actions du gouvernement, les politiques publiques, les budgets et les dépenses.
          </p>
          <p className="mt-2">
            Services publics numériques : Offrir des services publics numériques accessibles à tous, permettant aux citoyens de gérer leurs interactions avec l'administration de manière simple et efficace.
          </p>
          <p className="mt-2">
            Fonctionnalités clé : Consultation d'informations, soumission de formulaires, paiement en ligne, accès direct aux agences du gouvernement.
          </p>
        </div>

        
      </div>
    </div>
      </div>
    
    
  );
}
