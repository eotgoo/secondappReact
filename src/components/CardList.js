import React from "react";
import "./cardList.css";
import CardItem from "./card";

const CardList = (props) => {
  return (
    <div className="users row">
      {props.users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
