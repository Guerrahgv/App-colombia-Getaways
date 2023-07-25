import React from 'react'
import '../Footer/footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const quick_links = [
  {
    path: "/home",
    display: "Principal",
  },
  {
    path: "/about",
    display: "Nosotros",
  },
  {
    path: "/booking",
    display: "Reservar",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Galeria",
  },
  {
    path: "/login",
    display: "Ingresar",
  },
  {
    path: "/Register",
    display: "Registrarse",
  },
];
const Footer =()=> {

  return (
    <footer className="footer">
      <Container>
        <Row>
         <Col lg='3'>
            <div className="logo">
              <img className='logoImg' src={logo} alt="" />
              <p>¡Descubre promociones exclusivas, novedades emocionantes y viajes de ensueño! Síguenos en nuestras redes sociales #ViajaConNosotros.</p>
              <div className="social__links d-flex  justify-content-between gap-4">
                <span>
                      <Link to='#'><i class='ri-youtube-line'></i></Link>
                </span>
                <span>
                      <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
                <span>
                      <Link to='#'><i class="ri-facebook-fill"></i></Link>
                </span>
                <span>
                      <Link to='#'><i class="ri-tiktok-line"></i></Link>
                </span>
              </div>
            </div>
         </Col> 
         <Col lg='3' className='discovery__left'>
          <div className="footer__link-title">Descubre</div>
         <ListGroup className='footer__quick-links'>
          {
            quick_links.map((items, index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={items.path}>{ items.display }</Link>
              </ListGroupItem>
            ))
          }
         </ListGroup>
         </Col>

         <Col lg='3'>
         <div className="footer__link-title">Enlaces de Interes</div>
         <ListGroup className='footer__quick-links'>
          {
            quick_links2.map((items, index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={items.path}>{ items.display }</Link>
              </ListGroupItem>
            ))
          }
         </ListGroup>
         </Col>

         <Col lg='3'>
         <div className="footer__link-title">Contacto</div>
         <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-content-center gap-3'>
                    <p className='mb-0 d-flex align-content-center gap-2'>
                      <span><i class="ri-map-pin-line"></i></span>
                      Direccion: 
                    </p>
                    <p className='mb-0'>Valledupar(cesar)-Col</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-content-center gap-3'>
                    <p className='mb-0 d-flex align-content-center gap-2'>
                      <span><i class="ri-mail-line"></i></span>
                      Correo: 
                    </p>
                    <p className='mb-0'>developerhgv@gmail.com</p>
              </ListGroupItem>
              
              <ListGroupItem className='ps-0 border-0 d-flex align-content-center gap-3'>
                    <p className='mb-0 d-flex align-content-center gap-2'>
                      <span><i class="ri-phone-line"></i></span>
                      Tel: 
                    </p>
                    <p className='mb-0'>(+57) 3126688555</p>
              </ListGroupItem>
         </ListGroup>
         </Col>
         <Col lg='12' className='text-center pt-5'>
          <p className="copyright">
            © Copyright - All rights reserved, developed by <Link to='#'><strong>Gu3rr4</strong></Link> 
          </p>
         </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer