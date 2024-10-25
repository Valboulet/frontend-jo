'use client';

import React, { useEffect, useState, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SportFilter, { SportType } from './filters/SportFilter'; 

// Load EventList without SSR and with support for Suspense
const DynamicEventList = dynamic(() => import('../evenements/EventList'), {
  ssr: false,
  suspense: true, // Enable suspense mode for EventList
});

const SelectedSportContent = () => {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Update `selectedSport` based on search parameters
  useEffect(() => {
    const sportNameFromUrl = searchParams.get('sport');
    if (sportNameFromUrl) {
      setSelectedSport({ id_sport: '', name: sportNameFromUrl, pictogram_url: '' });
    } else {
      setSelectedSport(null);
    }
  }, [searchParams]);

  // Handle sport selection with URL update
  const handleSportSelect = useCallback((sport: SportType | null) => {
    setSelectedSport(sport);
    if (sport) {
      router.push(`/evenements?sport=${encodeURIComponent(sport.name)}`);
    } else {
      router.push(`/evenements`);
    }
  }, [router]);

  return (
    <div>
      {/* Sport filter component */}
      <SportFilter onSportSelect={handleSportSelect} />

      {/* Event list */}
      <div className="mt-8">
        <Suspense fallback={<div className="loading-events">Loading events...</div>}>
          {selectedSport ? (
            <DynamicEventList selectedSport={selectedSport} />
          ) : (
            <div className="no-sport-selected">Sélectionner un sport pour afficher les événements</div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

const SelectedSport = () => {
  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sélectionner un ticket</h2>
        </div>
        <div className="sport-filter-container mt-5">
          <Suspense fallback={<div>Loading...</div>}>
            <SelectedSportContent />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default SelectedSport;

