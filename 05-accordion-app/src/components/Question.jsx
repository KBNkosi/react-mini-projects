import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [viewInfo, setViewInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setViewInfo(!viewInfo)}>
          {viewInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {viewInfo ? <p>{info}</p> : ""}
      </header>
    </article>
  );
};


export default Question;
