import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
      <main>
        <section className="container">
          <h2>{people.length} Birthdays today</h2>
          {people.map((person) => (
            <List key={person.id} {...person} />
          ))}
          <button type="button" onClick={handleClick}>
            clear
          </button>
        </section>
      </main>
    
  );
}

export default App;
