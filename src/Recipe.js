import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Recipe = (props) => {
  const { title, calories, image, ingredients, making, hlabel, cuisine } = props;
  const cuisineName=(""+cuisine).toUpperCase();
  console.log(typeof(cuisine));
  console.log("Reached Component");
  return (
    <Card style={{ width: '31%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> <h3>{title}</h3> <p>{cuisineName}</p></Card.Title>
        <Card.Text>
        <strong>Ingredient List:</strong>
          <ul style={{ textAlign:"left" }}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Calories:</strong> {calories.toFixed(3)} cal.</ListGroup.Item>
        <ListGroup.Item>{hlabel[0]} I {hlabel[1]} I {hlabel[2]}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={making} target='_blank'>Click here for complete Making</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Recipe
