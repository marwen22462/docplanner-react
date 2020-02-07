import React from "react";

export default function CityCart(props) {
  return (
    <div className='cards'>
      {props.cart.map((el, i) => (
        <div className="city">
          <img src={el.pic} alt="cityPic" />
          <div className='inder-cards'>
          <p>{el.title}</p>
          <button className='button'>See openings</button>
          </div>
        </div>
      ))}
    </div>
  );
}
