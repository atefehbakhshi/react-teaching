import React, { useContext } from "react";
import { ListContext } from "../../App";

const ListItem = ({ item }) => {
  const { deleteHandler } = useContext(ListContext);

  return (
    <li key={item}>
      <p>{item}</p>
      <button className="delete-button" onClick={() => deleteHandler(item)}>
        -
      </button>
    </li>
  );
};

export default ListItem;
