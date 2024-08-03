import React from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const profiles = [
  {
    id: 1,
    imageSrc: 'src/assets/org/p_1.png',
    name: 'Shaunak Modi',
    position: 'Co-Founder, Coastal Conservation Foundation',
    description: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
    date: 'January 20, 2023',
  },
  {
    id: 2,
    imageSrc: 'src/assets/org/p_2.png',
    name: 'Puja Mitra ',
    position: 'Founder, Terra Conscious',
    description: "By conducting shore walks at prominent sea shores of the city, the organisation's flagship project, Marine Life of Mumbai.",
    date: 'January 10, 2023',
  },
  {
    id: 3,
    imageSrc: 'src/assets/org/p_3.png',
    name: ' Dr. Supraja Dharini',
    position: 'Founder, Sea Turtle Protection Force',
    description: 'Dr. Supraja Dharini was inspired to save the species after coming across a dead Olive Ridley Turtle on a morning walk at Neelangarai Beach, Chennai....',
    date: 'January 15, 2023',
  },
];

const Donate = () => {
  const handleSubmit = () => {
    alert("Your response submitted!");
  };

  return (
    <>
      <div className='bg-[#010028] w-screen text-white pt-[9vh]'>
        <h1 className='md:text-5xl text-center font-bold'>Marine Heroes</h1>
        <div id="org" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 lg:w-3/5 m-auto gap-x-10 mt-5'>
          {profiles.map((profile) => (
            <div key={profile.id} className="person w-full h-[90%] flex flex-col items-center justify-evenly px-5 bg-white text-[#010028] rounded-md">
              <img src={profile.imageSrc} alt={profile.name} className='w-full h-2/5' />
              <p className='font-bold'>{profile.name} - <span>{profile.position}</span></p>
              <p>{profile.description}</p>
              <div className='flex justify-between items-center w-full'>
                <p><i className="fa-solid fa-calendar-days mr-3"></i>{profile.date}</p>
                <Link to="https://www.harpersbazaar.in/culture/story/ocean-heroes-from-india-who-are-coasting-towards-making-the-world-a-better-place-564379-2022-08-09" target='_blank' className='bg-[#010028] px-2 py-1 text-white font-bold rounded-md'>
                  Read More <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-[29vh] p-3 box-border'>
        <div id="join" className="flex flex-col lg:flex-row items-center justify-evenly bg-[url('src/assets/org/bg.jpg')] bg-cover bg-center w-full h-full m-auto">
          <h1 className='text-white font-bold text-xs lg:text-2xl md:w-2/5 capitalize'>Enter your email address and taking the first step towards joining a global movement that's dedicated to protecting our oceans and the life.</h1>
          <input type="text" name="email" id="email" className="bg-transparent border-[1px] p-2 w-2/6 text-xs lg:text-lg text-white font-bold placeholder-white" placeholder='Enter Your Email'/>
          <input type="submit" value="Submit" onClick={handleSubmit} className='text-xs md:text-xl px-2 md:px-6 py-2 bg-[lightblue] font-bold text-white'/>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Donate
