import { CheckIcon } from '@heroicons/react/20/solid';
import { EventType } from './EventList';
import OfferList from '../evenements/offers/OfferList';
import Link from 'next/link'; // Importer Link de Next.js

interface EventProps {
  event: EventType;
}

const EventListItem: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {event.sport} | {event.date_start} à {event.date_end}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">{event.location}</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-cyan-700">Épreuves :</h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          {event.event_description.map((description) => (
            <li key={description} className="flex gap-x-3">
              <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-cyan-700" />
              {description}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">Prix total</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">{event.price}</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">€</span>
            </p>
            <p className="mt-4 text-base text-gray-600">Sélectionnez une offre :</p>

            <OfferList />

            {/* Utilisation de Link pour la redirection */}
            <Link href={`/event/${event.id_event}`} className="mt-10 block w-full rounded-md bg-cyan-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              CHOISIR CE TICKET
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
