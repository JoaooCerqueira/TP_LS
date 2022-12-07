import React from "react";
import "./card.css";
import {
  PLACEHOLDER_CARDBACK_PATH,
  PLACEHOLDER_CARD_PATH,
} from "../../constants";

function Card({ card }) {
  return (
    <div className="card front" data-logo={card.name}>
      
    </div>
  );
}

export default Card;
