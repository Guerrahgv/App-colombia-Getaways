import React, {useRef} from 'react'
import { Col, Form, FormGroup } from "reactstrap";
import '../shared/searchBar.css'

const SearchBar = () => {

    const lugarRef = useRef('')
    const rrecoridoRef = useRef(0)
    const maxPeopleRef = useRef(0)

    const searchHandller=()=>{
        const lugar = lugarRef.current.value
        const rrecorido = rrecoridoRef.current.value
        const maxPersonas = maxPeopleRef.current.value

        if(lugar ==='' || rrecorido ===''|| maxPersonas ===''){
            return alert('Todos los Campos Requeridos para la Busqueda!');
        }

    }

  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i class="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Lugar</h6>
                            <input type="text" placeholder='Que Te Gustaria Recorrer?' ref={lugarRef}/>
                        </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i class="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Recorrido</h6>
                            <input type="number" placeholder='Recorrido en K/M' ref={rrecoridoRef}/>
                        </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                        <span><i class="ri-group-line"></i></span>
                        <div>
                            <h6>Max Personas</h6>
                            <input type="number" placeholder='0' ref={maxPeopleRef}/>
                        </div>
                </FormGroup>
                <span className='search__icon' type='submit' onClick={searchHandller}>
                <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar
