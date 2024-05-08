import React from "react";
import Chapter from "../../Chapter/Chapter";
import { Link, Navigate } from "react-router-dom";

const Cards = ({ item }) => {
  const handleclick = () => {
    <Link to={`/chapter/${item._id}`} state={{ item }} />;
  };
  return (
    <div className="card w-60 bg-base-100 shadow-xl flex flex-col items-center">
      <div className="card-body">
        <h2 className="card-title">Chapter No: {item.Chapterno}</h2>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default Cards;
