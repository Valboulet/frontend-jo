/**
 * LocationListItem component renders an individual location item.
 * 
 * Receives a `location` prop of type `LocationType` and displays its image and name.
 */

import { LocationType } from './LocationList';

interface LocationProps {
    location: LocationType
}

const LocationListItem: React.FC<LocationProps> = ({ location }) => {
  return (
    <div>
      <a key={location.id_location} href={''} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={location.image_url}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900 text-center">{location.name}</h3>
      </a>
    </div>
  );
};

export default LocationListItem;
