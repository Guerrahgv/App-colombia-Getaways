import React from 'react'
import Slider from 'react-slick'
import avatar01 from '../../assets/images/ava-01.jpg'
import avatar02 from '../../assets/images/ava-02.jpg'
import avatar03 from '../../assets/images/ava-03.jpg'

const Testimonials = () => {

const settings={
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 1000,
    swipeToSlide:true,
    autoplayspeed:2000,
    slidesToShow: 3,
    resonsive:[
        {
            breakpoint:992,
            setting:{
                slidesToShow: 2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:992,
            setting:{
                slidesToShow: 2,
                slidesToScroll:1,
            },
        },

    ]
}

  return (
    <Slider {... settings}>
        <div className="testimonial py-4 px-3">
                <p>el momento en que reservé mi viaje hasta el último día de la aventura, el equipo de estuvo disponible y dispuesto a ayudar en todo momento.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avatar01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Carmenza Guerrero</h6>
                        <p>Cliente</p>
                    </div>
                </div>
        </div>

        <div className="testimonial py-4 px-3">
                <p>No tengo más que elogios. Mi viaje con ellos fue simplemente espectacular. Cada detalle estaba cuidadosamente planeado, desde las actividades emocionantes hasta el alojamiento cómodo y las deliciosas comidas.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avatar03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Faber Lemus</h6>
                        <p>Cliente</p>
                    </div>
                </div>
        </div>

        <div className="testimonial py-4 px-3">
                <p>Me sorprendió gratamente la profesionalidad y la atención personalizada que recibí desde el momento en que reservé mi viaje. Los itinerarios estaban bien organizados, permitiéndome disfrutar al máximo de cada destino.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avatar02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Milena Mendoza</h6>
                        <p>Cliente</p>
                    </div>
                </div>
        </div>

        <div className="testimonial py-4 px-3">
                <p>el momento en que reservé mi viaje hasta el último día de la aventura, el equipo de estuvo disponible y dispuesto a ayudar en todo momento.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avatar01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Carmenza Guerrero</h6>
                        <p>Cliente</p>
                    </div>
                </div>
        </div>

        <div className="testimonial py-4 px-3">
                <p>No tengo más que elogios. Mi viaje con ellos fue simplemente espectacular. Cada detalle estaba cuidadosamente planeado, desde las actividades emocionantes hasta el alojamiento cómodo y las deliciosas comidas.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avatar03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Faber Lemus</h6>
                        <p>Cliente</p>
                    </div>
                </div>
        </div>

        <div className="testimonial py-4 px-3">
                <p>Me sorprendió gratamente la profesionalidad y la atención personalizada que recibí desde el momento en que reservé mi viaje. Los itinerarios estaban bien organizados, permitiéndome disfrutar al máximo de cada destino.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avatar02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Milena Mendoza</h6>
                        <p>Cliente</p>
                    </div>
                </div>
        </div>
    </Slider>
  )
}

export default Testimonials
