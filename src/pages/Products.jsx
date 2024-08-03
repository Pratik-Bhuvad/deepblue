import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

const products = [
  {
    id: 1,
    name: 'Coral',
    href: '#',
    description: 'Marine invertebrates that build coral reefs, essential for marine ecosystems. Corals form complex habitats that support diverse marine life. They are used in jewelry and ornaments for their beauty. Coral reefs also play a role in coastal protection. Used in jewelry and ornaments, and supports marine biodiversity.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Coral_Outcrop_Flynn_Reef.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Pearls',
    href: '#',
    description: 'Precious gems formed by mollusks, such as oysters. Pearls are valued for their luster and beauty. They are commonly used in high-quality jewelry. Pearls can be natural or cultured through pearl farming. Employed in fine jewelry and accessories.',
    imageSrc: 'https://img.freepik.com/premium-photo/closeup-view-lustrous-pearl-nestled-inside-shell-submerged-water-serene-underwater-scene-highlighting-pearl-oyster-ai-generated_538213-26636.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Minerals',
    href: '#',
    description: ' Includes substances like magnesium, potassium, and lithium extracted from seawater or seabed mining. These minerals are essential for various industrial applications. They are used in agriculture, energy storage, and electronics. Utilized in fertilizers, batteries, and electronic devices.',
    imageSrc: 'src/assets/products/minerals.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Crude Oil and Natural Gas',
    href: '#',
    description: ' Comprises offshore oil, gas, and renewable energy sources like tidal, wave, and offshore wind energy. These resources provide power for industries, homes, and transportation. They help reduce reliance on fossil fuels. Generates electricity, fuels transportation, and powers industries.',
    imageSrc: 'src/assets/products/oil.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Fishes',
    href: '#',
    description: 'Includes fish, shellfish, and other marine creatures harvested for human consumption. Examples are tuna, shrimp, and oysters. Seafood is a major source of protein and essential nutrients. It supports healthy diets and global food security. Consumed as food, contributing to nutrition and culinary diversity.',
    imageSrc: 'src/assets/products/fish.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Seaweed',
    href: '#',
    description: 'Marine algae used in food, cosmetics, and as a natural fertilizer. Varieties such as nori and kelp are commonly utilized. Seaweed is rich in vitamins, minerals, and antioxidants. It contributes to nutrition, skincare, and soil health. Added to food products, used in cosmetics, and as a natural fertilizer.',
    imageSrc: 'src/assets/products/seaweed.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Salt',
    href: '#',
    description: ' A vital mineral obtained by evaporating seawater or mining salt deposits. It is used extensively in cooking, food preservation, and de-icing roads. Salt plays important roles in various industrial processes. Seasoning food, preserving, and de-icing roads.',
    imageSrc: 'src/assets/products/salt.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Sand and Gravel',
    href: '#',
    description: 'Sand consists of small, granular particles used in construction, glass manufacturing, and landscaping. Gravel is coarser and used for concrete, road bases, and drainage systems. Both are extracted through dredging from the seabed. Used in construction, road bases, drainage, and landscaping.',
    imageSrc: 'src/assets/products/sand.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]


const Products = () => {

  return (
    <div className="bg-[#004aad] w-screen pt-[10vh]">
      <h2 className="text-3xl md:text-5xl text-center text-white font-bold">Products Obtain from Ocean</h2>
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-16 w-11/12 lg:px-8">

        <div className="grid gap-x-6 gap-y-16 grid-cols-1 lg:grid-cols-2 xl:gap-x-14">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="flex flex-col md:flex-row items-start gap-4 group rounded-xl p-5 bg-[#0166eb9d]">
              <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="mt-1 text-md text-white text-justify">{product.description}</p>
                <button className='p-2 rounded-lg font-medium bg-white mt-2'>Know More...</button>
              </div>
            </a>
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Products
