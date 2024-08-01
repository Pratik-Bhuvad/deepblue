import React, { useState } from 'react';
import Event from '../components/Event';
import News from '../components/News';
import Footer from '../components/Footer';

const Forum = () => {
    // const [imageSrc, setImageSrc] = useState('src/assets/user.jpg'); // Directly use the path

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setImageSrc(e.target.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    return (
        <div className='bg-[#001a39] w-screen min-h-screen pt-[10vh]'>
            <section id="works" className="w-11/12 bg-[url('src/assets/forum-bg.png')] bg-center bg-cover rounded-lg h-[85vh] m-auto p-7 flex flex-col justify-between">
                
                <div id="work1" className='flex self-start items-center p-8 bg-[#004aad] w-3/5 h-[42%] rounded-lg text-white'>
                    <img src="src/assets/work1.jpg" alt="" className='rounded-lg h-full mr-5'/>
                    <span className='h-4/6 flex flex-col justify-between'>
                        <h1 className='lg:text-5xl text-center font-serif'>Creativity is Intelligence having fun</h1>
                        <p className='uppercase text-center font-sans text-xl'>albert einstein</p>
                    </span>
                </div>

                <div id="work1" className='flex self-end items-center p-8 bg-[#004aad] w-3/5 h-[42%] rounded-lg text-white float-right'>
                    <img src="src/assets/work2.jpg" alt="" className='rounded-lg h-full mr-5'/>
                    <span className='h-4/6 flex flex-col justify-between'>
                        <h1 className='lg:text-5xl text-center font-serif'>Creativity is Intelligence having fun</h1>
                        <p className='uppercase text-center font-sans text-xl'>albert einstein</p>
                    </span>
                </div>
            </section>
        </div>
    );
};

export default Forum;
