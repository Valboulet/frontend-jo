'use client'; // Utilisation du client-side rendering

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SportFilter, { SportType } from '../evenements/filters/SportFilter';
import ErrorPage from 'next/error';

// Charger EventList sans SSR
const DynamicEventList = dynamic(() => import('../evenements/EventList'), {
  ssr: false, // Désactiver le rendu côté serveur
});

const SelectedSportContent = () => {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Utiliser les paramètres de recherche de l'URL pour définir le sport sélectionné au chargement
  useEffect(() => {
    const sportNameFromUrl = searchParams.get('sport');

    if (sportNameFromUrl) {
      setSelectedSport({
        id_sport: '',
        name: sportNameFromUrl,
        pictogram_url: '',
      });
    }
  }, [searchParams]);

  // Fonction appelée lorsque l'utilisateur sélectionne un sport via le filtre
  const handleSportSelect = (sport: SportType | null) => {
    setSelectedSport(sport);

    // Mettre à jour l'URL avec le sport sélectionné
    if (sport) {
      router.push(`/evenements?sport=${encodeURIComponent(sport.name)}`);
    } else {
      router.push(`/evenements`);
    }
  };

  if (!selectedSport) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {/* Affiche le filtre des sports */}
      <SportFilter onSportSelect={handleSportSelect} />

      {/* Affiche la liste d'événements filtrée */}
      <Suspense fallback={<div>Loading events...</div>}>
        {selectedSport && (
          <DynamicEventList selectedSport={selectedSport} />
        )}
      </Suspense>
    </div>
  );
};

const SelectedSport = () => {
  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sélectionnez vos tickets
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Rechercher par sport</p>
          <div className="mt-5">
            {/* Composant contenant la logique de sélection du sport */}
            <Suspense fallback={<div>Loading sport filter...</div>}>
              <SelectedSportContent />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SelectedSport;
