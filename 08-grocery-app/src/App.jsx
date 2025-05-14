import { useEffect, useState } from "react";

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
    let elementName=e.target.name;

    console.log(elementName)
    console.log(elementName.value)

    // setIsBrought(e.target.name, e.target.checked);
  };

  const handleDelete = (removeItem) => {
    const newGroceryList = groceryList.filter((item) => item !== removeItem);

    setGroceryList(newGroceryList);
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

      <div>
        {groceryList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={isBrought}
              id={item}
              name={item}
              onChange={handleBrought}
            />
            <label htmlFor={item}>
              {isBrought ? (
                <h4 style={{ textDecoration: "line-through" }}>{item}</h4>
              ) : (
                item
              )}
            </label>
            <button onClick={() => handleDelete(item)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
