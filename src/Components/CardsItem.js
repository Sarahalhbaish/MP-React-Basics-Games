import React from 'react'
import { useState } from 'react'


const CardsItem = (props) => {
  const [cardname, setCardName] = useState("");
  const ifClickTwice = () => {
    setCardName(props.card.name);
    props.handleclick(props.card);
  }


  return (
    <button className='CardsBox' onClick={ifClickTwice}>
      {props.card.hide? "":cardname}
    </button>
  )
}

export default CardsItem




