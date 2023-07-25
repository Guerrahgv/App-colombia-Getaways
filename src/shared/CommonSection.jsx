import React from 'react'
import '../shared/common-section.css'
import {Container, Row, Col} from 'reactstrap'

const CommonSection = ({title}) => {
  return (
    <section className="common__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <h1><strong>{title}</strong></h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection