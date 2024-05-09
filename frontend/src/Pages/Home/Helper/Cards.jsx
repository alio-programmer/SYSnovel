import React from "react";

const Cards = ({ item }) => {
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
