import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {

  return (
    <div>
      <div className='flex items-center px-5 pt-12 bg-white'>
        <div className='flex items-center space-x-2 font-bold'>
          <p>ALL CATEGORIES</p>
         
        </div> 
        <ul className='hidden md:flex md:space-x-5 md:mx-4'>
          <li>
            Mobiles Phones
          </li>
          <li>
            Cars
          </li>
          <li>
            Motorcycle
          </li>
          <li>
            Houses
          </li>
          <li>
            Lands&Plots
          </li>
          <li>
            Tablets
          </li>
          <li>
            Tv-Audio-Video
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
