import React, { useEffect, useState } from 'react';
import EventListItem from './EventListItem';
import apiService from '@/app/services/apiService';
import { SportType } from '../events-page/filters/SportFilter';

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
  selectedSport: SportType | null;  // Recevoir le sport sélectionné
}

const EventList: React.FC<EventListProps> = ({ selectedSport }) => {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const response = await apiService.get('/api/events/');
      setEvents(response.data);
    };

    getEvents();
  }, []);

  // Filtrer les événements en fonction du sport sélectionné
  const filteredEvents = selectedSport
    ? events.filter(event => event.sport === selectedSport.name)
    : events;

  return (
    <>
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <EventListItem
            key={event.id_event}
            event={event}
          />
        ))
      ) : (
        <p className="mt-5 text-center text-gray-600">Aucun événement trouvé pour le sport sélectionné.</p>
      )}
    </>
  );
};

export default EventList;
