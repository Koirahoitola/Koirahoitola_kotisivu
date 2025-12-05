import React from 'react';
import '../styles/banner.css';

export default function Banner({ image, title, subtitle }) {
  return (
    <div
      className="banner mb-5 d-flex align-items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-start">
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
