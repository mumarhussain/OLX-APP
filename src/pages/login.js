import { useState } from "react";
import logo from "../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/slice/Userslice";

export default function Login() {
  const data = useSelector((state) => state.user.loginUser);
  const [login, setLogin] = useState({
    email:"",
    password:""
  });
  const dispatch = useDispatch()
  const router = useRouter();

  const handleClick = () => {
    const user = data&& data.email == login.email && data&&data.password == login.password;
    if (user) {
      dispatch(loginUser(user))
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };
  console.log(data, "user");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };


  return (
    <div>
      <div className="mx-auto bg-blue-400 h-[100vh] ">
        <Image src={logo} alt="image" className="w-[40%] py-4 md:w-52 mx-4" />
        <div className="flex flex-col justify-center items-center md:w-[35%] md:bg-white md:m-auto md:py-6 md:border-2 md:border-white md:rounded-md md:shadow-lg">
          <h1 className="text-2xl text-white font-bold mx-auto mb-6 md:text-blue-600">
            Welcome To TOPSOL
          </h1>
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
            onClick={handleClick}
            className="border-2 rounded px-2 py-1 bg-white border-white text-blue-600 font-bold flex justify-center items-center mt-5  md:bg-blue-600 md:border-blue-600 md:text-white"
          >
            Login
          </button>
          <br />
          <p>
            If you are new please{" "}
            <Link href="/Signup" className="text-blue-600">
              {" "}
              Sign Up{" "}
            </Link>{" "}
            first
          </p>
        </div>
      </div>
    </div>
  );
}

// const handleClick = () => {
//   // for (let i = 0; i < data?.length; i++) {
//     // const user = data[i];
//     if (data.email === email && data.password === password) {
//       alert("success");
//       router.push('/');
//       return;
//     } else {
//       alert('Invalid email or password');
//     }
//   }
// // };
