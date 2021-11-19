import React from "react";
import { Card, Button } from "react-bootstrap";

import './CoffeeCard.css'

const coffeeImage = "https://static.wixstatic.com/media/c4bc6c_bb5653f74f4c4c5a85bfd539d8b61aa2~mv2.png/v1/fill/w_1000,h_996,al_c,usm_0.66_1.00_0.01/c4bc6c_bb5653f74f4c4c5a85bfd539d8b61aa2~mv2.png"

const CoffeeCard = ({obj}) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <img className="coffeeCardImage" src={coffeeImage} alt="" />
        <p>Grind Unit: {obj.grind}
          <br />
          Type of Bean{obj.bean.name}
        </p>
        <Button className="buttonCard">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CoffeeCard;
