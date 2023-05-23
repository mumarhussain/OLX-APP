import React,{ useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header";
import { addUser, editUser, loginUser } from "../../../store/slice/Userslice";
import { db } from "../../../config/firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"

function FormsData() {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryId = router.query.id;
  const userData = useSelector((state) =>
    state.user.dataForm.find((userData) => userData.id == queryId)
    );
    console.log(userData, "userData",queryId);
  const login = useSelector((state) => state.user.loginUser);
  const id = userData ? userData.id : Math.floor(Math.random() * 1000000);
  const [details, setDetails] = useState();
  useEffect(() => {
    setDetails({
      adtitle: userData ? userData.adtitle : "",
      description: userData ? userData.description : "",
      price: userData ? userData.price : "",
      name: userData ? userData.name : "",
      address: userData ? userData.address : "",
      number: userData ? userData.number : "",
      id: id,
      userId: login?.id,
      image: userData ? userData.image : "",
      createdAt: userData ? userData.createdAt : new Date().toString(),
    });
  }, [userData, queryId]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (
      details.adtitle === "" ||
      details.description === "" ||
      details.price === "" ||
      details.name === "" ||
      details.address === "" ||
      details.number === "" ||
      details.image === "" ||
      details.id === "" ||
      details.userId === ""
    ) {
      alert("Please fill out all the fields");
    } else {
      dispatch(addUser(details));
      router.push("/");
    } 
    try {
      let myDet = { ...details}
      delete myDet.id
      const data =  doc(collection(db, "formData"))
      const allData = await setDoc(data, {
        ...myDet,
        id: data.id
      })
    } catch (error) {
      console.log(error, "error");
    }
  };
  

  const handleUpdate = (event) => {
    event.preventDefault();
    // dispatch(
    //   editUser({
    //     ...details,
    //     id: id,
    //   })
    // );

    router.push("/");
  };

  return (
    <>
      <div className="bg-white ">
        <Header />
        <h1 className="text-2xl pt-36 pb-4 font-bold flex justify-center items-center">
          POST YOUR AD
        </h1>
        <form
          onSubmit={handleUpdate}
          method="POST"
          className=" border-[1px] rounded border-gray-400 mx-7 px-2"
        >
          <h1 className="text-2xl font-bold mx-9 my-3">Include some details</h1>
          <p className="text-gray-800 mx-9 text-sm">Ad Title</p>
          <label>
            <input
              type="text"
              name="adtitle"
              onChange={handleChange}
              autoComplete="off"
              required
              value={details?.adtitle}
              className=" px-4 w-[95%] border-2 border-gray-700 py-2 rounded outline-none flex justify-center mx-auto"
            />
          </label>

          <p className="mx-9 text-sm text-gray-800">
            Mention the key features of your item (e.g. brand, model, age, type)
          </p>
          <br />
          <p className="text-gray-800 mx-9 text-sm">Description</p>
          <label>
            <textarea
              className="px-4 w-[95%] border-2 border-gray-700 py-4 rounded outline-none flex justify-center mx-auto "
              id="description"
              name="description"
              minLength={8}
              value={details?.description}
              onChange={handleChange}
              required
            />
          </label>

          <div>
            <p className="font-bold mx-9 text-xl my-5">SET A PRICE</p>
            <p className="mx-9 text-sm text-gray-800">PRICE</p>
            <label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={details?.price}
                required
                className=" w-[95%] border-2 border-gray-700 py-2 px-4 mb-11 rounded outline-none flex justify-center mx-auto"
              />
            </label>
          </div>
          <hr />
          <div>
            <h1 className="font-bold mx-9 text-xl my-5">Upload photo</h1>
            <label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL here"
                onChange={handleChange}
                value={details?.image}
                required
                className="px-4 w-[95%] border-2 border-gray-700 py-2 rounded outline-none flex justify-center mx-auto"
              />
            </label>
          </div>
          <hr />
          <div className="mb-7">
            <h1 className="text-2xl font-bold mx-9 my-3">
              REVIEW YOUR DETAILS
            </h1>
            <p className="text-gray-800 mx-9 text-sm">Name</p>
            <label>
              <input
                type="text"
                name="name"
                value={details?.name}
                required
                onChange={handleChange}
                className="px-4 w-[95%] border-2 border-gray-700 py-2 rounded outline-none flex justify-center mx-auto"
              />
            </label>
            <p className="text-gray-800 mx-9 my-4 text-sm">Address</p>
            <label>
              <input
                type="text"
                name="address"
                value={details?.address}
                required
                placeholder="Enter address here "
                onChange={handleChange}
                className="px-4 w-[95%] border-2 border-gray-700 py-2 rounded outline-none flex justify-center mx-auto"
              />
            </label>
            <h1 className="text-2xl font-bold mx-9 my-3">
              Let's verify your account
            </h1>
            <p className="text-gray-800 mx-9 text-sm">Mobile Phone Number</p>
            <label>
              <input
                type="tel"
                name="number"
                placeholder="Phone number"
                onChange={handleChange}
                autoComplete="off"
                value={details?.number}
                required
                className="px-4 w-[95%] border-2 border-gray-700 py-2 rounded outline-none flex justify-center mx-auto"
              />
            </label>
          </div>
          <hr />
          <button
            className="bg-green-950 border-none text-white font-bold rounded mx-9 my-7 px-2 py-3"
            onClick={queryId === "new" ? handleClick : handleUpdate}
          >
            <div>
              {queryId === "new" ? (
                <Link href="/">Post now</Link>
              ) : (
                <Link href="/">Update</Link>
              )}
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
export default FormsData;
