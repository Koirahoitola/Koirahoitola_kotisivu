import React from 'react';
import Carousel from '../components/carousel.jsx';

export default function Kuvagalleria() {
  return (
    <div className="container my-6">
      <h1 className="text-center mb-6">Kuvagalleria</h1>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
}
