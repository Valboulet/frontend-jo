'use client'

import { useRouter } from 'next/navigation'; // Import du router de Next.js
import { SportType } from './SportList';


interface SportProps {
    sport: SportType;
    onSportSelect: (sport: SportType | null) => void; // Ajoutez cette ligne
}

const SportListItem: React.FC<SportProps> = ({ sport, onSportSelect }) => {
  const router = useRouter(); // Initialiser le router

  // Fonction de redirection vers la page des événements
  const handleClick = () => {
    // Redirection vers la page des événements avec le nom du sport dans l'URL
    onSportSelect(sport); // Appel de onSportSelect ici pour passer le sport sélectionné
    router.push(`/evenements?sport=${encodeURIComponent(sport.name)}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={sport.pictogram_url}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            alt={sport.name}
          />
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900 text-center">{sport.name}</h3>
      </div>
    </div>
  );
};

export default SportListItem;


