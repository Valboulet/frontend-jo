import React from 'react'

const sports = [
    {
      id: 1,
      name: 'Athlétisme',
      href: '#',
      imageSrc: '../picto-athletisme.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Basketball',
      href: '#',
      imageSrc: '../picto-basketball.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'BMX Racing',
      href: '#',
      imageSrc: '../picto-bmx-racing.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Escrime',
      href: '#',
      imageSrc: '../picto-escrime.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Handball',
      href: '#',
      imageSrc: '../picto-handball.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Natation',
      href: '#',
      imageSrc: '../picto-natation.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: "Tir à l'arc",
      href: '#',
      imageSrc: '../picto-tir-a-larc.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: "Tir",
      href: '#',
      imageSrc: '../picto-tir.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 9,
      name: "Triathlon",
      href: '#',
      imageSrc: '../picto-triathlon.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 10,
      name: "Voleyball de plage",
      href: '#',
      imageSrc: '../picto-voleyball-de-plage.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]
  
  export default function SportsHome() {
    return (
      <div className="bg-stone-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Les Sports</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
            {sports.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900 text-center">{product.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }