'use client'; // Utilisation du client-side rendering

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Importation du router et des params
import dynamic from 'next/dynamic';
import SportFilter from '../evenements/filters/SportFilter';
import { SportType } from '../evenements/filters/SportFilter';
import ErrorPage from 'next/error';


// Charger EventList sans SSR
const DynamicEventList = dynamic(() => import('../evenements/EventList'), {
  ssr: false, // Désactiver le rendu côté serveur
});

const SelectedSport = () => {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter(); // Utilisation de useRouter pour les redirections

  useEffect(() => {
    // Vérifie si un sport est présent dans les paramètres d'URL
    const sportNameFromUrl = searchParams.get('sport');

    if (!sportNameFromUrl) {
      // Si aucun sport n'est sélectionné, rediriger vers la page d'accueil
      router.push('/'); // Redirection vers l'accueil
    } else {
      // Mettre à jour le sport sélectionné basé sur l'URL
      setSelectedSport({
        id_sport: '',
        name: sportNameFromUrl,
        pictogram_url: '',
      });
    }
  }, [searchParams, router]);

  if (!selectedSport) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sélectionnez vos tickets
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Rechercher par sport</p>
          <div className="mt-5">
            {/* Affiche le filtre des sports */}
            <SportFilter onSportSelect={setSelectedSport} />
          </div>
        </div>

        <Suspense fallback={<div>Loading events...</div>}>
          {/* Utilisation du composant EventList */}
          {selectedSport && (
            <DynamicEventList selectedSport={selectedSport} />
          )}
        </Suspense>
      </div>
    </main>
  );
};

export default SelectedSport;


