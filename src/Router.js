import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Booking from './pages/Booking/Booking';
import BookingComplete from './pages/BookingComplete';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting';
import Payment from './pages/Payment';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookingcomplete" element={<BookingComplete />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
