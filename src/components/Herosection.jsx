import React from 'react'

const Herosection = () => {

  return (
    <div className="bg-[url('Home.png')] bg-cover bg-center bg-clip-border w-screen min-h-screen px-1 flex items-center justify-center flex-col text-white">
        <h1 className='text-center text-[2rem] font-bold my-2 md:text-7xl'>Sustaining the Wonders of the Deep Blue</h1>
        <p className='uppercase fw-semibold my-2 tracking-widest md:text-4xl' style={{color:'#67aff0',fontFamily:'Times New Roman'}}>Explore, Conserve,Thrive</p>
        <button type="button" className="text-sm font-bold my-2 p-4 bg-[#0aa6fb] rounded-3xl hover:bg-[#2cb3fcbb] ease-in-out md:text-lg ">Let's Explore...</button>
    </div>
  )
}

export default Herosection
