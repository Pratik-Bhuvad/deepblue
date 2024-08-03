import React from 'react';
import Footer from '../components/Footer';
import './CSS/ecosystem.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Description } from '@headlessui/react';

const species = [
  {
    id: 1,
    name: 'Vaquita',
    href: '#',
    description: 'The vaquita is the world’s rarest sea mammal and one of the most endangered animals in the world.With less than 30 individuals left, the vaquita is critically endangered and facing imminent extinction. They live in only one body of water in the Gulf of California and reproduce only once every two years, however it’s humans that have caused the most destruction to the vaquita population.',
    imageSrc: 'https://earth.org/wp-content/uploads/2022/04/Untitled-design-2022-04-12T161151.368.jpg',
  },
  {
    id: 2,
    name: 'Whale sharks',
    href: '#',
    description: 'Whale sharks are the biggest fish in the ocean, known to grow up to 18 metres long, weigh up to 19,000 kilograms and live for 70 to 130 years. Each whale shark has unique polka-dot markings on their body, similar to a human fingerprint.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/whale-shark-swimming.jpeg',
  },
  {
    id: 3,
    name: 'Hawksbill sea turtle',
    href: '#',
    description: 'The Hawksbill sea turtle is the most endangered species of turtle in the world, and is classified as critically endangered by IUCN, with an estimated global population of 8,000, with only 1,000 nesting females.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/hawksbill-sea-turtle.jpeg',
  },
  {
    id: 4,
    name: 'Sea otter',
    href: '#',
    description: 'The gorgeous sea otter is one of the smallest marine mammals on earth, and they play a crucial role in our ecosystem, feeding on sea urchins which allows kelp forests to thrive. They’re an incredible species, boasting an impressive string of skills.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/sea-otter.jpeg',
  },
  {
    id: 5,
    name: 'Whales',
    href: '#',
    description: 'As the largest animal on earth, blue whales average 25 metres in length and 140,000 kilograms in weight. Despite their supreme status, they are endangered species, with an estimated population of only 10,000 to 25,0000.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/blue-whale-tail.jpeg',
  },
  {
    id: 6,
    name: 'River dolphins',
    href: '#',
    description: 'River dolphins are another critically endangered species, with the Irrawaddy river dolphin, the Ganges river dolphin, the pink Amazon river dolphin and the Yangtze finless porpoise all in danger of going extinct in the near future.',
    imageSrc: 'https://www.machutravelperu.com/blog/wp-content/uploads/2021/05/pink-river-dolphin.jpg',
  },
  {
    id: 7,
    name: 'Florida manatee',
    href: '#',
    description: 'manatees are an endangered species due to boat collisions, entanglement in fishing gear, and habitat pollution. The current population is estimated to be around 6,000 individuals. The Manatee Sanctuary Act in the US prohibits the disturbance of these creatures, however a total of 804 manatees died in Florida waters in 2018, with boat collisions causing 119 of these deaths. The toxic algae crisis was also reported to have caused around 100 manatee deaths in 2018.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/florida-manatee-with-snorkeller.jpeg',
  },
  {
    id: 8,
    name: 'Galapagos Penguin',
    href: '#',
    description: 'It’s the smallest of the South American penguin species, and generally survive for 15 to 20 years in the wild. They are one of the few animals in the world that mate with one partner for life.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/galapagos-penguin.jpeg',
  },
  {
    id: 9,
    name: 'Hawaiian monk seal',
    href: '#',
    description: 'They are also one of the last two surviving monk seals on earth (including the Mediterranean monk seal), and have been classified as an endangered species since 1976.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/monk-seal.jpeg',
  },
  {
    id: 10,
    name: 'Kemp’s Ridley sea turtle',
    href: '#',
    description: 'IThe Kemp’s Ridley sea turtle is the smallest and rarest sea turtle in the world and also one of the most critically endangered. They usually weigh just 50 kilograms, which is tiny compared to a leatherback turtle (another endangered species of sea turtle) which weighs over 700 kilograms.',
    imageSrc: 'https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/kemps-ridley-sea-turtle.jpeg',
  },
]


const Ecosystem = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 700
  };

  return (
    <div className="">
      <section className="p-3 pt-[8vh] w-screen bg-[url('src/assets/ecosystem-bg.png')] bg-center bg-cover min-h-screen sm:p-10 sm:pt-[10vh] text-xl box-border">
        <h1 className='mb-4 uppercase font-bold text-4xl sm:mb-20'>The Importance of Marine Ecosystem</h1>
        <p className='px-3 leading-8 mt-8 text-justify sm:px-10 font-semibold'>The marine ecosystem, which spans an impressive 71% of the Earth's surface, forms a vital pillar of the global life-support system, offering a wide range of essential services that are fundamental to the well-being of our planet and its inhabitants. This vast aquatic realm provides crucial resources such as nourishment, oxygen, and countless employment opportunities, which are integral to both local communities and the global economy. The oceans boast an extraordinary diversity of life, with over 250,000 known species thriving in their various habitats, from the sunlit shallows to the deepest trenches. These marine environments are not only crucial for human health but also play a significant role in regulating the Earth's climate by sequestering carbon dioxide, supporting renewable energy sources like wind and tidal power, and offering vital protection against the impacts of storm surges and coastal erosion. Despite their immense value, these ecosystems are increasingly under threat due to human activities, including overfishing, pollution, and coastal development, which exacerbate environmental degradation and deplete critical resources. To safeguard the health and resilience of marine ecosystems and ensure their capacity to support future generations, it is essential to embrace and enforce sustainable management practices. This involves implementing effective conservation strategies, reducing our ecological footprint, and fostering international cooperation to address the multifaceted challenges facing our oceans.</p>
        <p className='px-3 leading-8 mt-8 text-justify sm:px-10 font-semibold'>At Deep Blue, our passion lies in discovering and experiencing the world’s most remarkable destinations while diligently working to preserve their natural splendor for the enjoyment of future generations. We firmly believe that travel and sustainability are inherently linked, and we are committed to promoting this harmony by encouraging all our travelers to respect and protect the delicate balance of the environments and wildlife they encounter. By fostering an ethos of responsible tourism, we aim to ensure that the beauty and biodiversity of these extraordinary places are maintained, allowing both current and future explorers to enjoy and learn from them in a sustainable manner.</p>
        <p className='px-3 leading-8 mt-8 text-justify sm:px-10 font-semibold'>Are you eager to deepen your understanding of the extraordinary species that share our planet and learn how you can play a role in their conservation? We invite you to explore the International Union for Conservation of Nature's (IUCN) Red List of Threatened Species. This invaluable resource offers comprehensive information about the status of various species and the threats they face, providing insights into how you can contribute to their protection and preservation. By engaging with the Red List, you can stay informed and take meaningful action to support efforts aimed at safeguarding our planet’s incredible biodiversity.</p>
      </section>

      <section className='bg-[#010028] md:h-screen py-5 pt-10'>
        <h1 className='text-white font-bold text-3xl text-center pt-5'>How Different Activites are Affecting Ocean Health</h1>
        <section id="carousel" className='w-screen mt-10 h-full md:h-5/6 flex justify-center items-center px-10'>
          <Slider {...settings} className='w-[97vw] sm:w-[95%] h-[100%]'>
            {species.map((item) => (
              <div key={item.id} className="relative w-full sm:w-10/12 rounded-lg h-[70vh] overflow-hidden bg-[#010028]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="object-fill w-full h-full"
                />
                <div className='absolute bottom-0 left-0 w-full h-1/5 p-3 pr-24 md:pr-36 bg-[rgba(0,0,0,0.5)]'>
                  <h2 className="text-sm md:text-2xl text-white font-bold">{item.name}</h2>
                  <p className='sm:font-semibold text-white'>{item.description}</p>
                </div>
                <button className='absolute bottom-1 md:bottom-8 right-2 text-sm md:text-xl text-white p-2 border-2 rounded-xl'>Read More</button>
              </div>
            ))}
          </Slider>
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Ecosystem;
