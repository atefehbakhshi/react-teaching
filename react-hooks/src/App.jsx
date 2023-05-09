import { useEffect, useReducer, useState } from "react";
import "./App.css";

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

function App() {
  const [myList, dispatch] = useReducer(reducerFn, list);
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => dispatch({ type: "add", payload: name })}
      >
        Add me
      </button>
      <ul>
        {myList.map((item) => (
          <li key={item}>
            <p>{item}</p>
            <button
              className="delete-button"
              onClick={() => dispatch({ type: "remove", payload: item })}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
