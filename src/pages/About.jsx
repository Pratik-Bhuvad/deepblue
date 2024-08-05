import React from 'react'
import Footer from '../components/Footer'

const people = [
    {
        name: 'Devesh Naik',
        description: "Devesh is a versatile and innovative team member with a specialization in UI/UX Designing. His proficiency in Designing enhances our team’s capability to tackle complex challenges. Devesh’s analytical skills and collaborative spirit are instrumental in achieving our objectives.",
        imageUrl: 'src/assets/user.png',
    },
    {
        name: 'Pratik Bhuvad',
        description: "Pratik is a dedicated and skilled member known for his work in Web Development. With a Experience on FrontEnd Development, Pratik brings valuable insights and a proactive approach to our team. His contributions are pivotal in driving towards Goal.",
        imageUrl: 'src/assets/user.png',
    },
    {
        name: 'Karan Kamble',
        description: "Karan is a dedicated and skilled member known for his work in Web Development. With a Experience on FrontEnd Development, Karan brings valuable insights and a proactive approach to our team. His contributions are pivotal in driving towards Goal.",
        imageUrl: 'src/assets/user.png',
    },
    {
        name: 'Girish Patil',
        description: "Girish is a versatile and innovative team member with a specialization in UI/UX Designing. His proficiency in Designing enhances our team’s capability to tackle complex challenges. Girish’s analytical skills and collaborative spirit are instrumental in achieving our objectives.",
        imageUrl: 'src/assets/user.png',
    },
]

const About = () => {
    return (
        <div>
            <div className="bg-[#010028] text-white py-24 sm:py-32 *:max-w-7xl *:m-auto">
                <div className="mx-auto flex flex-col max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 m">
                    <div className="w-full">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Meet our leadership</h2>
                        <p className="mt-6 text-lg text-center leading-8 text-gray-400">
                            Our team is composed of highly skilled and dedicated professionals, each bringing a unique set of expertise to our projects. With a strong foundation in various specialized fields, the team excels in delivering innovative solutions and achieving strategic goals. Their collective experience and commitment to excellence ensure that we tackle challenges effectively and drive success across all initiatives. Through a collaborative approach and a shared vision, our team consistently contributes to the overall achievement and advancement of our objectives.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mb-10">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageUrl} className="h-28 w-28 object-fit rounded-full" />
                                    <div>
                                        <h3 className="text-xl font-semibold leading-7 tracking-tight ">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 ">{person.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-14">Our Vision & Mission</h2>
                </div>
                <section className="vision-mission flex flex-col md:flex-row justify-between items-start gap-10 mt-10 bg-[#010028] text-white w-11/12">
                    <div className="vision w-full md:w-1/2 p-5 bg-white text-[#010028] rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
                            <li>Promote sustainable development of ocean resources.</li>
                            <li>Protect and restore marine ecosystems for future generations.</li>
                            <li>Raise global awareness about the importance of ocean conservation.</li>
                        </ul>
                    </div>
                    <div className="mission w-full md:w-1/2 p-5 bg-white text-[#010028] rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
                            <li>Engage in active protection and preservation of ocean ecosystems.</li>
                            <li>Collaborate with organizations to promote sustainable practices.</li>
                            <li>Bridge the gap between conservation efforts and public participation.</li>
                        </ul>
                    </div>
                </section>
                <section className="what-we-do p-5 bg-[#010028] text-white rounded-md mt-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center my-14">What We Do</h2>
                    <p className='text-center'>We connect with different organizations to collaborate on ocean conservation projects and initiatives. Our efforts include organizing and promoting volunteer events, raising awareness about the importance of marine protection, and creating opportunities for individuals to contribute to ocean conservation. By bridging the gap between organizations and people, we aim to foster a community dedicated to preserving our oceans for future generations.</p>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About
