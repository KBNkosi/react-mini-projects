import React from "react";

const List = ({handleBrought, handleDelete, groceryList}) => {
  return (
    <>
      <div>
        {groceryList.map((groceryItem) => (
          <div key={groceryItem.id}>
            <input
              type="checkbox"
              checked={groceryItem.isBrought}
              id={groceryItem.id}
              onChange={() => handleBrought(groceryItem.id)}
            />
            <label htmlFor={groceryItem.id}>
              {groceryItem.isBrought ? (
                <h4 style={{ textDecoration: "line-through" }}>
                  {groceryItem.name}
                </h4>
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
};

export default List;
