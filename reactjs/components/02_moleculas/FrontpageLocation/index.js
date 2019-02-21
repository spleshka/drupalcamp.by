import React from 'react';
import YandexMap from '../../01_atoms/YandexMap';

const FrontpageLocation = () => (
  <section id="contacts">
    <div className="contacts-wrapper">
      <div id="contacts-map" className="map" style={{ height: '560px' }}>
        <YandexMap
          lat={53.893880}
          lng={27.534815}
          zoom={13}
        />
      </div>

      <div className="container contacts-on-map-container">
        <div className="contacts-on-map">
          <h3>Location</h3>

          <ul className="list">
            <li>
              <i className="fa fa-map-marker" />
              <a href="https://yandex.com/maps/-/CBBd62HOKB" target="_blank">Belarus, Renaissance Minsk Hotel</a>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:info@drupalcamp.by">info@drupalcamp.by</a>
            </li>
            <li>
              <i className="fa fa-twitter" />
              <a href="https://twitter.com/@DrupalCampBy" target="_blank">DrupalCampBy</a>
            </li>
            <li>
              <i className="fa fa-clock-o" />
              10am - 7pm, 18-19 May 2019
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>
);

export default FrontpageLocation;
