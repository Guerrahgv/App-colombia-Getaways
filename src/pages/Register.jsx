import React, {useState} from 'react'
import '../../src/Styles/login.css'
import {Container , Row , Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import registerImg from '../../src/assets/images/register.png'
import userIcon from '../../src/assets/images/user.png'



const Register = ()=> {
  const [credentials, setCredentials] = useState({
    userName:undefined,
    email: undefined,
    pwd:undefined,
  });
  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
 
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Registrarse</h2>
              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type='text' placeholder='Usuario' id="userName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type='email' placeholder='Correo' id="email" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type='password' placeholder='****' id="pwd" required onChange={handleChange}/>
                </FormGroup>
                <Button className='btn primary__btn auth_btn' type='submit'>Crear Cuenta</Button>
              </Form>
              <p>Tienes cuenta? <Link to={'/login'}>Ingresar</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register