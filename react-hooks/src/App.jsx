import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import AddButton from "./components/buttons";
import List from "./components/list";

const list = JSON.parse(localStorage.getItem("myList")) || [];

const reducerFn = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
      break;
    case "remove":
      const filtredList = [...state].filter(
        (listItem) => listItem !== action.payload
      );
      return filtredList;
      break;

    default:
      break;
  }
};

export const ListContext = createContext({
  deleteHandler: () => {},
});

function App() {
  const [myList, dispatch] = useReducer(reducerFn, list);
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const deleteHandler = (item) => {
    dispatch({ type: "remove", payload: item });
  };

  const addHandler = (name) => {
    dispatch({ type: "add", payload: name });
  };

  return (
    <ListContext.Provider value={{ deleteHandler, addHandler, name }}>
      <div className="container">
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setName(e.target.value)}
        />
        <AddButton />
        <List myList={myList} />
      </div>
    </ListContext.Provider>
  );
}

export default App;
