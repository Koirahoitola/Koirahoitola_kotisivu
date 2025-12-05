import React from 'react';
import Banner from '../components/Banner';

export default function Etusivu() {
  return (
  <>
      <Banner
        image="/gallery/collie.jpg"
        title="TOINEN KOTI"
        subtitle={"Myllylammentie 1\n91310 Arkala"}
      />

      <div className="container text-center mt-5">
        <button type="button" className="btn btn-primary">
          napinväri vaihdettu main.scss
        </button>

        <h2 className="mt-4">Laravel API test</h2>
        <p id="api-message">Loading...</p>
      </div>
    </>
  );
}
