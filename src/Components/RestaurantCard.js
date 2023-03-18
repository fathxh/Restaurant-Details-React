import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RestaurantCard({item}) { 
    const {name}=item 
  return (
    <Link style={{textDecoration:'none'}} to={`details/${item.id}`}>
    <Card  className='p-3 my-3'>
    <Card.Img src={item.photograph} variant="top"/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p><strong>Cuisine:</strong>{item.cuisine_type}</p>
      </Card.Text>
      <p>{item.neighborhood}</p>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default RestaurantCard