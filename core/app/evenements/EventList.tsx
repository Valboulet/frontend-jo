/**
 * EventList component that fetches and displays a list of events for a selected sport.
 * Handles loading and error states, displaying a message if no events are found.
 */

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
  const [events, setEvents] = useState<EventType[]>([]); // State for storing the list of events
  const [error, setError] = useState<string | null>(null); // State for tracking any errors during fetch
  const [loading, setLoading] = useState<boolean>(true); // State to show loading status

  useEffect(() => {
    if (!selectedSport) return; // Exit if no sport is selected

    const getEvents = async () => {
      setLoading(true); // Begin loading
      try {
        const response = await apiService.get(`/api/events?sport=${selectedSport.name}`); // Fetch events based on selected sport
        if (response.data && response.data.length > 0) {
          setEvents(response.data); // Store events if they exist
        } else {
          setError('No events found.'); // Set error if no events are found
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('An error occurred while retrieving events.'); // Set error if API call fails
      } finally {
        setLoading(false); // End loading
      }
    };

    getEvents();
  }, [selectedSport]);

  // Display loading message
  if (loading) {
    return <p className="mt-5 text-center text-gray-600">Loading events...</p>;
  }

  // Display error page if error state is set
  if (error) {
    return <ErrorPage statusCode={404} />; // Or display a custom error message
  }

  // Render the list of events or a message if none were found
  return (
    <>
      {events.length > 0 ? (
        events.map(event => <EventListItem key={event.id_event} event={event} />)
      ) : (
        <p className="mt-5 text-center text-gray-600">Pas d'événement trouvé pour le sport sélectionné.</p>
      )}
    </>
  );
};

export default EventList;


