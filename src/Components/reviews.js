import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function Reviews({data}) {
  return (
    <div>

      { data.map((item)=>(
        <>

        <h6>{item.name}</h6>

        <ListGroup>
            <ListGroupItem>
            <p>{item.date}</p>
            <p>{item.comments}</p>
            </ListGroupItem>
        </ListGroup>
           
        
        </>

        ))}
    </div>
  )
}

export default Reviews