import React from 'react'
import CardsData from '../Components/CardsData';
import { useState } from 'react';
import CardsItem from '../Components/CardsItem';
import '../App.css';

const PlayPage = () => {
  const selectedCards = [];
  const disappear = (object , setObject) => {
    selectedCards.push(object);
    console.log(selectedCards.length);
    console.log(selectedCards);
    if (selectedCards.length >= 2){
      if ( selectedCards[0].name === selectedCards[1].name){
        selectedCards.length = 0;
        console.log(selectedCards.length);
        console.log(selectedCards);
      } else {
        setObject("");
        selectedCards.length = 0;
        console.log(selectedCards.length);
        console.log(selectedCards);
      }
    }
    
  }

  const [cards, setcards] = useState(CardsData);

    const ShowCard = () => {
       return cards.map((card) => <CardsItem card={card} handleclick={disappear} key={card.id}/> )
    }

  return (
    <div className='GameBox'>
    <div className='card-container'>
      {ShowCard()}
    </div>
    </div>
  )
}

export default PlayPage;