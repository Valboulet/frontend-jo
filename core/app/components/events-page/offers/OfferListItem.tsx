import { OfferType } from './OfferList';

interface OfferProps {
    offer: OfferType
}

const OfferListItem: React.FC<OfferProps> = ({
  offer
}) => {
  console.log(offer)
  return (
  
    <label className="cursor-pointer" key={offer.id_offer}>
      <input type="radio" className="peer sr-only" name="pricing"/>
      <div className="w-72 max-w-xl rounded-md bg-white py-3 px-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase text-gray-500">{offer.offer_name} - <span className="font-small italic">{offer.number_of_seats} pers</span></p>
            <p className="text-sm font-bold">{offer.discount} / pers</p>
          </div>
        </div>
      </div>
    </label>

)
}

export default OfferListItem