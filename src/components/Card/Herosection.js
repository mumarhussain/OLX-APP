import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { deleteUser } from "../../store/slice/Userslice";
import { collection, getDocs } from "firebase/firestore";
import relativeTime from "dayjs/plugin/relativeTime";
import Card1 from "./Card1";
import dayjs from "dayjs";
import "dayjs/locale/en";
import Product from "../Product";
import Navbar from '../Navbar';
dayjs.extend(relativeTime);

function Herosection() {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const [fetchData, setFetchData] = useState([]); 
  const data = useSelector((state) => state.user.dataForm);
  const login = useSelector((state) => state.user.loginUser);
  const user = useSelector((state) => state.user.userData);
  const userId = login.id;

  const handleClick = (id) => { };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    setSelectedItem(id);
  };
  // console.log(fetchData, "setFetchData");

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const snapShot = await getDocs(collection(db, "formData"));
        const fetchedData = snapShot.docs.map((doc) =>{
          if("forms" in doc.data())
          setFetchData(doc.data().forms);

          });
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchForms();
  }, []);
  return (<>
    <Navbar className=""/>
    <div className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around space-x-2 mx-3  ">
        {fetchData.map((item,index) => {
          return (
            <Product key={index} userId={userId} handleClick={handleClick} item={item} handleEdit={handleEdit} handleDelete={handleDelete} />
          )
        })}
      </div>
    </div>
    </>
  );
}

export default Herosection;



