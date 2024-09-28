import React from 'react'
import Logo from '../navbar/Logo';

export function Footer() {
    return (
      <div className="mx-auto max-w-2xl px-3 py-4 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <Logo />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a
                href="#"
                className="font-normal text-gray-800 hover:text-blue-500 focus:text-blue-500"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal text-gray-800 hover:text-blue-500 focus:text-blue-500"
              >
                Nous contacter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal text-gray-800 hover:text-blue-500 focus:text-blue-500"
              >
                Mentions Légales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal text-gray-800 hover:text-blue-500 focus:text-blue-500"
              >
                Confidentialité
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <a className="text-center text-gray-800 font-normal">
          Paris Olympic Games © 2024
        </a>
      </div>
    );
  }