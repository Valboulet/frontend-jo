import React from 'react'
import Logo from '../navbar/Logo';

export function Footer() {
    return (
      <footer className="w-full bg-white p-8">
        <div className="mx-auto max-w-2xl px-3 py-4 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
            <Logo />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
              <li>
                <a
                  href="#"
                  className="font-normal text-gray-800 hover:text-cyan-700 focus:text-cyan-700"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-gray-800 hover:text-cyan-700 focus:text-cyan-700"
                >
                  Nous contacter
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="font-normal text-gray-800 hover:text-cyan-700 focus:text-cyan-700"
                >
                  Mentions Légales
                </a>
              </li>
              <li>
                <a
                  href="/RGPD"
                  className="font-normal text-gray-800 hover:text-cyan-700 focus:text-cyan-700"
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
      </footer>
    );
  }