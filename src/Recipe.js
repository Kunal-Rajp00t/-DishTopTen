import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './mycss.css';

const Recipe = (props) => {
  const { title, calories, image, ingredients, making, hlabel, cuisine } = props;
  const cuisineName=(""+cuisine).toUpperCase();
  // console.log(typeof(cuisine));
  // console.log("Reached Component");
  return (
    <Card className='card' >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> <h3>{title}</h3> <p className='cus'>{cuisineName} - CUISINE</p></Card.Title>
        <Card.Text>
        <strong>Ingredient List:</strong>
          <ul style={{ textAlign:"left" }}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush back">
        <ListGroup.Item className='back'><strong>Calories:</strong> {calories.toFixed(3)} cal.</ListGroup.Item>
        <ListGroup.Item className='back' style={{color:"rgb(131 131 131)"}}>{hlabel[0]} I {hlabel[1]} I {hlabel[2]}</ListGroup.Item>
      </ListGroup>
      <Card.Body>Full Recipe Here : 
        <Card.Link href={making} target='_blank' style={{ textDecoration: 'none' }}> Link  
        <span role="img" aria-label="link"> &#x1F517;</span></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Recipe;