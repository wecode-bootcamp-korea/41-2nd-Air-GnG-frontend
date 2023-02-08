import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';

export default function OuletPage() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
