import React, { useEffect, useState } from 'react';
import EventListItem from './EventListItem';
import apiService from '@/app/services/apiService';
import { SportType } from '../evenements/filters/SportFilter';
import ErrorPage from 'next/error';

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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedSport) return;

    const getEvents = async () => {
      setLoading(true);
      try {
        const response = await apiService.get(`/api/events?sport=${selectedSport.name}`);
        if (response.data && response.data.length > 0) {
          setEvents(response.data);
        } else {
          setError('Aucun événement trouvé.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des événements :', error);
        setError('Une erreur s\'est produite lors de la récupération des événements.');
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, [selectedSport]);

  if (loading) {
    return <p className="mt-5 text-center text-gray-600">Chargement des événements...</p>;
  }

  if (error) {
    return <ErrorPage statusCode={404} />; // Ou afficher un message d'erreur personnalisé
  }

  return (
    <>
      {events.length > 0 ? (
        events.map(event => <EventListItem key={event.id_event} event={event} />)
      ) : (
        <p className="mt-5 text-center text-gray-600">Aucun événement trouvé pour le sport sélectionné.</p>
      )}
    </>
  );
};

export default EventList;


