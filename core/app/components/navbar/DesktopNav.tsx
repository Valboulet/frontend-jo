/**
 * DesktopNav component rendering navigation links, account access, login modal,
 * and cart functionality in desktop view.
 * - Displays links to sports and location sections.
 * - Triggers login modal and displays a logout button.
 * - Opens cart overlay on button click.
 */

'use client'

import Cart from "@/app/cart/Cart"
import { useState } from 'react'
import useLoginModal from '@/app/hooks/useLoginModal'
import LogOutButton from "./LogoutButton"


const DesktopNav = () => {

  const [isCartOpen, setIsCartOpen] = useState(false); // État pour l'ouverture du panier
  const loginModal = useLoginModal();

    return (
      <>
        <div className="hidden lg:ml-8 lg:block lg:self-stretch">
          <div className="flex h-full space-x-8">
              <div className="flex">
                <a href='/#sport-section' className="relative flex">
                  <div className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-cyan-700 data-[open]:text-cyan-700">
                    Les Sports
                  </div>
                </a>
              </div>
              <div className="flex">
                <a href='/#location-section' className="relative flex">
                  <div className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-cyan-700 data-[open]:text-cyan-700">
                    Les Lieux
                  </div>
                </a>
              </div>
          </div>
          </div>

        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        
              <div
                className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                onClick={()=> {
                  loginModal.open()
                }}
              >
                Se connecter
              </div>
              <span aria-hidden="true" className="h-6 w-px bg-gray-200" />

              <LogOutButton />

            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
            <a href="/account" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Votre compte
            </a>
            <button
              onClick={() => setIsCartOpen(true)} // Ouvre le panier en modifiant l'état
              className="-m-2 block p-2 font-medium text-gray-900"
              aria-label="Open cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6" // Taille ajustée de l'icône
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
              {/* Panier */}
              <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </div>
        </div>
      </>
    )
}

export default DesktopNav;