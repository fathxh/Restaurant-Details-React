import React from 'react'
import { useState, useEffect } from 'react'
import { Col, ListGroup, ListGroupItem, Row, Image, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Reviews from './reviews'

function Restodetails() {
  const [data, setData] = useState([])
  const params = useParams()
  const fetchData = async () => {
    await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((data) => setData(data.restaurants))
  }

  useEffect(() => {
    fetchData()
  }, [])
  const details = data.find((i) => i.id == params.id)
  return (
    <div>
      <Link className='btn btn-outline-dark my-2 btn-sm rounded' to='/'>Back</Link>
      {details ? (
        <Row className='my-3 p-5'>
          <Col md={4}>
            <Image className='img' src={details.photograph} fluid />
          </Col>
          <Col md={4} className='align-self-center '>
            <ListGroup>
              <ListGroupItem className='my-3 rounded'>
                <h2>{details.name}</h2>
                <h2>{details.neighborhood}</h2>
              </ListGroupItem>
              <ListGroup.Item className='my-3 rounded'>
                <p>cuisine: {details.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item className='my-3 rounded'>
                <p>Address: {details.address}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4} className='align-self-center'>
            <ListGroup >
              <ListGroup.Item className='py-3'>
                <h4>OPERATING HOURS</h4>
                <p>Monday:{details.operating_hours.Monday}</p>
                <p>Tuesday:{details.operating_hours.Monday}</p>
                <p>wednesday:{details.operating_hours.Monday}</p>
                <p>Friday:{details.operating_hours.Monday}</p>
                <p>Saturday:{details.operating_hours.Monday}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Row >
    <Card className='m-3 p-3 rounded card'>
    <Reviews data={details.reviews}/>

    </Card>
  </Row>
        </Row>
      ) : "null"
      }
    </div>
  )
}

export default Restodetails