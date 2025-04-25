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
    <article className="review">
      <div className="img-container">
      <img src={person.image} alt={person.name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
      </div>
      
      <h4 className="author">{person.name}</h4>
      <p className="job">{person.job}</p>
      <p className="info">{person.text}</p>
      <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
      
    </article>
  );
};

export default Review;
