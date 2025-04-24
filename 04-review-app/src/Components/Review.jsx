import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(people[0]);

  const nextPerson = () => {
    const newIndex = (index + 1) % people.length;
    setIndex(newIndex);
    setPerson(people[newIndex]);
  };

  const prevPerson = () => {
    const newIndex = (index - 1 + people.length) % people.length;
    setIndex(newIndex);
    setPerson(people[newIndex]);
  };

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * people.length);
    setIndex(newIndex);
    setPerson(people[newIndex]);
  };

  return (
    <article>
      <img src={person.image} alt={person.name} />
      <h4>{person.name}</h4>
      <h4>{person.job}</h4>
      <button type="type" onClick={nextPerson}>
        next person
      </button>
      <br />
      <button type="type" onClick={prevPerson}>
        previous person
      </button>
      <br />
      <button type="type" onClick={randomPerson}>
        random person
      </button>
    </article>
  );
};

export default Review;
