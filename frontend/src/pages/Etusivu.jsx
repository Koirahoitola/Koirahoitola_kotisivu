import React from 'react';

export default function Etusivu() {
  return (
    <div className="container text-center mt-5">
      <h1 className="header">Welcome to Koirahoitola Kotisivu!</h1>
      <button type="button" className="btn btn-primary">napinväri vaihdettu main.scss</button>

      <h2 className="mt-4">Laravel API test</h2>
      <p id="api-message">Loading...</p>
    </div>
  );
}
