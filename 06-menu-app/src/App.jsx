import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./components/data";

function App() {
  const [dataItems, setDataItems] = useState(data);

  const handleCategoryChange = (category) => {
    if (category === "ALL") {
      setDataItems(data);
    } else {
      const categoryItems=data.filter((item) => item.category === category)
      
      setDataItems(categoryItems);
    }
  };

  return (
    <>
      <Categories handleCategoryChange={handleCategoryChange} />

      {dataItems.map((item) => (
        <Menu key={item.id} {...item} />
      ))}
    </>
  );
}

export default App;
