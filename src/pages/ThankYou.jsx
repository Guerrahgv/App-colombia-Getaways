import React from 'react'
import {Container, Row , Col, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../Styles/thank-you.css'
import NewsLetter from '../../src/shared/NewsLetter'

const ThankYou = () => {
  return(
    <>
       <section>
        <Container>
            <Row >
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line" /></span>
                        <h1 className="mb-3 fw-semibold">Gracias!!</h1>
                        <h3 className="mb-4">Por Reservar</h3>
                        <Button className="btn primary__btn w-25"><Link to='/home'>Principal</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <NewsLetter/>
     
    </>
)}
export default ThankYou