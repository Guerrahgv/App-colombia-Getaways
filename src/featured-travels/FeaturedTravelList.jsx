import React from 'react'
import TravelCard from '../shared/TravelCard'
import TourData from '../assets/data/tours'
import { Col } from 'reactstrap'

const FeaturedTravelList = () => {
  return (
    <>
    {
        TourData.map(tour=>(
            <Col lg='3' className='mb-4' key={tour.id}>
                <TravelCard tour={tour} />
            </Col>
        ))
    }
    </>
  )
}

export default FeaturedTravelList