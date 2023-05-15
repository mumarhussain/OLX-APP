// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { deleteUser } from "../../store/slice/Userslice";
// import relativeTime from "dayjs/plugin/relativeTime";
// import Card1 from "./Card1";
// import Link from "next/link";
// import dayjs from "dayjs";
// import "dayjs/locale/en";
// dayjs.extend(relativeTime);

// function Herosection() {
//   const dispatch = useDispatch();
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const data = useSelector((state) => state.user.dataForm);
//   const signup = useSelector((state) =>
//     state.user.userData.find((signUpUser) => signUpUser.id)
//   );
//   // console.log(signup?.id, "abcc");
//   console.log(data , "data");
//   const user = useSelector((state) => state.user.userData);
//   const id = user.find((user) => user.id);
//   const handleClick = (id) => {};
//   const handleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleDelete = (id) => {
//     dispatch(deleteUser(id));
//   };

//   const handleEdit = (id) => {
//     setSelectedItem(id);
//     setIsOpen(false);
//   };
//   return (
//     <div className="bg-white">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3 pt-2">
//         <Card1 />
//         <Card1 />
//         <Card1 />
//         <Card1 />
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3  ">
//         {data.map((item) => (
//           <div className="rounded border-2 my-2" key={item.id}>
//             <Link
//               onClick={() => handleClick(item.id)}
//               href={`/detailsPage/${item.id}`}
//             >
//               <div className="flex justify-center mx-2">
//                 <img
//                   src={item.image}
//                   className="w-[260px] h-[280px]"
//                   alt="NEON CAR"
//                 />
//               </div>
//             </Link>
//             <div className="flex justify-between ml-7 my-1 mr-10 ">
//               <p className="font-semibold">{item.adtitle}</p>
//               {signup?.id == userId ? (
//                 <BsThreeDots
//                   onClick={handleDropdown}
//                   className="cursor-pointer"
//                 />
//               ) : null}
//                 {console.log(signup?.id, id, )}

//               {isOpen && (
//                 <ul className="menu-list">
//                   <li
//                     className="cursor-pointer"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     Delete data
//                   </li>
//                   <li className="cursor-pointer">
//                     <Link
//                       onClick={() => handleEdit(item.id)}
//                       href={`/formsData/${item.id}`}
//                     >
//                       {data.map((i) => {})}
//                       Edit data
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//             <p className="mx-7 font-bold mb-6">Rs {item.price}</p>
//             <p className="ml-7 mr-10 text-xs  mb-2">
//               {item.address} . {dayjs(item.createdAt).fromNow()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Herosection;


import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { deleteUser } from "../../store/slice/Userslice";
import relativeTime from "dayjs/plugin/relativeTime";
import Card1 from "./Card1";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/en";
dayjs.extend(relativeTime);

function Herosection() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const data = useSelector((state) => state.user.dataForm);
  console.log(data, "data");
  const login = useSelector((state) =>state.user.loginUser);
  const user = useSelector((state) => state.user.userData);
  const userId = login.id; 
  const handleDropdown = (id) => {
    // if (login && login.id != id) {
    //   setIsOpen(!isOpen);
    // } else {
    //   console.log(login, login.id, id , "check");

    // }
    const filterValue = data?.filter((item) => item?.id == id);
    setIsOpen(!isOpen)
    console.log(item.id, id, "uamr");
  };
  
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    setSelectedItem(id);
    setIsOpen(false);
  };
 console.log(userId, login?.id, "ids");
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3 pt-2">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3  ">
        {data.map((item) => {
          console.log(userId, "asdasdasd", item.userId)
          return(
          <div className="rounded border-2 my-2" key={item.id}>
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
        )})}
      </div>
    </div>
  );
}

export default Herosection;
