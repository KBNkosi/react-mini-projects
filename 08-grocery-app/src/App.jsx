import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [isBrought, setIsBrought] = useState(false);
  const [groceryList, setGroceryList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const groceryItem = item;

    setGroceryList(() => [...groceryList, groceryItem]);

    setItem("");
  };

  const handleBrought = (e) => {
     setIsBrought(e.target.checked);
   
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

      <form >
        {groceryList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={isBrought}
              id="brought"
              name="brought"
              onChange={handleBrought}
            />
            <label htmlFor="brought">
              {item && <h4 style={{textDecoration:"line-through"}}>{item}</h4>}
            </label>
          </div>
        ))}
      </form>
    </>
  );
}

export default App;
