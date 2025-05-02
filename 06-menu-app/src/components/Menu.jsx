import React from 'react';

const Menu = ({title,price,img,desc}) => {
  return(
    <article>
      <div>
        <img src={img} alt={title}  style={{width: '150px'}} />
      </div>
      <h4>{title}</h4>
      <p>{price}</p>
      <p>{desc}</p>
    </article>
  );
};

export default Menu;
