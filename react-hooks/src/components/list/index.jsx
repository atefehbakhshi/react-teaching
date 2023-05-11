import React from "react";
import ListItem from "./ListItem";

const List = ({ myList }) => {
  return (
    <ul>
      {myList.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
};

export default List;
