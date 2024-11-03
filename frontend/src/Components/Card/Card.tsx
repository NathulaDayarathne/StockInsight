import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920"
        alt="image"
      />

      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="infon">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aut
        accusantium ratione nihil laboriosam esse, voluptatibus quaerat odit
        placeat impedit explicabo ducimus voluptates aperiam suscipit. Obcaecati
        temporibus nobis sunt minima?
      </p>
    </div>
  );
};

export default Card;
