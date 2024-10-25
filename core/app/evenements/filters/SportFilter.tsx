/**
 * SportFilter component providing a dropdown for sport selection.
 * - Fetches available sports from an API on load.
 * - Allows users to select a sport, which triggers the `onSportSelect` callback and navigates to events filtered by the selected sport.
 *
 * Props:
 * - `onSportSelect`: Function to handle sport selection.
 */

'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import apiService from "@/app/services/apiService";

export type SportType = {
  id_sport: string;
  name: string;
  pictogram_url: string;
};

interface SportFilterProps {
  onSportSelect: (sport: SportType | null) => void; // Function to handle sport selection
}

const SportFilter: React.FC<SportFilterProps> = ({ onSportSelect }) => {
  const [sports, setSports] = useState<SportType[]>([]); // State to store the list of sports
  const [selected, setSelected] = useState<SportType | null>(null); // State to store the selected sport
  const router = useRouter(); // Initialize Next.js router

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await apiService.get('/api/sports/'); // Fetch sports data
        setSports(response.data); // Update state with fetched sports
      } catch (error) {
        console.error('Error fetching sports data', error); // Error handling
      }
    };

    fetchSports(); // Call function to fetch sports
  }, []);

  const handleSelection = (sport: SportType | null) => {
    setSelected(sport); // Update state with selected sport
    onSportSelect(sport); // Trigger callback with selected sport

    // Navigation
    if (sport) {
      router.push(`/evenements?sport=${encodeURIComponent(sport.name)}`); // Navigate to events page with selected sport
    } else {
      router.push(`/evenements`); // Navigate to events page without a specific sport
    }
  };

  return (
    <Listbox value={selected} onChange={handleSelection}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            {selected ? (
              <span className="ml-3 block truncate">{selected.name}</span> // Display selected sport name
            ) : (
              <span className="ml-3 block truncate">Choisissez un sport</span> // Default text if no sport selected
            )}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {sports.map((sport) => (
            <ListboxOption
              key={sport.id_sport}
              value={sport}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {sport.name} {/* Display sport name */}
                </span>
              </div>

              {selected?.id_sport === sport.id_sport && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" /> {/* Check icon if sport is selected */}
                </span>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SportFilter;
