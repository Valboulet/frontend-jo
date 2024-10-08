'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import Cart from '@/app/cart/page'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Open mobile menu
  const openMobileMenu = () => setOpen(true)

  // Close mobile menu
  const closeMobileMenu = () => setOpen(false)

  // Open cart
  const openCart = () => {
    setIsCartOpen(true)
    closeMobileMenu(); // Close mobile menu when cart is open
  }

  // Close cart
  const closeCart = () => setIsCartOpen(false)

  return (
    <div className="bg-white sticky top-0">
      {/* Mobile menu */}
      <Dialog open={open} onClose={closeMobileMenu} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="/#sport-section" className="-m-2 block p-2 font-medium text-gray-900">
                  Les Sports
                </a>
              </div>
              <div className="flow-root">
                <a href="/#location-section" className="-m-2 block p-2 font-medium text-gray-900">
                  Les Lieux
                </a>
              </div>
              <div className="flow-root">
                <a href="/login" className="-m-2 block p-2 font-medium text-gray-900">
                  Se connecter
                </a>
              </div>
              <div className="flow-root">
                <a href="/account" className="-m-2 block p-2 font-medium text-gray-900">
                  Votre compte
                </a>
              </div>
              <div className="flow-root">
                <button
                  onClick={openCart} // Close cart by modifyig the state
                  className="-m-2 block p-2 font-medium text-gray-900"
                  aria-label="Open cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6" 
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">  
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={openMobileMenu}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <Logo />

              {/* Desktop nav links */}
              <DesktopNav />
            </div>
          </div>
        </nav>
      </header>

      {/* Cart */}
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}