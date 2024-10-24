import Image from "next/image";
import Web from "@/public/agence-web.webp";
export default function ProPos2() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 gap-6 flex flex-row sm:px-0 sm:py-16 ">
    <div className="flex flex-col pt-10">
      
      <h2 className="text-3xl font-bold mb-4">Les composants de la plateforme</h2>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-700">
        
      </h1>

      <div className="space-y-8">
        {/* Application Web Admin */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-teal-900">Application Web Admin</h2>
          <p className="mt-4">
            Cœur de la plateforme : l'application web Admin est le centre de contrôle de la
            plateforme DigiPublic. Elle permet aux fonctionnaires du gouvernement de gérer
            l'ensemble des données, des processus et des services.
          </p>
          <p className="mt-2">
            Fonctionnalités clé : Gestion des utilisateurs, configuration de la plateforme, gestion des performances, création de rapports, gestion des documents, communication avec les utilisateurs, intégration avec des agences tiers.
          </p>
          <p className="mt-2">
            Accès sécurisé : L'application web Admin est accessible uniquement aux utilisateurs autorisés et nécessite une authentification forte pour garantir la sécurité des données.
          </p>
        </div>

        {/* Application Web User */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-teal-900">Application Web User</h2>
          <p className="mt-4">
            Point d'accès pour les citoyens : L'application web User permet aux citoyens de consulter et accomplir des démarches avec les services publics en ligne.
          </p>
          <p className="mt-2">
            Simplicité et accessibilité : L'application web User est conçue pour être intuitive et facile d'utilisation, même pour les non-initiés aux technologies numériques.
          </p>
          <p className="mt-2">
            Fonctionnalités clé : Consultation d'informations, soumission de formulaires, paiement en ligne, accès direct aux agences du gouvernement.
          </p>
        </div>

        {/* Application Mobile */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-teal-900">Application Mobile</h2>
          <p className="mt-4">
            Extension mobile de la plateforme : L'application mobile DigiPublic permet aux utilisateurs d'accéder aux services publics depuis leurs smartphones et tablettes.
          </p>
          <p className="mt-2">
            Fonctionnalités clé : Consultation d'informations, notifications, communication avec les agents du gouvernement, gestion de profil, soumission de formulaires et documents.
          </p>
          <p className="mt-2">
            Expérience utilisateur optimisée : L'application mobile est conçue pour offrir une expérience fluide et rapide sur les appareils mobiles, avec des fonctionnalités intégrées et un accès en temps réel.
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
    
  );
}
