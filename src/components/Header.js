import { BsCarFrontFill } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BiMessageRounded } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Image from "next/image";
import img from "../assets/OLX_2019.svg.png";
import img2 from "../assets/OLX-Symbol.png";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import Link from "next/link";
function Header() {
  const [Open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!Open);
  };
  return (
    <header className="bg-[#F7F8F8] min-w-full  pb-3 fixed top-0 right-0 left-0">
      <div className="flex justify-evenly items-center space-x-3 py-5 md:justify-start md:space-x-6 md: mx-8">
        <Image src={img} alt="OLX logo" width={32} height={20} />
        <Link href="/motor" className="flex items-center ">
          {" "}
          <BsCarFrontFill className="mx-2" />
          Motors{" "}
        </Link>
        <Link href="/property" className="flex items-center ">
          {" "}
          <TbBuildingSkyscraper className="mx-2" />
          Property
        </Link>
      </div>
      <div className="bg-[#F7F8F8] flex justify-around items-center">
        <Image src={img2} alt="OLX logo" width={62} height={35} />
        <input
          type="search"
          placeholder="Pakistan"
          className="w-48 md:w-80 py-2 px-4 border-2 border-black rounded-md"
        />
        <div className=" hidden md:flex items-center ">
          <input
            type="search"
            placeholder="Find Cars,Mobile Phones and more..."
            className="w-[500px] py-2 px-5 border-2 border-black rounded-l-md"
          />
          <BiSearch className="border-2 border-black w-9 rounded-r-md h-11 text-white bg-black" />
        </div>
        <div className="dropdown md:hidden">
          <BsChevronDown onClick={toggleMenu} className="" />
          {Open && (
            <ul className="menu-list">
              <li>
                <Link href="/message">
                  <BiMessageRounded />
                </Link>
              </li>
              <li>
                <Link href="/notification">
                  <BsBell />
                </Link>
              </li>
              <li>
                <Link href="/login">
                  {" "}
                  <Image src={avatar} height={30} width={30} alt="image" />
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="md:flex md:items-center hidden ">
          <ul className="flex flex-row items-center text-2xl space-x-5 mr-5">
            <li>
              <Link href="/message">
                <BiMessageRounded />
              </Link>
            </li>
            <li>
              <Link href="/notification">
                <BsBell />
              </Link>
            </li>
            <li>
              <Link href="/login">
                {" "}
                <Image
                  src={avatar}
                  className="rounded-full"
                  height={35}
                  width={35}
                  alt="image"
                />
              </Link>
            </li>
            <li>
              <Link href="/login">
                <BiLogOut />
              </Link>
            </li>
            <Link href="/formsData/new">
              <button className="w-24 rounded-3xl border-blue-600">
                + sell
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
