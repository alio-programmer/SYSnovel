import React, { useState } from "react";
import axios from "axios";
const Adminlogin = () => {
  const [error, seterror] = useState("");
  const [data, setdata] = useState({
    email: "",
    password: "",
    adminkey: "",
  });
  const handlechange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BACKEND}/auth/login`;
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response >= 400 && error.response <= 500) {
        seterror(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-950 flex justify-center items-center ">
      <form
        action="https://postman-echo.com/post"
        method="post"
        onSubmit={handlesubmit}
        className=" w-[30%] h-[60%] flex flex-col justify-center child:m-2 child:dark:p-4 rounded-lg child:p-5 child:dark:shadow-lg child:dark:rounded-md bg-gray-300 shadow-lg shadow-black"
      >
        <h1 className="flex justify-center text-4xl font-bold bg-blue-500 text-white">
          LOGIN
        </h1>
        <input
          type="text"
          name="email"
          value={data.email}
          required
          onChange={handlechange}
          placeholder="Email"
        ></input>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handlechange}
          required
          placeholder="Password"
        ></input>
        <input
          type="password"
          value={data.adminkey}
          onChange={handlechange}
          required
          name="adminkey"
          placeholder="Admin key"
        ></input>
        <button onClick={handlesubmit} className=" bg-green-500 m-3">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Adminlogin;
