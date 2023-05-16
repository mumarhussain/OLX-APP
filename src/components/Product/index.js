import dayjs from 'dayjs';
import Link from 'next/link'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

function Product({handleClick,item,handleEdit,handleDelete,userId,index}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = (id) => {
    console.log(id, "id");
     setIsOpen(!isOpen)
 
     
   };

  return (<>
    <div key={index} className="rounded border-2 my-2" >
    <Link
      onClick={() => handleClick(item.id)}
      href={`/detailsPage/${item.id}`}
    >
      <div className="flex justify-center mx-2">
        <img
          src={item.image}
          className="w-[260px] h-[280px]"
          alt="NEON CAR"
        />
      </div>
    </Link>
    <div className="flex justify-between ml-7 my-1 mr-10 ">
      <p className="font-semibold">{item.adtitle}</p>
      {item?.userId == userId ? (
        <BsThreeDots
          onClick={()=>handleDropdown(item.id)}
          className="cursor-pointer"
        />
      ): null}
    </div>
    <p className="mx-7 font-bold mb-6">Rs {item.price}</p>
    <p className="ml-7 mr-10 text-xs  mb-2">
      {item.address} . {dayjs(item.createdAt).fromNow()}
    </p>
    {isOpen && (
      <ul className="menu-list">
        <li
          className="cursor-pointer"
          onClick={() => handleDelete(item.id)}
        >
          Delete data
        </li>
        <li className="cursor-pointer">
          <Link
            onClick={() => handleEdit(item.id)}
            href={`/formsData/${item.id}`}
          >
            Edit data
          </Link>
        </li>
      </ul>
    )}
  </div>
  </>
  )
    
}

export default Product