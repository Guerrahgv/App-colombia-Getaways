import React from "react";
import "../Styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import worldImg from "../assets/images/world.png";
import herovideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedTravelList from "../featured-travels/FeaturedTravelList";
import CreateImgGallery from "../components/Img-gallery/CreateImgGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Colombia tierra de sueños!"} />
                  <img className="worldImgC" src={worldImg} alt="Pueblo querido" />
                </div>
                <h1>
                  Atrevete a Viajar!
                  <span className="highlight"> Travesías por Colombia</span>
                </h1>
                <p>
                  En Colombia las paredes hablan. Las monumentales iglesias, las
                  empedradas calles y las bellas y conservadas plazas, casas y
                  parques de los Centros Históricos de cada uno de los Pueblos
                  Patrimonio de Colombia, narran nuestra herencia acumulada como
                  nación y nos dan como colombianos, sentido, identidad y
                  pertenencia.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                  <img src={heroImg} alt="Laguna de Guatape" title="Laguna de Guatape/ Piedra del Peñol " />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
              <video src={herovideo} controls muted title="Esta es Colombia" loop></video>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                  <img src={heroImg02} alt="Parque Nacional Sierra de la Macarena" title="Parque Nacional Sierra de la Macarena" />
              </div>
            </Col>
            <SearchBar/> {/*search de busqueda*/}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
                <h5 className="services__subtitle">Te ofrecemos</h5>
                <h2 className="services__title">El mejor Servicio de Acompañamiento</h2>
            </Col>
            <ServicesList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
                <Subtitle subtitle={'Explora'}/>
                <h2 className="featured__tour-title">
                  Viajes Recomendados
                </h2>
            </Col>
            <FeaturedTravelList/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experiencia  '}/>
                <h2>Estamos para Servirles</h2>
                  <p>
                  Descubre Colombia a través de nuestro increíble servicio de booking de viajes. En nuestra agencia, entendemos la importancia de brindar atención personalizada y de calidad a nuestros clientes. Estamos comprometidos en hacer de tu experiencia de viaje por Colombia algo único y memorable.
                  </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>15k+</span>
                  <h6>Viajes Exitosos</h6>
                </div>
                <div className="counter__box">
                  <span>3k+</span>
                  <h6>Nuestros Clientes</h6>
                </div>
                <div className="counter__box">
                  <span>5</span>
                  <h6>Años de Experiencia</h6>
                </div>
              </div>
            </Col>

            <Col lg='6'>
            <div className="experience__img d-flex justify-content-center">
              <img src={experienceImg} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col  lg='12'>
                  <Subtitle subtitle={'Galeria'}/>
                  <h2 className="gallery__title">Instantaneas de Nuestros Recorridos</h2>
            </Col>
            <Col  lg='12'>
              <CreateImgGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col  lg='12'>
                  <Subtitle subtitle={'Testimonios'}/>
                  <h2 className="testimoni__title">Testimonios de Nuestros Clientes</h2>
            </Col>
            <Col lg='12'>
                  <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  );
};

export default Home;
