import React, { useEffect, useState } from 'react';
import EventListItem from './EventListItem';
import apiService from '@/app/services/apiService';
import { SportType } from '../evenements/filters/SportFilter';

export type EventType = {
  id_event: string;
  sport: string;
  location: string;
  date_start: string;
  date_end: string;
  event_description: string[];
  price: number;
};

interface EventListProps {
  selectedSport: SportType | null;
}

const EventList: React.FC<EventListProps> = ({ selectedSport }) => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [error, setError] = useState<string | null>(null); // Pour gérer les erreurs

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await apiService.get('/api/events/');
        setEvents(response.data || []); // Prendre en compte les événements
      } catch (error) {
        console.error('Erreur lors de la récupération des événements :', error);
        setError('Une erreur s\'est produite lors de la récupération des événements.');
      }
    };

    getEvents();
  }, []); // On récupère tous les événements au premier rendu

  const filteredEvents = selectedSport
    ? events.filter(event => event.sport === selectedSport.name) // Filtrer par sport
    : events;

  if (error) {
    return <p className="mt-5 text-center text-red-600">{error}</p>;
  }

  return (
    <>
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <EventListItem key={event.id_event} event={event} />
        ))
      ) : (
        <p className="mt-5 text-center text-gray-600">Aucun événement trouvé pour le sport sélectionné.</p>
      )}
    </>
  );
};

export default EventList;

