import React, { useState } from "react";
import "../../components/Reservation/reservation.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import {useNavigate} from 'react-router-dom'

const Reservation = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate()
  const formattedPrice = price.toLocaleString();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@server.com",
    fullName: "",
    phone: "",
    reserDate: "",
    sizeReser: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you")
  };

  return (
    <div className="reservation">
      <div className="reservation__top">
        <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>
            <span>Viaja Por: </span>${formattedPrice}
          </h3>
          <span className="tour__rating d-flex align-items-center">
            <i class="ri-star-s-fill"></i>
            {avgRating === 0 ? null : avgRating} ({reviews.length})
          </span>
        </div>
      </div>
      <div className="reservation__form">
        <h5>Informacion</h5>
        <Form className="reservation__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Nombre Completo"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Celular"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="reserDate"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Invitados"
              id="sizeReser"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="reservation__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1 ">
              ${formattedPrice} <i class="ri-close-line" /> 1 persona
            </h5>
            <span>${formattedPrice}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Cargo por Servicio:</h5>
            <span>50.000</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>
            {credentials.sizeReser===0 ? (Math.floor(formattedPrice)* 1000 + 50000).toLocaleString():(Math.floor(formattedPrice)*credentials.sizeReser * 1000 + 50000).toLocaleString()}
            </span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Reservar
        </Button>
      </div>
    </div>
  );
};

export default Reservation;
