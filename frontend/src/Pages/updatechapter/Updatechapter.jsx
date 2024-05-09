import React, { useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Updatechapter = () => {
  const id = useParams()?.id || 0;
  console.log(id);
  const [error, seterror] = useState("");
  const [data, setdata] = useState({
    Chapterno: 0,
    title: "",
    content: "",
  });
  const handlechange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/chapters/${id}`;
      const response = await axios.put(url, data);
      if (response) {
        console.log("data updated successfully");
      }
      window.location = "/";
      setdata({
        Chapterno: 0,
        title: "",
        content: "",
      });
    } catch (error) {
      if (error.response && error.response >= 400 && error.response <= 500) {
        seterror(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-950 flex justify-center items-center ">
      <form
        method="post"
        onSubmit={handlesubmit}
        className=" w-[30%] h-[60%] flex flex-col justify-center child:m-2 child:dark:p-4 rounded-lg child:p-5 child:dark:shadow-lg child:dark:rounded-md bg-gray-300 shadow-lg shadow-black"
      >
        <h1 className="flex justify-center text-4xl font-bold bg-blue-500 text-white">
          UPDATE CHAPTER
        </h1>
        <input
          type="number"
          name="Chapterno"
          value={data.Chapterno}
          required
          onChange={handlechange}
          placeholder="Chapter Number"
        ></input>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handlechange}
          required
          placeholder="title"
        ></input>
        <input
          type="text"
          value={data.content}
          className="large-text-box"
          onChange={handlechange}
          required
          name="content"
          placeholder="content"
        ></input>
        <button onClick={handlesubmit} className=" bg-green-500 m-3">
          UPDATE CHAPTER
        </button>
      </form>
    </div>
  );
};

export default Updatechapter;
