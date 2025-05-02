import React from "react";


const Categories = ({handleCategoryChange}) => {
  
  return (
    <section style={{ margin: "10px" }}>
      <button onClick={()=>handleCategoryChange("ALL")} style={{ margin: "10px", padding:"10px" }}>ALL</button>
      <button onClick={()=>handleCategoryChange("breakfast")} style={{ margin: "10px", padding:"10px" }}>Breakfast</button>
      <button onClick={()=>handleCategoryChange("lunch")} style={{ margin: "10px", padding:"10px" }}>Lunch</button>
      <button onClick={()=>handleCategoryChange("shakes")} style={{ margin: "10px", padding:"10px" }}>Shakes</button>
    </section>
  );
};

export default Categories;
