import React from "react";
import CardsUI from "./CardsUI";
const Cards = () => {
  return (
      <>
   <CardsUI title="Pop Concerts" btn1="32 events" btn2="3k tickets" btn3="from 10$" className="container"></CardsUI>
   <CardsUI title="Rock Concerts" btn1="32 events" btn2="3k tickets" btn3="from 10$" className="container cnt_2"></CardsUI>
   <CardsUI title="Hip Hop Concerts" btn1="32 events" btn2="3k tickets" btn3="from 10$" className="container cnt_3"> </CardsUI>
   </>
  );
};

export default Cards;
