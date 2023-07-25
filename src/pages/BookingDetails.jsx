import React, {useRef, useState} from "react";
import "../Styles/bookingDetails.css";
import { Container, Row, Col, Form, ListGroup} from "reactstrap";
import { useParams } from "react-router-dom";
import TourData from "../assets/data/tours";
import avatar from '../assets/images/ava-01.jpg'
import Reservation from "../components/Reservation/Reservation";

const BookingDetails = () => {
  const { id } = useParams();
  const reviewsMsgRef =useRef('');
  const [travelRaiting, setTravelRaiting]=useState(null);
  
  const tour = TourData.find((tour) => tour.id === id);
  const options ={day:'numeric', month:'long', year:'numeric', }
  const {
    photo,
    title,
    desc,
    price,
    city,
    avgRating,
    address,
    dpto,
    reviews,
  } = tour;

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewsMsgRef.current.value

  }
 

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="Travel" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-2">
                    <span className="tour__rating d-flex  align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--primary-color)" }}
                      />
                      {avgRating}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill" />
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line" />
                      {city}({dpto})
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-money-dollar-circle-line" />
                      {price}
                    </span>
                  </div>
                  <h5>Descripcion:</h5>
                  <p>{desc}</p>
                </div>
              </div>
              <div className="tour__reviews mt-4">
                <h4>Reseñas({reviews?.length})</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={()=>setTravelRaiting(1)}>1<i class="ri-star-s-fill" /></span>
                    <span onClick={()=>setTravelRaiting(2)}>2<i class="ri-star-s-fill" /></span>
                    <span onClick={()=>setTravelRaiting(3)}>3<i class="ri-star-s-fill" /></span>
                    <span onClick={()=>setTravelRaiting(4)}>4<i class="ri-star-s-fill" /></span>
                    <span onClick={()=>setTravelRaiting(5)}>5<i class="ri-star-s-fill" /></span>
                  </div>
                  <div className="review__input">
                    <input type="text" ref={reviewsMsgRef} placeholder="Comparte tus Comentarios" required />
                    <button className="btn primary__btn text-white" type="submit">
                      Enviar Reseña
                    </button>
                  </div>
                </Form>
                <ListGroup className="user__reviews">
                  {
                      reviews?.map(review =>(
                        <div className="review__item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>user</h5>
                                <p>{new Date('01-18-23').toLocaleDateString("es",  options)}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                5<i class="ri-star-s-fill" />
                                </span>
                            </div>
                            <h6>Recorridos Increibles</h6>
                          </div>
                        </div>
                      ))
                  }
                </ListGroup>

              </div>
            </Col>
            <Col lg="4">
            <Reservation tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BookingDetails;
