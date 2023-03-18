import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/RestoAction'

function Home() {
  // const [restaurant,setRestaurant]= useState([])
  // const getRestaurant= async ()=>{
  //     await fetch('/restaurants.json')
  //     .then((data)=>data.json())
  //     .then((data)=>{
  //         setRestaurant(data.restaurants)
  //     })
  // }
  const dispatch = useDispatch()
  const restaurantData = useSelector(state => state.restaurantReducer)
  const { restaurants } = restaurantData
  console.log(restaurantData);

  useEffect(() => {
    dispatch(listRestaurants())
  })

  return (
   (restaurants?
      <Row>
        {restaurants.map((item) => (
          <Col sm={12} md={8} lg={6} xl={3}>
            <RestaurantCard item={item} />
          </Col>
        ))}
      </Row>
      :"null")
  )
}

export default Home
