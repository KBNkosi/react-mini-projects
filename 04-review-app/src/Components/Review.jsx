import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(people[0]);

  const nextPerson = () => {
    const newIndex = (index + 1) % people.length;
    setIndex(newIndex);
    setPerson(people[newIndex]);
  }

  

  return (
    <article>
      <img src={person.image} alt={person.name} />
      <h4>{person.name}</h4>
      <h4>{person.job}</h4>
      <button type='type' onClick={nextPerson}>next person</button>
    </article>
  )
};

export default Review;
