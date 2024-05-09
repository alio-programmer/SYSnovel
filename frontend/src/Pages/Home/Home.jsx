import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/sys.jpeg";
import Cards from "./Helper/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const [chapters, setchapters] = useState([]);
  useEffect(() => {
    const getChapter = async () => {
      try {
        const res = await axios.get("https://sy-snovel.vercel.app/api/chapters");
        setchapters(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getChapter();
  }, []);
  return (
    <div className=" w-[100vw] flex flex-col items-center bg-slate-800 overflow-hidden">
      <div className="card card-side w-[800px] bg-base-100 shadow-xl m-10 p-5 flex flex-col items-center">
        <figure className=" flex items-center w-[300px] h-[300px]">
          <img src={logo} alt="Swordmaster Youngest Son" />
        </figure>
        <div className="card-body flex items-center justify-center">
          <h2 className="card-title">Synopsis</h2>
          <p>
            The story is about Jin Runcandel, the youngest son of the most
            prestigious swordsman family in the land, the Runcandels. Jin is
            banished from the family after being cursed as a child with "Bladed
            Illusion", which prevents him from improving his swordsmanship
            skills. He later meets Valeria Hister, a magic master, who helps him
            develop his magical talents. Jin eventually meets the God of
            Shadows, Solderet, and makes a contract with him. After a tragic
            fate, a God gives Jin a second chance and he must use his new powers
            for good.
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
      <div className=" grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 m-5">
        {chapters.map((item) => (
          <Link
            className="hover:scale-105 hover:text-blue-500"
            to={`/chapter/${item.Chapterno}`}
          >
            <Cards key={item._id} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
