import React from 'react';

const GlobalFooter = () => (
  <section className="footer">
    <div className="footer-base">
      <div className="container">

        <div className="col-md-3" style={{ marginBottom: '40px' }}>
          <h6>Diamond Sponsor</h6>
          <a
            href="https://drupalsquad.com"
            title="Drupal Squad"
          >
            <img src="/static/assets/img/sponsors/drupalsquad.png" alt="Drupal Squad" style={{ maxWidth: '180px' }} />
          </a>
          <br />
        </div>

        <div className="col-md-3" style={{ marginBottom: '40px' }}>
          <h6 style={{ marginBottom: '20px' }}>Gold Sponsor</h6>
          <img src="/static/assets/img/sponsors/engine-white.png" alt="Engine Eight" style={{ maxWidth: '180px' }} />
        </div>

        <div className="col-md-3"  style={{ marginBottom: '40px' }}>
          <h6>Hosting Sponsor</h6>
          <a
            title="platform.sh"
            href="https://platform.sh?medium=referral&utm_campaign=sponsored_sites&utm_source=drupalcamp_belarus"
            target="_blank"
          >
            <img src="/static/assets/img/partners/platformsh.png" alt="Platform.sh logo" style={{ maxWidth: '180px' }} />
          </a>
        </div>

        <div className="col-md-3 align-right">

          <ul className="socials-nav align-right">
            <li className="socials-nav-item">
              <a href="https://twitter.com/drupalcampby" target="_blank">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="socials-nav-item">
              <a href="https://www.facebook.com/Drupal-Camp-Belarus-561950297656804/" target="_blank">
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="socials-nav-item">
              <a href="https://instagram.com/drupalcampbelarus" target="_blank">
                <span className="fa fa-instagram" />
              </a>
            </li>
            <li className="socials-nav-item">
              <a href="https://join.slack.com/t/drupal-belarus/shared_invite/enQtNjA5Njg3MzE5MTU4LWZiMzE0ZDczNzE0ZmRmY2EzOTZiYTU5ZTNiOTIwYmJiNjQwYjkzZTVhZGRhNjFlMjZjZWMwMTU1ZmMxOTc5MjI" target="_blank">
                <span className="fa fa-slack" />
              </a>
            </li>
          </ul>

          <p className="text-alt">
            <small>All Rights Reserved © 2019</small>
          </p>

          <p>
            <a href="https://www.drupal.org/dcoc" target="_blank">Code of Conduct</a>
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default GlobalFooter;
