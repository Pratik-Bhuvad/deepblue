import React from 'react'
import Footer from '../components/Footer'
import '../components/css/ecosystem.css'

const Ecosystem = () => {
  return (
    <div className="">
      <section className="p-3 pt-[8vh] w-screen bg-[url('src/assets/ecosystem-bg.png')] bg-center bg-cover min-h-screen sm:p-10 sm:pt-[10vh] text-xl box-border">
        <h1 className='mb-4 uppercase font-bold text-4xl sm:mb-20'>The Importance of Marine Ecosystem</h1>
        <p className='px-3 leading-8 mt-8 text-justify sm:px-10 font-semibold'>The marine ecosystem, which spans an impressive 71% of the Earth's surface, forms a vital pillar of the global life-support system, offering a wide range of essential services that are fundamental to the well-being of our planet and its inhabitants. This vast aquatic realm provides crucial resources such as nourishment, oxygen, and countless employment opportunities, which are integral to both local communities and the global economy. The oceans boast an extraordinary diversity of life, with over 250,000 known species thriving in their various habitats, from the sunlit shallows to the deepest trenches. These marine environments are not only crucial for human health but also play a significant role in regulating the Earth's climate by sequestering carbon dioxide, supporting renewable energy sources like wind and tidal power, and offering vital protection against the impacts of storm surges and coastal erosion. Despite their immense value, these ecosystems are increasingly under threat due to human activities, including overfishing, pollution, and coastal development, which exacerbate environmental degradation and deplete critical resources. To safeguard the health and resilience of marine ecosystems and ensure their capacity to support future generations, it is essential to embrace and enforce sustainable management practices. This involves implementing effective conservation strategies, reducing our ecological footprint, and fostering international cooperation to address the multifaceted challenges facing our oceans.</p>
        <p className='px-3 leading-8 mt-8 text-justify sm:px-10 font-semibold'>At Deep Blue, our passion lies in discovering and experiencing the world’s most remarkable destinations while diligently working to preserve their natural splendor for the enjoyment of future generations. We firmly believe that travel and sustainability are inherently linked, and we are committed to promoting this harmony by encouraging all our travelers to respect and protect the delicate balance of the environments and wildlife they encounter. By fostering an ethos of responsible tourism, we aim to ensure that the beauty and biodiversity of these extraordinary places are maintained, allowing both current and future explorers to enjoy and learn from them in a sustainable manner.</p>
        <p className='px-3 leading-8 mt-8 text-justify sm:px-10 font-semibold'>Are you eager to deepen your understanding of the extraordinary species that share our planet and learn how you can play a role in their conservation? We invite you to explore the International Union for Conservation of Nature's (IUCN) Red List of Threatened Species. This invaluable resource offers comprehensive information about the status of various species and the threats they face, providing insights into how you can contribute to their protection and preservation. By engaging with the Red List, you can stay informed and take meaningful action to support efforts aimed at safeguarding our planet’s incredible biodiversity.</p>
      </section>
      {/* <section className="example">Hello</section> */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Ecosystem
