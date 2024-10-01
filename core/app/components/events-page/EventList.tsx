'use client'

import React, { useEffect, useState } from 'react'
import EventListItem from "./EventListItem"
import apiService from "@/app/services/apiService"

export type EventType =  {
  id_event: string;
  sport: string;
  location: string;
  date_start: string;
  date_end: string;
  description: string;
  price: string;
}

const EventList = () => { 
  const [events, setEvents] = useState<EventType[]>([]);

  const getEvents = async () => {
    const tmpEvents = await apiService.get('/api/events/')

    setEvents(tmpEvents.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">   
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
          in. Explicabo id ut laborum.
        </p>
      </div>
    </div>
  </div>  )

}

export default EventList;