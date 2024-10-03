'use client'

import React, { useState } from 'react';
import EventList from '../components/events-page/EventList';
import SportFilter from '../components/events-page/filters/SportFilter';
import { SportType } from '../components/events-page/filters/SportFilter';

const SelectedSport = () => {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);  // État pour stocker le sport sélectionné

  // Fonction pour mettre à jour l'état quand un sport est sélectionné
  const handleSportSelect = (sport: SportType | null) => {
    setSelectedSport(sport);
  };

  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sélectionnez vos tickets</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Filtrer les événements en fonction du sport que vous aimez.
          </p>
          <div className="mt-5">
            {/* Passer le callback pour récupérer la sélection du sport */}
            <SportFilter onSportSelect={handleSportSelect} />
          </div>
        </div>

        {/* Passer le sport sélectionné à EventList */}
        <EventList selectedSport={selectedSport} />
      </div>
    </main>
  );
}

export default SelectedSport;