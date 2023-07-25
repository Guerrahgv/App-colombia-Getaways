import React from 'react'
import { Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../shared/travel-card.css'

const TravelCard = ({tour}) => {

    const {id, title, city, photo, price, featured, avgRating, reviews} = tour
    const formattedPrice = price.toLocaleString();
  

  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Destacado</span>}
            </div>
            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location d-flex  align-items-center gap-1'>
                    <i class="ri-map-pin-line"></i>{city}
                </span>
                <span className='tour__rating d-flex  align-items-center gap-1'>
                    <i class="ri-star-fill"></i>{avgRating} <span>({reviews.length})</span>
                </span>
            </div>
            <h5 className="tour__title">
                <Link to={`/booking/${id}`}>{title}</Link>
            </h5>
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h5>${formattedPrice}<span> por Persona </span></h5>
                <button className="btn booking__btn">
                    <Link to={`/booking/${id}`}>Ver</Link>
                </button>
            </div>
        </CardBody>
        </Card>
       
    </div>
  )
}

export default TravelCard