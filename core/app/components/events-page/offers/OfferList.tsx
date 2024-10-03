import React, { useEffect, useState } from 'react'
import OfferListItem from "./OfferListItem"
import apiService from "@/app/services/apiService"

export type OfferType =  {
  id_offer: string;
  offer_name: string;
  number_of_seats: number;
  discount: number;
}

const OfferList = () => { 
  const [offers, setOffers] = useState<OfferType[]>([]);

  const getOffer = async () => {
    const tmpOffer = await apiService.get('/api/offers/')
    setOffers(tmpOffer.data);
  };

  useEffect(() => {
    getOffer();
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
            )
          })}
        </div>
      </div>
  )
}

export default OfferList;