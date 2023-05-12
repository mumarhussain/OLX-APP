import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className='flex items-center px-5 py-6 bg-white'>
        <div className='flex items-center space-x-2 font-bold'>
          <p>ALL CATEGORIES</p>
          <BsChevronDown onClick={handleDropdown} className='font-bold' />
          {dropdown && (
            <ul className='menu-list'>
              <li>
                <Link href='/page1'>Mobile</Link>
              </li>
              <li>
                <Link href='/page2'>Accessories</Link>
              </li>
              <li>
                <Link href='/page2'>Smart Watches</Link>
              </li>
              <li>
                <Link href='/page3'>Tablets</Link>
              </li>
              <li>
                <Link href='/page3'>Bikes</Link>
              </li>
              <li>
                <Link href='/page3'>Motorcycle</Link>
              </li>
              <li>
                <Link href='/page3'>Spareparts</Link>
              </li>
              <li>
                <Link href='/page3'>Bicycle</Link>
              </li>
            </ul>
          )}
        </div>
        <ul className='hidden md:flex md:space-x-5 md:mx-4'>
          <li>
            <Link href='/mobile'>Mobiles Phones</Link>
          </li>
          <li>
            <Link href='/cars'>Cars</Link>
          </li>
          <li>
            <Link href='/motorcycle'>Motorcycle</Link>
          </li>
          <li>
            <Link href='/houses'>Houses</Link>
          </li>
          <li>
            <Link href='/plots'>Lands&Plots</Link>
          </li>
          <li>
            <Link href='/tablets'>Tablets</Link>
          </li>
          <li>
            <Link href='/audio'>Tv-Audio-Video</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
