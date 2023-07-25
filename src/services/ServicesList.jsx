import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from './../assets/images/guide.png'
import customizationImg from './../assets/images/customization.png'


const servicesData = [
    {
        imgUrl:weatherImg,
        title:'Calculas Tu Tiempo',
        desc: 'Puedes verficar el tiempo que estaras en el rrecorrido.',
    },
    {
        imgUrl:guideImg,
        title:'La mejor Guia Turistica',
        desc: 'Te ofrecemos acompañamiento en todo el rrecorrido.',
    },
    {
        imgUrl:customizationImg,
        title:'Personalizas El Recorrido',
        desc: 'Puedes Personalizar el rrecorrido como lo Quieras.',
    }
]


const ServicesList = () => {
  return (
   <>
   {servicesData.map((item, index) => (
         <Col lg="3" key={index}>
             <ServiceCard item={item} />
         </Col>
    ))}
   </>
  )
}

export default ServicesList
