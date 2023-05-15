import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { signUpUser } from "@/store/slice/Userslice";
import logo from "../assets/Logo.png";

export default function Signup() {
  const router = useRouter()
  const id = Math.floor(Math.random() * 1000000000);
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    id: id,
  });
  const dispatch = useDispatch();
  const handleClick = () => {
    if (signup.name === "" || signup.email === "" || signup.password === "") {
      alert("Please fill out all the fields");
    } else {
      dispatch(signUpUser(signup))
    }
  };
  console.log(signup, "signupData");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="m-auto bg-blue-400 h-[100vh] ">
        <Image src={logo} alt="image" className="w-[40%] py-4 md:w-52 mx-4" />
        <div className="flex flex-col justify-center items-center md:w-[35%] md:bg-white md:m-auto md:py-6 md:border-2 md:border-white md:rounded-md md:shadow-lg">
          <h1 className="text-2xl text-white font-bold mx-auto mb-6 md:text-blue-600">
            Welcome To TOPSOL
          </h1>
          <input
            type="text "
            name="name"
            placeholder="Enter name here"
            onChange={handleChange}
            className=" border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email here"
            onChange={handleChange}
            className=" border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password here"
            onChange={handleChange}
            className=" border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2"
          />
          <button
            onClick={() => handleClick(id)}
            className="border-2 rounded px-2 py-1 bg-white border-white text-blue-600 font-bold flex justify-center items-center my-5 md:bg-blue-600 md:border-blue-600 md:text-white"
          >      <Link href={`/`}>Sign up</Link>

          </button>
          <br />
        </div>
      </div>
    </>
  );
}
