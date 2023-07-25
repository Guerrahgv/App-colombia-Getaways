import React, {useState, useEffect} from 'react'
import TourData from '../assets/data/tours'
import CommonSection from '../shared/CommonSection'
import TravelCard from '../shared/TravelCard'
import SearchBar from '../shared/SearchBar'
import NewsLetter from '../shared/NewsLetter'
import { Container, Row, Col } from 'reactstrap'
import '../Styles/booking.css'


const Booking = () => {

const [pageCount, setPageCount]=useState(0);
const [pages, setPage]= useState(0);

useEffect(()=>{
  const pages = Math.ceil(5/4);
  setPageCount(pages);
}, [pages])
      
    
  return ( 
    <>
  <CommonSection title={"Todas las Travesias"}/>
  <section>
    <Container>
      <Row>
        <Col>
          <SearchBar/>
        </Col>
      </Row>
    </Container>
  </section>
  <section className='pt-0'>
    <Container>
      <Row>
            {
              TourData?.map(tour=>(
              <Col lg='3' className='mb-4' key={tour.id}>
                <TravelCard tour={tour}/>
                </Col>
            ))}  
            <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number=>(
                    <span key={number} onClick={()=>setPage(number)} className={pages===number ?'active__page':''}>
                      {number+1}
                    </span>
                  ))}
                </div>
            </Col>       
      </Row>
    </Container>
  </section>
  <NewsLetter/>
   </>
  )
}

export default Booking