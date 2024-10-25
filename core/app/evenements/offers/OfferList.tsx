/**
 * OfferList component that fetches and displays a list of offers.
 * - Retrieves offers data from an API when the component loads.
 * - Maps over the offers to render each one using the OfferListItem component.
 */

'use client'

import React, { useEffect, useState } from 'react';
import OfferListItem from './OfferListItem';
import apiService from '@/app/services/apiService';

export type OfferType = {
  id_offer: string;
  offer_name: string;
  number_of_seats: number;
  discount: number;
};

const OfferList = () => {
  const [offers, setOffers] = useState<OfferType[]>([]); // State to store the list of offers

  // Fetches offer data from the API
  const getOffer = async () => {
    try {
      const tmpOffer = await apiService.get('/api/offers/');
      setOffers(tmpOffer.data); // Update state with retrieved offers data
    } catch (error) {
      console.error('Error fetching offers data', error); // Error handling
    }
  };

  useEffect(() => {
    getOffer(); // Call function to fetch offers data when component mounts
  }, []);

  return (
    <div className="mt-10 flex mx-auto max-w-6xl px-12 items-center justify-center">
      <div className="flex flex-wrap gap-3">
        {offers.map((offer) => {
          return (
            <OfferListItem
              key={offer.id_offer}
              offer={offer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OfferList;
