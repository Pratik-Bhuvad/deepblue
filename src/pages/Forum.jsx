import React, { useState } from 'react';
import Footer from '../components/Footer';

const Forum = () => {

    return (
        <div className='bg-[#001a39] w-screen min-h-screen pt-[10vh] py-10 pb-0 box-border'>
            <section id="works1" className="w-11/12 bg-[url('src/assets/forum-bg.png')] bg-center bg-cover rounded-lg h-[85vh] m-auto p-7 flex flex-col justify-center items-center lg:justify-between mb-20">

                <div id="work1" className='mb-16 lg:mb-0 flex flex-col lg:flex-row lg:self-start items-center p-8 bg-[#004aad] w-3/5 h-[42%] rounded-lg text-white'>
                    <img src="src/assets/work1.jpg" alt="" className='rounded-lg h-full mr-5' />
                    <span className='h-4/6 flex flex-col justify-between'>
                        <h1 className='lg:text-5xl text-xs text-center font-serif'>Creativity is Intelligence having fun</h1>
                        <p className='uppercase text-center font-sans lg:text-xl text-xs'>albert einstein</p>
                    </span>
                </div>

                <div id="work1" className='flex flex-col lg:flex-row lg:self-end items-center p-8 bg-[#004aad] w-3/5 h-[42%] rounded-lg text-white float-right'>
                    <img src="src/assets/work2.jpg" alt="" className='rounded-lg h-full mr-5' />
                    <span className='h-4/6 flex flex-col justify-between'>
                        <h1 className='lg:text-5xl text-xs text-center font-serif'>Creativity is Intelligence having fun</h1>
                        <p className='uppercase text-center font-sans lg:text-xl text-xs'>albert einstein</p>
                    </span>
                </div>
            </section>
            <section id="works2" className="w-11/12 bg-[url('src/assets/forum-bg.png')] bg-center bg-cover rounded-lg h-[85vh] m-auto p-7 flex flex-col justify-center items-center lg:justify-between mb-20">

                <div id="work1" className='mb-16 lg:mb-0 flex flex-col lg:flex-row lg:self-start items-center p-8 bg-[#004aad] w-3/5 h-[42%] rounded-lg text-white'>
                    <img src="src/assets/work1.jpg" alt="" className='rounded-lg h-full mr-5' />
                    <span className='h-4/6 flex flex-col justify-between'>
                        <h1 className='lg:text-5xl text-xs text-center font-serif'>Creativity is Intelligence having fun</h1>
                        <p className='uppercase text-center font-sans lg:text-xl text-xs'>albert einstein</p>
                    </span>
                </div>

                <div id="work1" className='flex flex-col lg:flex-row lg:self-end items-center p-8 bg-[#004aad] w-3/5 h-[42%] rounded-lg text-white float-right'>
                    <img src="src/assets/work2.jpg" alt="" className='rounded-lg h-full mr-5' />
                    <span className='h-4/6 flex flex-col justify-between'>
                        <h1 className='lg:text-5xl text-xs text-center font-serif'>Creativity is Intelligence having fun</h1>
                        <p className='uppercase text-center font-sans lg:text-xl text-xs'>albert einstein</p>
                    </span>
                </div>
            </section>
            <section id="discuss" className='pb-20 w-screen'>
                <div className="rounded-[30px] px-3 lg:px-16 py-8 bg-[#f5f5ef] lg:w-[50vw] w-[80vw] h-[60vh] m-auto mt-24">
                    <div className="rounded-3xl bg-[#ddcfff] w-full h-full pt-7 px-5 flex flex-col items-center justify-evenly">
                        <h2 className='font-bold text-sm lg:text-[22px] text-center'>Share your marine social work experience over here...</h2>
                        <textarea name="" id="" rows={13} className='rounded-xl w-[90%] p-3' placeholder='Write here.....'></textarea>
                        <div className='flex items-center justify-between lg:w-4/5 my-5 lg:my-0'>
                            <input type="submit" value="Submit" className='bg-[#fb3800] text-xs font-semibold rounded-3xl text-white p-3 px-5 cursor-pointer' />
                            <button className='flex items-center justify-evenly w-[45%] lg:w-[60%] font-bold text-xs lg:text-xl hover:border-2 hover:bg-[rgba(255,255,255,0.5)] rounded-xl py-2'><i className="fa-solid fa-circle-down"></i><span>Download Your Forum</span></button>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Forum;
