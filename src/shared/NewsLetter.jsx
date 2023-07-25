import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../shared/newletter.css";
import tourist from "../assets/images/tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
            <Col lg='2'>
            </Col>
          <Col lg="4">
            <div className="newsletter__content">
              <h2>Subscribete a Nuestro Boletin</h2>
              <div className="newsletter__input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Tu Correo"
                />
                <button className="btn newsletter__btn">Subscribete</button>
              </div>
              <p>
                ¡Explora tu propio país y descubre maravillas ocultas! Únete a
                nuestro boletín de viajes y sé el primero en recibir consejos,
                ofertas exclusivas y destinos inspiradores para tus próximas
                aventuras. ¡Suscríbete ahora y comienza a planificar tus viajes
                por nuestro hermoso país! 🌍✈️
              </p>
            </div>
          </Col>
          <Col lg="4">
            <div className="newsletter__img">
              <img src={tourist} alt="Turista" />
            </div>
          </Col>
          <Col lg='2'>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
