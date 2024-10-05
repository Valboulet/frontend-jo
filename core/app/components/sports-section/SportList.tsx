import React, { useEffect, useState } from 'react';
import SportListItem from './SportListItem';
import apiService from '@/app/services/apiService';


export type SportType = {
  id_sport: string;
  name: string;
  pictogram_url: string;
};

interface SportListProps {
  onSportSelect: (sport: SportType | null) => void; // Prop pour gérer la sélection
}

const SportList: React.FC<SportListProps> = ({ onSportSelect }) => { 
  const [sports, setSports] = useState<SportType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // État de chargement
  const [error, setError] = useState<string | null>(null); // État d'erreur

  const getSports = async () => {
    try {
      const response = await apiService.get('/api/sports/');
      setSports(response.data);
    } catch (error) {
      setError('Erreur lors de la récupération des sports.'); // Mettre à jour l'état d'erreur
      console.error('Erreur lors de la récupération des sports:', error);
    } finally {
      setLoading(false); // Fin du chargement, même en cas d'erreur
    }
  };

  useEffect(() => {
    getSports();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Chargement des sports...</div>; // Message de chargement
  }

  if (error) {
    return <div className="text-center py-16 text-red-600">{error}</div>; // Afficher l'erreur
  }

  return (
    <div className="bg-stone-100" id='sport-section'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-800 sm:text-5xl py-16">
          Découvrir les Sports
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {sports.map((sport) => (
            <SportListItem
              key={sport.id_sport}
              sport={sport}
              onSportSelect={onSportSelect} // Passer la fonction de sélection
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportList;