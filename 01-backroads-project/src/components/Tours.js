import React from "react";
import Title from "./Title";
import { tours } from "../Links";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map(({id,img,title,date,text,location,price,time,icon})=>(
          <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className={icon}></i>
                </span>{" "}
                {location}
              </p>
              <p>{time}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
        ))}
            
      </div>
    </section>
  );
};

export default Tours;
