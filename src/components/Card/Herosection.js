import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc , updateDoc} from "firebase/firestore";
import relativeTime from "dayjs/plugin/relativeTime";
import Card1 from "./Card1";
import dayjs from "dayjs";
import "dayjs/locale/en";
import Product from "../Product";
import Navbar from "../Navbar";
dayjs.extend(relativeTime);

function Herosection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [fetchData, setFetchData] = useState([]);
  const login = useSelector((state) => state.user.loginUser);
  const user = useSelector((state) => state.user.userData);
  const userId = login.id;

  const handleClick = (id) => {};

  const handleDelete = async (id) => {
  await  deleteDoc(doc(db, "formData",id));
  };

  const handleEdit = async (id) => {
    const updataData = doc(db, "formData", id)
    await updateDoc(updataData , {
      id,
      
      
    })
    setSelectedItem(id);

  };
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const snapShot = await getDocs(collection(db, "formData"));
        const fetchedDatas = snapShot.docs.map((doc) => {
          return doc.data()
        });
        setFetchData(fetchedDatas);
        console.log("fetchData", fetchedDatas);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchForms();
  }, []);
  return (
    <>
      <Navbar className="" />
      <div className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3  ">
          {fetchData.map((item, index) => {
            return (
              <Product
                key={index}
                userId={userId}
                handleClick={handleClick}
                item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Herosection;
