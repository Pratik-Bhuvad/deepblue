import React from 'react'
import Herosection from '../components/Herosection'
import './../App.css'
import Footer from '../components/Footer'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Home = () => {
    const data = {
        labels: [
            'Gujarat',
            'Kerala',
            'Maharashtra',
            'West Bengal',
            'Goa',
            'Tamil Nadu',
            'Odisha',
            'Andhra Pradesh (AP)',
            'Karnataka'
        ],
        datasets: [
            {
                label: 'Distribution',
                data: [23, 28, 42, 43, 47, 50, 57, 61, 65], // Data values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    // Options for the bar chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
            title: {
                display: true,
                text: "Coastal Water Quality Index",
                position: 'bottom',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div
            className='box-border w-screen h-screen'>
            <Herosection />
            <section className='p-4 box-border sm:p-7 sm:px-10 sm:text-lg text-info'>
                <article id='ioc'>
                    <h1 className='text-3xl my-7 font-bold '>Importance Of Ocean</h1>
                    <p>
                        The ocean is intrinsic to our life on Earth. Covering approximately three-quarters of the Earth’s surface, it holds about 97 percent of the planet's water and represents 99 percent of the living space by volume. This immense body of water is not only a source of vital natural resources such as food, medicines, and biofuels but also a critical player in maintaining the planet’s climate and ecological balance. The ocean provides a wealth of resources including fish, seaweed, and other marine organisms that are essential for food security and economic activities. Marine organisms also contribute to pharmaceutical developments, offering potential cures and treatments for various diseases. Furthermore, the ocean plays a crucial role in regulating the climate by absorbing solar energy and distributing heat around the globe through ocean currents. Coastal ecosystems such as mangroves, seagrasses, and coral reefs act as natural buffers against storms and flooding, protecting coastal communities and infrastructure. These ecosystems also support diverse marine life and contribute to the overall health of the oceanic environment. Additionally, the ocean functions as a significant carbon sink, absorbing carbon dioxide from the atmosphere and helping to mitigate global warming.
                    </p>
                    <p className='flex flex-col-reverse items-center'>Worryingly, marine pollution is reaching alarmingly high levels, with over 17 million metric tons of waste entering the ocean in 2021. This figure is anticipated to double or even triple by 2040 if current practices and trends persist. Plastic pollution is particularly problematic, with billions of tons of plastic debris accumulating in the ocean, forming vast garbage patches and contaminating marine habitats. This pollution not only threatens marine wildlife but also affects human health, as microplastics enter the food chain and accumulate in seafood consumed by people. The ocean's average pH level, currently at 8.1, is about 30 percent more acidic compared to preindustrial times due to increased carbon dioxide levels in the atmosphere. Ocean acidification, a direct result of this increased CO2, impairs the ability of marine organisms, such as corals and shellfish, to build and maintain their calcium carbonate structures. This disruption in the marine ecosystem impacts biodiversity, the health of coral reefs, and the availability of seafood resources, posing significant risks to marine life and human communities alike. The rising levels of pollutants and acidification threaten not only the delicate balance of marine ecosystems but also the numerous benefits they provide to human societies.
                        <img className='my-8 lg:w-2/5 h-80 sm:my-1 sm:ml-7 rounded-xl' src="src/assets/image1.jpg" alt="" />
                    </p>
                    <p>Careful management of this essential global resource is crucial for a sustainable future. This involves not only increasing funding for ocean science and research but also intensifying conservation efforts and implementing stricter regulations to reduce pollution and overfishing. To address climate change, it is essential to reduce greenhouse gas emissions and enhance the resilience of marine ecosystems. Establishing and expanding marine protected areas can help to safeguard biodiversity and allow ecosystems to recover. Public engagement, education, and international cooperation are necessary to drive meaningful change and ensure that the ocean’s health and the services it provides are preserved for future generations. Current efforts, while important, are not yet sufficient to meet the urgent need for comprehensive and effective ocean conservation strategies.</p>
                </article>
                <article>
                    <h1 className='text-3xl my-7 font-bold '>Ocean's Vital Role</h1>
                    <p>The ocean is our planet’s life support system and plays a crucial role in regulating the global climate. It is the world’s largest and most diverse ecosystem, teeming with nearly a million known species, and contains vast untapped potential for scientific discovery. The ocean’s immense size and depth provide a unique environment that supports a rich variety of life forms, from the smallest plankton to the largest whales. This immense biodiversity is essential for maintaining ecological balance and contributes to the overall health of the planet. The ocean also influences global climate patterns by storing and distributing heat through its currents, which helps to moderate temperatures and weather patterns around the world. Its ability to absorb and store carbon dioxide plays a critical role in mitigating the effects of climate change, making it an indispensable component of the Earth’s climate system.</p>
                    <p>Oceans and fisheries are integral to supporting the global population's economic, social, and environmental needs. They provide essential resources such as food, employment, and recreational opportunities, and they contribute significantly to the global economy through industries like fishing, tourism, and shipping. Coastal and marine ecosystems also offer vital services, such as shoreline protection from storms and erosion, and support for nutrient cycling and water purification. Despite the critical importance of conserving our oceans, decades of irresponsible exploitation and mismanagement have led to alarming levels of degradation. Overfishing, habitat destruction, pollution, and climate change have severely impacted marine environments, leading to a decline in biodiversity, the collapse of fish stocks, and the loss of critical habitats such as coral reefs and mangroves. The urgent need for effective conservation measures and sustainable management practices has never been greater to restore the health of our oceans and ensure their continued ability to support life on Earth.</p>
                </article>
                <article className=' sm:text-lg text-info' >
                    <h1 className="text-3xl font-bold">Coastal Water Acidification Index</h1>
                    <div className="flex flex-col items-center justify-evenly w-full lg:px-16 lg:py-16  lg:flex-row">
                        <div id="graph" className='w-full md:h-96 lg:w-2/4 flex justify-center pt-10'>
                            <Bar data={data} options={options} />
                        </div>
                        <div className="text lg:w-[45%] ">
                            <p className='flex items-center'><ChevronRightIcon aria-hidden="true" className="mr-5 h-5 w-5 text-gray-900" />At 23 points, the coastal water quality Index of Gujarat is lowest among all the nine coastal state of the Country</p>
                            <p className='flex items-center'><ChevronRightIcon aria-hidden="true" className="mr-5 h-5 w-5 text-gray-900" />There has been an increase of just 2.98% in mangroves in the this.state.</p>
                            <p className='flex items-center'><ChevronRightIcon aria-hidden="true" className="mr-5 h-5 w-5 text-gray-900" />As a positive, the use of nitrogen fertilisers has decreased by 5.78% but Gujarat still lags behind other coastal states</p>
                            <p className='flex items-center'><ChevronRightIcon aria-hidden="true" className="mr-5 h-5 w-5 text-gray-900" />Average marine acidity along the Gujarat coastline is 7.93. Only Kerala, with a marine acidity level of 7.88 is worse</p>
                            <p className='flex items-center'><ChevronRightIcon aria-hidden="true" className="mr-5 h-5 w-7 text-gray-900" />Percentage of available potential area developed under coastal agriculture is just 1.2% in Gujarat. In contrast, Karnataka has 28.5% of available potential area being cultivated</p>
                        </div>
                    </div>
                </article >
                <article>
                    <h1 className='text-3xl my-7 font-bold '>What's the Problem</h1>
                    <p>The ocean absorbs approximately 23 percent of the annual CO2 emissions generated by human activities, playing a critical role in mitigating the impacts of climate change. This process helps to limit the rise in atmospheric CO2 levels and reduce the greenhouse effect. Additionally, the ocean has absorbed more than 90 percent of the excess heat accumulated in the climate system due to global warming. This excess heat absorption is a key factor in moderating global temperatures. However, the increased heat in the ocean is now reaching record levels, which has led to the occurrence of widespread marine heatwaves. These heatwaves pose a severe threat to marine ecosystems, leading to coral bleaching events that damage coral reefs worldwide. The health of these ecosystems is vital as they support a diverse range of marine species and provide essential services such as coastal protection and habitat for fish.</p>
                    <p className='flex flex-col lg:flex-row'>
                        <img className='my-5 w-full lg:w-1/5 mr-8 rounded-xl' src="src/assets/image2.jpg" alt="" />
                        The escalating levels of debris in the world’s oceans are having profound environmental and economic impacts. Each year, between 5 and 12 million metric tonnes of plastic waste enter the ocean, significantly contributing to marine pollution. This plastic pollution incurs substantial economic costs, estimated at around $13 billion annually. These costs include expenses related to clean-up operations, as well as financial losses experienced by fisheries and other marine industries affected by the debris. Notably, about 89 percent of the plastic litter found on the ocean floor consists of single-use items such as plastic bags, which are among the most common types of waste. The persistence of these plastics in marine environments poses a serious threat to marine life, as they can entangle and suffocate wildlife or be ingested, leading to harmful health effects and death.Tourism in coastal areas constitutes a significant portion of global travel, with about 80 percent of all tourism taking place in these regions. The ocean-related tourism industry is expanding rapidly, contributing approximately US$134 billion to the global economy each year. In some coastal countries, this industry supports over one-third of the workforce, underscoring its economic importance. However, tourism, if not managed sustainably, can exert considerable pressure on natural resources, disrupt local ecosystems, and affect cultural heritage. The environmental impact of tourism includes habitat destruction, pollution, and overuse of coastal areas. To ensure that tourism continues to benefit both the economy and the environment, it is crucial to implement and adhere to sustainable tourism practices that balance economic growth with conservation efforts and respect for local cultures and traditions.</p>
                </article>
                <article>
                    <h1 className='text-3xl my-7 font-bold '>What can be Solutions</h1>
                    <p>For open ocean and deep-sea areas, achieving sustainability requires enhanced international cooperation to safeguard vulnerable habitats. The vast and often remote regions of the ocean are particularly susceptible to environmental pressures and exploitation, making it essential for countries to work together to establish and enforce protections. Effective management of these areas involves setting up comprehensive and well-regulated systems of government-protected marine areas. These protected areas play a crucial role in conserving marine biodiversity, which is vital for maintaining healthy and resilient ecosystems. They also help to ensure the long-term sustainability of the fishing industry by preventing overexploitation and allowing marine populations to recover and thrive.</p>
                    <p>One notable example of international collaboration is the Biodiversity Beyond National Jurisdiction (BBNJ) Agreement, finalized in 2023. This agreement provides a robust legal framework designed to govern all activities in the ocean and seas beyond national jurisdictions. It aims to address gaps in the protection of marine biodiversity and to establish mechanisms for the conservation and sustainable use of marine resources. The BBNJ Agreement represents a significant step forward in global efforts to manage and protect the high seas and deep-sea environments, reflecting the urgent need for coordinated international action.</p>
                    <p>On a more localized level, individuals can contribute to ocean sustainability by making environmentally conscious choices in their daily lives. This includes selecting products that are ocean-friendly and ensuring that the food derived from the ocean is sourced sustainably. Being mindful of consumption and only taking what is necessary helps to reduce the pressure on marine resources. One of the most critical actions individuals can take is to minimize plastic use. Plastic pollution is a major threat to marine life, as plastics can entangle animals, be ingested, and lead to harmful health effects. By reducing plastic consumption and opting for alternatives, individuals can help lessen the impact of plastic pollution on the ocean. Additionally, participating in or supporting clean-up initiatives and advocating for better waste management practices can further aid in protecting marine environments.</p>
                </article>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
