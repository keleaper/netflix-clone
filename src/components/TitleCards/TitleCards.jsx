import React, { useEffect, useRef } from 'react';
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";



const TitleCards = ({title, category}) => { 
  
  
  
  // useRef() looks like useState();
  const cardsRef = useRef();  // The useRef hook allows you to persist values between renders without triggering a re-render.

  function handleWheel(event) {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() =>{
  cardsRef.current.addEventListener("wheel", handleWheel) // When the "wheel" is used it calls the handlewheel function
},[])
  return (
    <div className="titleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2> {/* (Tanery Operator) title ? title : "" means when the title is available it will display this title ELSE display "This text" */}
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => { // Grabs ahold of card info and the index (allows us to use card. to map to our array) index is used for the key which is needed
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
          </div>
          );
        })}
      </div>
    </div>
  )
}

export default TitleCards
