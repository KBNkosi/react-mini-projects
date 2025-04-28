import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import questions from "./data"


const Question = () => {
  const [viewInfo, setViewInfo] = useState({});

 
  const handleButtonClick=(id)=>{
   setViewInfo((prevState)=>({
     ...prevState,[id]:!prevState[id]
   }))
  }

  return (
    <>
     {questions.map((question)=>(
       <article>
       <header>
         <h4>{question.title}</h4>
         <button type="button" onClick={()=>handleButtonClick(question.id)} >
          {viewInfo ? <AiOutlineMinus />: <AiOutlinePlus />}
         </button>
        {viewInfo[question.id] ? <p>{question.info}</p>: ""}
       </header>
     </article>
     ))}
    </>
  );
};

export default Question;
