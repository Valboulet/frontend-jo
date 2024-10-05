'use client'; // Important pour utiliser le state et les hooks dans Next.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importation de useRouter
import Hero from './components/hero/Hero';
import SportList from './components/sports-section/SportList';
import LocationList from './components/locations-section/LocationList';
import { SportType } from './components/events-page/filters/SportFilter'; // Importation du type SportType

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null); // État pour le sport sélectionné
  const router = useRouter(); // Hook pour manipuler l'URL

  // Fonction pour gérer la sélection du sport
  const handleSportSelect = (sport: SportType | null) => {
    setSelectedSport(sport);
    if (sport) {
      // Mettre à jour l'URL avec le sport sélectionné
      router.push(`/evenements?sport=${encodeURIComponent(sport.name)}`);
    } else {
      router.push('/evenements'); // Retour à la page événements sans sport
    }
  };

  return (
    <div>
      <header>
        <Hero />
      </header>

      <main>
        <div>
          <SportList onSportSelect={handleSportSelect} /> {/* Passer la fonction de sélection */}
        </div>
        <div>
          <LocationList />
        </div>
      </main>
    </div>
  );
}
