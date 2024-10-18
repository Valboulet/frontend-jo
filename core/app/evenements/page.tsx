'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SportFilter from '../evenements/filters/SportFilter';
import { SportType } from '../evenements/filters/SportFilter';

// Charger EventList sans SSR
const DynamicEventList = dynamic(() => import('../evenements/EventList'), {
  ssr: false, // Désactiver le rendu côté serveur
});

const SelectedSport = () => {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const sportNameFromUrl = searchParams.get('sport');
    
    if (sportNameFromUrl) {
      setSelectedSport({
        id_sport: '',
        name: sportNameFromUrl,
        pictogram_url: ''
      });
    }
  }, [searchParams]);

  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sélectionnez vos tickets</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Rechercher par sport</p>
          <div className="mt-5">
            <SportFilter onSportSelect={setSelectedSport} />
          </div>
        </div>

        <Suspense fallback={<div>Loading events...</div>}>
          {/* Utilisation du composant EventList sans SSR */}
          <DynamicEventList selectedSport={selectedSport} />
        </Suspense>
      </div>
    </main>
  );
};

export default SelectedSport;

