import React, { useEffect, useState } from 'react'
import SportListItem from "./SportListItem"
import apiService from "@/app/services/apiService"

export type SportType = {
  id_sport: string;
  name: string;
  pictogram_url: string;
};

interface SportListProps {
  onSportSelect: (sport: SportType | null) => void;
}

const SportList: React.FC<SportListProps> = ({ onSportSelect }) => {
  const [sports, setSports] = useState<SportType[]>([]);

  const getSports = async () => {
    const tmpSports = await apiService.get('/api/sports/');
    setSports(tmpSports.data);
  };

  useEffect(() => {
    getSports();
  }, []);

  return (
    <div className="bg-stone-100" id='sport-section'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-800 sm:text-5xl py-16">
          Découvrir les Sports
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {sports.map((sport) => {
            return (
              <SportListItem
                key={sport.id_sport}
                sport={sport}
                onSportSelect={onSportSelect}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SportList;
