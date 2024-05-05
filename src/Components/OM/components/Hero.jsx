import React from 'react';
import { useNavigate } from 'react-router-dom';





const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://png.pngtree.com/background/20210711/original/pngtree-campus-culture-and-art-festival-poster-design-picture-image_1129242.jpg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          {/* <p>All Inclusive</p> */}
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
          Campus Vibes, Eventful Lives!
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
          Unleashing Talent, Celebrating Diversity: Join Us in Eventful Journeys!
          </p>
          {/* <button 
            
          className='border-2 border-white mr-4 hover:shadow-2xl p-2 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 rounded-lg text-white'>Explore</button> */}
        <button 
        onClick={()=>navigate("/chatBot")}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
  Chat Bot
</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
