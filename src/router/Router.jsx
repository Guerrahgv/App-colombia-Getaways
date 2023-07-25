import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Booking from './../pages/Booking';
import BookingDetails from './../pages/BookingDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResult from './../pages/SearchResult';
import ThankYou from '../pages/ThankYou';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/booking/:id' element={<BookingDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/booking/searhResult' element={<SearchResult/>} />
        
    </Routes>
  )
}

export default Router