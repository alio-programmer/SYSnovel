import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Chapter = () => {
  const { Chapterno } = useParams();
  const [data, setdata] = useState({});
  useEffect(() => {
    const getchap = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/chapters/${Chapterno}`
        );
        setdata(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getchap();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className=" text-4xl">
          {data.Chapterno}: {data.title}
        </h1>
      </div>
      <div className="w-[90vw] my-5">
        <pre>{data.content}</pre>
      </div>
    </div>
  );
};

export default Chapter;
