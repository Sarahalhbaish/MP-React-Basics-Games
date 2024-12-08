import React from "react";
import CardsData from "../Components/CardsData";
import { useState } from "react";
import CardsItem from "../Components/CardsItem";
import "../App.css";

const PlayPage = () => {
  const [selCards, setSelCards] = useState([]);
  const [cards, setcards] = useState(CardsData);
  const disappear = (object) => {
    const newCard = cards.map((card) => {
      if (card.id === object.id) {
        card.hide = false;
      }
      return card;
    });

    selCards.push(object);
    console.log(selCards);

    if (selCards.length == 2) {
      if (selCards[0].name === selCards[1].name) {
        setSelCards([]);
        console.log(selCards);
      } else {
        setTimeout(() => {
          const id = [selCards[0].id, selCards[1].id];
          newCard[id[0]].hide = true;
          newCard[id[1]].hide = true;
          setcards(newCard);
          console.log(selCards);
          setSelCards([]);
        }, 500);
      }
    }
    console.log(newCard);
    console.log(cards);
  };

  const ShowCard = () => {
    return cards.map((card) => (
      <CardsItem card={card} handleclick={disappear} key={card.id} />
    ));
  };

  return (
    <div className="GameBox">
      <div className="card-container">{ShowCard()}</div>
    </div>
  );
};

export default PlayPage;
