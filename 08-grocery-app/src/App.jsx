import { useState } from "react";

const arr = ["firstItem", "secondItem"];

function App() {
  const [item, setItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const groceryItem = item;

    setGroceryList(() => [...groceryList, groceryItem]);

    setItem("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
