import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Chapter = ({ user }) => {
  const Chapterno = useParams()?.Chapterno || 0;
  const [data, setdata] = useState({});
  let newchapno = Chapterno;

  const handledelete = async () => {
    try {
      const res = await axios.delete(`/api/chapters/${data._id}`);
      window.location.replace("/");
    } catch (error) {
      console.log("error deleting");
      window.location.reload();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getchap = async () => {
      try {
        const res = await axios.get(`/api/api/chapters/${Chapterno}`);
        setdata(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getchap();
  }, []);

  return (
    <div className="w-[90vw] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center child:m-5">
        <h1 className=" text-4xl">
          {data.Chapterno}: {data.title}
        </h1>
        <div>
          {user && (
            <button
              className=" bg-red-500 p-3 rounded-md"
              onClick={handledelete}
            >
              Delete
            </button>
          )}
        </div>
        <div className=" child:m-5">
          <Link
            className="bg-slate-900 p-3 rounded-2xl"
            to={`/chapter/${+newchapno - 1}`}
            onClick={() => {
              window.location.href = `/chapter/${+newchapno - 1}`;
            }}
          >
            Previous
          </Link>
          <Link
            className="bg-slate-900 p-3 rounded-2xl"
            to={`/chapter/${+newchapno + 1}`}
            onClick={() => {
              window.location.href = `/chapter/${+newchapno + 1}`;
            }}
          >
            Next
          </Link>
        </div>
      </div>
      <div className="w-[80vw] my-5 [word-spacing:0.5px]">
        <pre className=" text-wrap">{data.content}</pre>
      </div>
      <div className=" child:m-5 m-5">
        <Link
          className="bg-slate-900 p-3 rounded-2xl"
          to={`/chapter/${+newchapno - 1}`}
          onClick={() => {
            window.location.href = `/chapter/${+newchapno - 1}`;
          }}
        >
          Previous
        </Link>
        <Link
          className="bg-slate-900 p-3 rounded-2xl"
          to={`/chapter/${+newchapno + 1}`}
          onClick={() => {
            window.location.href = `/chapter/${+newchapno + 1}`;
          }}
        >
          Next
        </Link>
      </div>
      <button
        className="scroll-to-top-button mb-5 bg-slate-900 p-3 rounded-2xl"
        onClick={scrollToTop}
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default Chapter;
