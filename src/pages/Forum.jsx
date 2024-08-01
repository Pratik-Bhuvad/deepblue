import React, { useState } from 'react';
import Event from '../components/Event';
import News from '../components/News';
import Footer from '../components/Footer';

const Forum = () => {
    const [imageSrc, setImageSrc] = useState('src/assets/user.jpg'); // Directly use the path

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <section id="discussion" className="pt-[10vh] px-12 bg-[url('src/assets/Home-bg.png')] bg-center bg-cover w-screen h-screen">
                <h1 className='text-center text-5xl font-bold text-[#67aff0] mb-10' style={{ fontFamily: 'Times New Roman' }}>Discuss Your Thoughts with Others</h1>
                <div className='flex justify-evenly w-full h-4/5'>
                    <form action="" className='w-[70%]'>
                        <div id="userResponse" className="flex items-start justify-evenly h-full">
                            <div id="userdetails" className="relative w-2/6 h-full flex flex-col justify-start pt-20">
                                <div className='w-full flex justify-center items-center mb-3'>
                                    <div id="image" className="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                        <label htmlFor="file-input" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity">Choose Image
                                            <input type="file" accept="image/*" id="file-input" className="hidden" onChange={handleFileChange} />
                                        </label>
                                    </div>
                                </div>
                                <input type="text" placeholder="User Name" required className="mt-2 p-2 rounded-lg w-full" />
                            </div>
                            <div className="usermessage w-[60%] pt-5">
                                <textarea name="" id="" rows="23" placeholder='Enter Your text' required className='w-full rounded-xl p-3 border-4 border-double border-black' ></textarea>
                                <input type="submit" value="Submit" className='p-3 px-7 border-2 border-black bg-white font-bold mt-3 rounded-lg cursor-pointer' />
                            </div>
                        </div>
                    </form>
                    <div id="otherResponses" className="overflow-y-scroll bg-slate-300 w-1/4 rounded *:w-full *:h-[15%] *:border-b-2 *:grid *:cursor-pointer">
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                        <span className='w-full py-[2%]'><img src="src/assets/user.jpg" alt="" className='h-[90%] w-[70px] rounded-full bg-red' /><p className='truncate'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, possimus!</p></span>
                    </div>
                </div>
            </section>
            <section id="events" className='w-full h-[60vh] p-8 box-border'>
                <News />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Forum;
