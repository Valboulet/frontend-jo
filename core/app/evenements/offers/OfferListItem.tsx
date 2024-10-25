/**
 * OfferListItem component that displays individual offer details.
 * - Shows the discount percentage only if greater than zero.
 * - Renders offer name, seat count, and applicable discount.
 */

import { OfferType } from './OfferList';

/**
 * Converts a decimal discount to a percentage format if greater than zero.
 * @param decimal - The discount amount in decimal form.
 * @returns A formatted percentage string or an empty string if discount is zero or less.
 */
const showPercentDiscount = (decimal: number): string => {
  if (decimal > 0) {
    return `- ${decimal * 100}%`;
  } else {
    return '';
  }
};

interface OfferProps {
  offer: OfferType;
}

const OfferListItem: React.FC<OfferProps> = ({ offer }) => {
  return (
    <label className="cursor-pointer" htmlFor={offer.id_offer}>
      <input type="radio" className="peer sr-only" name="pricing" id={offer.id_offer} />
      <div className="w-72 max-w-xl rounded-md bg-white py-3 px-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-cyan-700 peer-checked:ring-cyan-400 peer-checked:ring-offset-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase text-gray-500">
              {offer.offer_name} | {offer.number_of_seats} seat{offer.number_of_seats > 1 ? 's' : ''}
            </p>
            <p className="text-sm font-bold">{showPercentDiscount(offer.discount)}</p>
          </div>
        </div>
      </div>
    </label>
  );
};

export default OfferListItem;

