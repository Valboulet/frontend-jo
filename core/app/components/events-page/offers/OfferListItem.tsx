import { OfferType } from './OfferList';


const showPercentDiscount = (decimal: number): string => {
  // Show discount from offer.dicount in % only if > 0
  if (decimal > 0 ){
      return `- ${decimal * 100}%`;
  } else {
      return ''
  }
};

interface OfferProps {
  offer: OfferType
}

const OfferListItem: React.FC<OfferProps> = ({
  offer
}) => {
  return (
  
    <label className="cursor-pointer" htmlFor={offer.id_offer}>
      <input type="radio" className="peer sr-only" name="pricing" id={offer.id_offer}/>
      <div className="w-72 max-w-xl rounded-md bg-white py-3 px-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase text-gray-500">{offer.offer_name} | {offer.number_of_seats} place{offer.number_of_seats > 1 ? 's' : ''}</p>
            <p className="text-sm font-bold">{showPercentDiscount(offer.discount)}</p>
          </div>
        </div>
      </div>
    </label>

)
}

export default OfferListItem
