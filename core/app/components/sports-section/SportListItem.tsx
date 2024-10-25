/**
 * SportListItem component that displays a single sport item and handles selection.
 * - Clicking on a sport item redirects to the events page, passing the sport's name as a query parameter.
 * - Invokes the `onSportSelect` callback with the selected sport.
 * 
 * Props:
 * - `sport`: A `SportType` object representing the sport data to display.
 * - `onSportSelect`: Callback to handle the selected sport.
 */

'use client'

import { useRouter } from 'next/navigation'; // Import Next.js router
import { SportType } from './SportList';

interface SportProps {
    sport: SportType;
    onSportSelect: (sport: SportType | null) => void; // Adds sport selection callback
}

const SportListItem: React.FC<SportProps> = ({ sport, onSportSelect }) => {
  const router = useRouter(); // Initialize the router

  // Redirect function to navigate to the events page
  const handleClick = () => {
    // Redirects to the events page with the sport name in the URL
    onSportSelect(sport); // Calls onSportSelect to pass the selected sport
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



