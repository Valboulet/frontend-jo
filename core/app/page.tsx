'use client';

import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation';
import Hero from './components/hero/Hero'; 
import SportList from './components/sports-section/SportList'; 
import LocationList from './components/locations-section/LocationList'; 
import { SportType } from './evenements/filters/SportFilter'; 

export default function Home() {
  // State to hold the selected sport, initialized to null
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  
  // Router hook for programmatic navigation
  const router = useRouter();

  // Function to handle the selection of a sport
  const handleSportSelect = (sport: SportType | null) => {
    setSelectedSport(sport); // Update the selected sport state

    if (sport) {
      // If a sport is selected, update the URL with the selected sport's name
      router.push(`/evenements?sport=${encodeURIComponent(sport.name)}`);
    } else {
      // If no sport is selected, navigate to the events page without sport filter
      router.push('/evenements');
    }
  };

  return (
    <div>
      <header>
        <Hero /> {/* Render the Hero component */}
      </header>

      <main>
        <div>
          {/* Render the SportList component and pass the sport selection handler */}
          <SportList onSportSelect={handleSportSelect} />
        </div>
        <div>
          {/* Render the LocationList component */}
          <LocationList />
        </div>
      </main>
    </div>
  );
}
