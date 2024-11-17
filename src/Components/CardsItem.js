import React from 'react'
import { useState } from 'react'


const CardsItem = (props) => {
  const [cardname, setCardName] = useState("");
  
  const ifClickTwice = () => {
    setCardName(props.card.name);
    props.handleclick(props.card , setCardName );
  }

  return (
    <button className='CardsBox' onClick={ifClickTwice}>
      {cardname}
    </button>
  )
}

export default CardsItem





//   if ( Count === 0){
  //       SetCardData(card.name);
  //       SetCount(1);
  //       SetClick(card => ({
  //         ...card,
  //         clk: 1
  //       }));
  //       console.log(card.clk);
  //       Disappear();
  //   }

  //   else if ( Count === 1){
  //     SetCardData("");
  //     SetCount(0);
      
  // }