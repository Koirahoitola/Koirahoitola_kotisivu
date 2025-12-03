import React from 'react';

export default function Yhteystiedot() {
  return (
    <div>
      {/* Hero section with background image */}
      <div className="text-white text-center position-relative" style={{ 
        backgroundImage: 'url(/gallery/dog-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '100px 20px'
      }}>
        <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>
        <div className="position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-2">Yhteystiedot</h1>
          <p className="lead">Ota yhteyttä meihin</p>
        </div>
      </div>

      {/* Contact info section with background */}
      <div className="position-relative d-flex justify-content-center py-5" style={{
        backgroundImage: 'url(/gallery/dog2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '700px',
        alignItems: 'center'
      }}>
        <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}></div>
        
        <div className="container my-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 p-5" style={{
                background: 'rgba(43, 47, 47, 0.75)',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Background image at top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '180px',
                  backgroundImage: 'url(/gallery/dog-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}></div>

                {/* Content wrapper */}
                <div style={{ position: 'relative', zIndex: 1, paddingTop: '60px' }}>
                  {/* Logo circle */}
                  <div className="text-center mb-4">
                    <div style={{
                      width: '100px',
                      height: '100px',
                      margin: '-70px auto 0',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <svg width="100" height="100" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="38" fill="#FFD700"/>
                        <path d="M40 20C35 20 30 22 28 27L25 30C23 32 22 35 22 38V50C22 55 25 60 30 62C32 63 35 63 37 62L40 45L43 62C45 63 48 63 50 62C55 60 58 55 58 50V38C58 35 57 32 55 30L52 27C50 22 45 20 40 20Z" fill="black"/>
                        <circle cx="32" cy="40" r="3" fill="black"/>
                        <circle cx="48" cy="40" r="3" fill="black"/>
                        <path d="M36 48C36 50 38 52 40 52C42 52 44 50 44 48" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  <h2 className="text-center mb-4" style={{ color: '#FFD700', fontSize: '1.8rem', fontWeight: 'bold' }}>Lemmikkihoitola Toinen Koti</h2>

                  <div className="mb-4 text-center">
                    <p className="mb-1" style={{ color: '#e9ecef' }}>Myllylammientie 1</p>
                    <p style={{ color: '#e9ecef' }}>91310 Arkala</p>
                  </div>

                  <div className="mb-4 text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <span>📞</span>
                      <a href="tel:+358504707476" className="text-white fw-bold text-decoration-none">
                        +358 50 470 7476
                      </a>
                    </div>
                  </div>

                  <div className="mb-4 text-center">
                    <a href="mailto:sahkoposti@example.com" className="text-white text-decoration-underline">
                      Läheta sähköpostia
                    </a>
                  </div>

                  <div className="mb-4 text-center">
                    <p className="mb-0 small" style={{ color: '#b0b6b6' }}>Y-tunnus: 2822894-7</p>
                  </div>

                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle p-2" title="Instagram" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      📷
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle p-2" title="Facebook" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      👤
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business hours section */}
      <div className="container my-5">
        <div className="card border-0 shadow-sm p-4">
          <h3 className="card-title mb-4">Aukioloajat</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bg-light p-3 rounded">
                <p className="fw-bold mb-2">Maanantai - Perjantai</p>
                <p className="text-muted mb-0">09:00 - 17:00</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bg-light p-3 rounded">
                <p className="fw-bold mb-2">Lauantai</p>
                <p className="text-muted mb-0">10:00 - 14:00</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bg-light p-3 rounded">
                <p className="fw-bold mb-2">Sunnuntai</p>
                <p className="text-muted mb-0">Suljettu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
