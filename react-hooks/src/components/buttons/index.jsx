import React, { useContext } from "react";
import { ListContext } from "../../App";

const AddButton = () => {
  const { addHandler, name } = useContext(ListContext);

  return (
    <button className="add-button" onClick={() => addHandler(name)}>
      Add me
    </button>
  );
};

export default AddButton;
