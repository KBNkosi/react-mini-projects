import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const defaultList = JSON.parse(localStorage.getItem("groceryList") || "[]");

const setLocalStorage = (items) => {
  localStorage.setItem("groceryList", JSON.stringify(items));
};

function App() {
  const [groceryList, setGroceryList] = useState(defaultList);

  const handleIsChecked = (itemId) => {
    const newItems = groceryList.map((item) => {
      if (item.id === itemId) {
        return { ...item, isBrought: !item.isBrought };
      }
      return item;
    });
    setGroceryList(newItems);
    setLocalStorage(newItems);
  };

  const handleDelete = (id) => {
    const newGroceryList = groceryList.filter((item) => item.id !== id);

    setGroceryList(newGroceryList);
    setLocalStorage(newGroceryList);
  };

  return (
    <>
      <Form
        groceryList={groceryList}
        setGroceryList={setGroceryList}
        setLocalStorage={setLocalStorage}
      />
      <List
        handleDelete={handleDelete}
        handleIsChecked={handleIsChecked}
        groceryList={groceryList}
      />
    </>
  );
}

export default App;
