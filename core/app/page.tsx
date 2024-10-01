'use client';

import Hero from './components/hero/Hero'
import SportList from './components/sports-section/SportList'
import LocationList from './components/locations-section/LocationList'


export default function Home() {

  return (
    <div>
      <header>
        <Hero />
      </header>

      <main>
        <div>
          <SportList />
        </div>
        <div>
          <LocationList />
        </div>
      </main>
    </div>
  );
}
