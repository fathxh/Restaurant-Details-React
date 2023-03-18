import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <Card className='text-center'>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Thank you</Card.Title>
        <Card.Text>
          @fathxh
        </Card.Text>
        <Link className='btn btn-outline-dark rounded btn-sm' to={''}>Go to Top</Link>
      </Card.Body>
    </Card>
  )
}

export default Footer
