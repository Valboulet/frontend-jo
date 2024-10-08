'use client'; // Important pour utiliser le state et les hooks dans Next.js

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import EventList from '../components/events-page/EventList';
import SportFilter from '../components/events-page/filters/SportFilter';
import { SportType } from '../components/events-page/filters/SportFilter';

const SelectedSport = () => {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const searchParams = useSearchParams(); // Pour récupérer les paramètres de l'URL

  // Fonction pour mettre à jour le sport sélectionné
  const handleSportSelect = (sport: SportType | null) => {
    setSelectedSport(sport);
  };

  // Utiliser l'effet pour récupérer le paramètre 'sport' dans l'URL à la première charge de la page
  useEffect(() => {
    const sportNameFromUrl = searchParams.get('sport');
    
    if (sportNameFromUrl) {
      // Si un sport est passé dans l'URL, on crée un objet de type SportType avec juste le nom
      setSelectedSport({
        id_sport: '', // On peut laisser vide ou null si on ne l'a pas encore
        name: sportNameFromUrl,
        pictogram_url: '' // On peut laisser vide également, ou choisir un placeholder
      });
    }
  }, [searchParams]); // Exécuté à chaque changement des paramètres d'URL

  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sélectionnez vos tickets</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Rechercher par sport</p>
          <div className="mt-5">
            {/* Passer la fonction callback pour obtenir le sport sélectionné */}
            <SportFilter onSportSelect={handleSportSelect} />
          </div>
        </div>

        {/* Passer le sport sélectionné à la liste des événements */}
        <EventList selectedSport={selectedSport} />
      </div>
    </main>
  );
};

export default SelectedSport;