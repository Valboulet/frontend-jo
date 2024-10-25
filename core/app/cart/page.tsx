'use client';

import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setLoading(true);
    try {
      // Simule un délai pour le traitement du paiement
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPaymentStatus('Paiement réussi'); // Mise à jour de l'état
    } catch (error) {
      setPaymentStatus('Échec du paiement');
    } finally {
      setLoading(false);
      setIsOpen(false); // Fermer la modal après le paiement
    }
  };

  return (
    <section className="bg-white min-h-[80vh] py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Paiement</h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form onSubmit={handlePayment} className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Nom complet (comme affiché sur la carte)*</label>
                  <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Numéro de carte*</label>
                  <input type="text" id="card-number-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                </div>

                <div>
                    <label 
                        htmlFor="card-expiration-input" 
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Expiration*
                    </label>
                    <div className="relative">
                        <input
                            data-datepicker
                            data-datepicker-format="mm/yy"
                            id="card-expiration-input"
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="12/23"
                            required
                        />
                    </div>
                </div>
                
                <div>
                  <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">CVV*
                    <button type="button" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                      <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </label>
                  <input type="number" id="cvv-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="•••" required />
                </div>
              </div>

              <button type="submit" disabled={loading} className="flex w-full items-center justify-center rounded-lg bg-cyan-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {loading ? 'Traitement...' : 'Payer maintenant'}
              </button>
            </form>

            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">748.00€</dd>
                </dl>
              </div>

              <div className="mt-6 flex items-center justify-center gap-8">
                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="Paypal" />
                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="Paypal Dark" />
                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="Visa" />
                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="Visa Dark" />
                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="Mastercard" />
                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="Mastercard Dark" />
              </div>
            </div>
          </div>


          {/* Modal for Payment Status */}
          {paymentStatus && (
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
              <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
              <DialogPanel className="fixed inset-0 flex items-center justify-center">
                <DialogTitle className="bg-white rounded-lg p-4 text-center">
                  <h3 className="text-lg font-semibold">{paymentStatus}</h3>
                  <button onClick={() => setIsOpen(false)} className="mt-4 rounded-lg bg-red-500 text-white px-4 py-2">Fermer</button>
                </DialogTitle>
              </DialogPanel>
            </Dialog>
          )}
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
    </section>
  );
};

export default PaymentPage;
