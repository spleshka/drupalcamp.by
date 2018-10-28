import React from 'react';

const GlobalFooter = () => (
  <section className="footer">
    <div className="footer-base">
      <div className="container">

        <div className="col-md-6">
          <ul className="footer-nav">
            <li className="footer-nav-item"><a href="#">Contact</a></li>
            <li className="footer-nav-item"><a href="#">Code of Conduct</a></li>
          </ul>
        </div>

        <div className="col-md-6 align-right">

          <ul className="socials-nav align-right">
            <li className="socials-nav-item">
              <a href="#"><span className="fa fa-twitter" /></a>
            </li>
          </ul>

          <p className="text-alt">
            <small>All Rights Reserved © 2019</small>
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default GlobalFooter;
