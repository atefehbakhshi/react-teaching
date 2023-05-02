import { useEffect, useState } from "react";
import "./App.css";

const list = JSON.parse(localStorage.getItem("myList")) || [];

function App() {
  const [name, setName] = useState("");
  const [myList, setMyList] = useState(list);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setMyList((prev) => [...prev, name])}>
        Add me
      </button>
      <ul>
        {myList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
