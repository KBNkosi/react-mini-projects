import { useEffect, useState } from "react";

// const getLocalStorage=()=>{
//   let list=localStorage.getItem("groceryList");
//    if(list){
//     list=JSON.parse(localStorage.getItem("groceryList"));
//    }else{
//     list=[];
//    }

//    return list;
// }

const defaultList=JSON.parse(localStorage.getItem("groceryList") || "[]");


const setLocalStorage=(items)=>{
  localStorage.setItem("groceryList",JSON.stringify(items))
};

function App() {
  const [item, setItem] = useState("");
  const [groceryList, setGroceryList] = useState(defaultList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const groceryItem = {
      id:Date.now(),
      name: item,
      isBrought: false,

    };

    const newList= [...groceryList, groceryItem];

    setGroceryList( newList);
    setLocalStorage(newList)

    setItem("");
  };

  const handleBrought = (id) => {

    setGroceryList(groceryList.map((item)=>{
      if(item.id === id){
        return {...item, isBrought: !item.isBrought};
      }
      return item;
    }));
  };

  const handleDelete = (id) => {
    const newGroceryList = groceryList.filter((item) => item.id !== id);

    setGroceryList(newGroceryList);
    setLocalStorage(newGroceryList);
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
        {groceryList.map((groceryItem) => (
          <div key={groceryItem.id}>
            <input
              type="checkbox"
              checked={groceryItem.isBrought}
              id={groceryItem.id}
              onChange={()=>handleBrought(groceryItem.id)}
            />
            <label htmlFor={groceryItem.id}>
              {groceryItem.isBrought ? (
                <h4 style={{ textDecoration: "line-through" }}>{groceryItem.name}</h4>
              ) : (
                groceryItem.name
              )}
            </label>
            <button onClick={() => handleDelete(groceryItem.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
