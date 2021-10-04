import React from 'react';
import "./CardsUI.css"
const CardsUI = (props) => {
    return (
        <>
        <div className={props.className}>
          <h5>{props.title}</h5>
          <div>
          <button className="btnId">{props.btn1}</button>
          <button className="btn2">{props.btn2}</button>
          <button className="btn3">{props.btn3}</button>
          </div>
        </div>
      </>
    )
}

export default CardsUI
