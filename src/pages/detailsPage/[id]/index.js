import avt from "../../../assets/avatar.png";
import Image from "next/image";
import Header from "@/components/Header";
import { FiPhoneCall } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import "dayjs/locale/en";
dayjs.extend(relativeTime);
import relativeTime from "dayjs/plugin/relativeTime";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const user = useSelector((state) => state.user);
  const data = user.dataForm
  const getVal = data.filter((item) => item.id == id);
  return (
    <>
      <Header />
      {getVal.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between mt-36">
            <div className="bordder-2 rounded w-full mx-6">
              <Image
                src={item.image}
                width={500}
                height={300}
                alt="image"
                className=" w-[100%] h-[90%]"
              />
            </div>
            <div className=" flex flex-col space-y-2 mx-5">
              <div className="border-[1px] rounded border-gray-700 flex flex-col w-96 px-3">
                <p className="font-bold">Rs {item.price}</p>
                <p className="my-4">{item.adtitle}</p>
                <p className="text-sm">{item.address} {dayjs(item.createdAt).fromNow()} </p>
              </div>
              <div className="border-[1px] rounded border-gray-700 flex flex-col w-96 p-3">
                <h2 className="font-semibold"> SELLER Description</h2>
                <div className="flex  items-center my-2">
                  <Image
                    src={avt}
                    alt="img"
                    className="h-20 w-20 rounded-full"
                  />
                  <div className="mx-2">
                    <p>{item.name}</p>
                    <p>Member since Jan 10</p>
                  </div>
                </div>
                <p className="w-[90%] mx-2 items-center text-center py-2  bg-[#002F34] text-white font-bold">
                  Chat with seller
                </p>
                <div className="flex items-center justify-center my-4">
                  <FiPhoneCall />
                  <p className="text-blue-700">{item.number}</p>
                </div>
              </div>
              <div className="border-[1px] rounded border-gray-700 flex flex-col w-96 p-3">
                <h2 className="font-bold my-3">Posted in </h2>
                <div className="flex justify-between items-center mx-4">
                  <p className="text-sm ">{item.address}</p>
                  <p>  {dayjs(item.createdAt).fromNow()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 w-[68%] mx-5 leading-10 p-3 ">
            <h1 className="text-2xl font-bold">Description</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}





// import avt from "../../../assets/avatar.png";
// import Image from "next/image";
// import Header from "@/components/Header";
// import { FiPhoneCall } from "react-icons/fi";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/router";
// export default function DetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const user = useSelector((state) => state.user);
//   const data = user.dataForm;
//   const item = data.filter((item) => item.id !== id);
//   console.log(item);
//   return (
//     <>
//       <Header />
//       <div className="flex justify-between mt-36">
//         <div className="bordder-2 rounded w-full mx-6">
//           <Image
//             src={item?.image}
//             width={500}
//             height={300}
//             alt="image"
//             className=" w-[100%] h-[90%]"
//           />
//         </div>
//         <div className=" flex flex-col space-y-2 mx-5">
//           <div className="border-[1px] rounded border-gray-700 flex flex-col w-96 px-3">
//             <p className="font-bold">Rs {item?.price}</p>
//             <p className="my-4">{item?.adtitle}</p>
//             <p className="text-sm">{item?.address}.minutes ago</p>
//           </div>
//           <div className="border-[1px] rounded border-gray-700 flex flex-col w-96 p-3">
//             <h2 className="font-semibold"> SELLER Description</h2>
//             <div className="flex  items-center my-2">
//               <Image
//                 src={avt}
//                 alt="img"
//                 className="h-20 w-20 rounded-full"
//               />
//               <div className="mx-2">
//                 <p>{item?.name}</p>
//                 <p>Member since Jan 10</p>
//               </div>
//             </div>
//             <p className="w-[90%] mx-2 items-center text-center py-2  bg-[#002F34] text-white font-bold">
//               Chat with seller
//             </p>
//             <div className="flex items-center justify-center my-4">
//               <FiPhoneCall />
//               <p className="text-blue-700">{item?.number}</p>
//             </div>
//           </div>
//           <div className="border-[1px] rounded border-gray-700 flex flex-col w-96 p-3">
//             <h2 className="font-bold my-3">Posted in </h2>
//             <div className="flex justify-between items-center mx-4">
//               <p className="text-sm ">{item?.address}</p>
//               <p> minutes ago</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border-2 w-[68%] mx-5 leading-10 p-3 ">
//         <h1 className="text-2xl font-bold">Description</h1>
//         <p>{item?.description}</p>
//       </div>
//     </>
//   );
// }

