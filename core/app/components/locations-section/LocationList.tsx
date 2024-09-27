'use client'

import React, { useEffect, useState } from 'react'
import LocationListItem from "./LocationListItem"
import apiService from "@/app/services/apiService"

export type LocationType =  {
  id_location: string;
  name: string;
  image_url: string;
}

const LocationList = () => { 
  const [locations, setLocations] = useState<LocationType[]>([]);

  const getLocations = async () => {
    const tmpLocations = await apiService.get('/api/locations/')

    setLocations(tmpLocations.data);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-800 sm:text-5xl py-16">
          Découvrir les Lieux
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {locations.map((location) => {
            return (
              <LocationListItem
                key={location.id_location}
                location={location}
              />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default LocationList;