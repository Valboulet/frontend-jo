'use client';

import Hero from './components/hero/Hero'
import SportList from './components/sports-section/SportList'
import LocationList from './components/locations-section/LocationList'
import { Footer } from './components/footer/Footer'


export default function Home() {

  return (
    <div>
      <header>
        <Hero />
      </header>

      <main id='sport-section'>
        <div>
          <SportList />
        </div>
        <div>
          <LocationList />
        </div>
      </main>

      <footer className="w-full bg-white p-8">
        <Footer />
      </footer>
    </div>
  );
}
