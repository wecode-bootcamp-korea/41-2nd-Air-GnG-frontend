import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Booking from './pages/Booking/Booking';
import BookingComplete from './pages/BookingComplete';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting';
import HostingComplete from './pages/HostingComplete';
import Wishlist from './pages/Wishlist';
import KakaoLogin from './components/Nav/components/KakaoLogin';
import OuletPage from './OuletPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OuletPage />}>
          <Route index element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookingcomplete" element={<BookingComplete />} />
          <Route path="/hostingcomplete" element={<HostingComplete />} />
          <Route path="/rooms/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
