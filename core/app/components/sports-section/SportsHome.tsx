'use client'

import React from 'react'
import { useEffect, useState } from 'react'

export type SportType =  {
  id_sport: string;
  name: string;
  pictogram_url: string;
}
 
  export default function SportsHome() {
    const [sports, setSports] = useState<SportType[]>([]);

    const getSports = async () => {
      const url = 'http://localhost:8000/api/sports'

      await fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then((json) => {
          console.log('json', json);

          setSports(json.data)
        })
        .catch((error) => {
          console.log('error', error);
        })
    };

    useEffect(() => {
      getSports();
    }, []);

    console.log(sports)
    return (
      <div className="bg-stone-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2>Les Sports</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {sports.map((sport) => (
              <a key={sport.id_sport} href={''} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={sport.pictogram_url}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900 text-center">{sport.name}</h3>
              </a>
            ))}
          </div>

        </div>
      </div>
    )
  }