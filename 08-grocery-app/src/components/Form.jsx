import { useState } from "react";

const Form = ({ groceryList,setGroceryList,setLocalStorage }) => {

  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const groceryItem = {
      id: Date.now(),
      name: item,
      isBrought: false,
    };

    const newList = [...groceryList, groceryItem];

    setGroceryList(newList);
    setLocalStorage(newList);

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
};

export default Form;
