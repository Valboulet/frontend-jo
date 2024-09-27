'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'


export default function Navbar() {
    const [open, setOpen] = useState(false)
  
    return (
      <div className="bg-white">
        {/* Mobile menu */}
        <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
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
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
  
              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                    Les Sports
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                    Les Lieux
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                    Se connecter
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                    Créer un compte
                  </a>
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
                  onClick={() => setOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
  
                {/* Logo */}
                  <Logo />
                  
                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                      <div className="flex">
                        <a href='#@app/page/sport-section' className="relative flex">
                          <div className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                            Les Sports
                          </div>
                        </a>
                      </div>
                      <div className="flex">
                        <a href='#' className="relative flex">
                          <div className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                            Les Lieux
                          </div>
                        </a>
                      </div>
                  </div>
                </div>
  
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Se connecter
                    </a>
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Créer un compte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }