import React from "react";
import { useState } from "react";

const CardsItem = (props) => {
  const [cardname, setCardName] = useState("");

  const ifClickTwice = () => {
    setCardName(props.card.name);
    props.handleclick(props.card);
  };
  
  const showCard = () => {
    return props.card.hide ? "" : cardname;
  };

  return (
    <button className="CardsBox" onClick={ifClickTwice}>
      {showCard()}
    </button>
  );
};

export default CardsItem;
