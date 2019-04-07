import React from 'react';

const GlobalFooter = () => (
  <section className="footer">
    <div className="footer-base">
      <div className="container">

        <div className="col-md-3">
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <a href="https://www.drupal.org/dcoc" target="_blank">Code of Conduct</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <div className="platform_sh_widget">
            Hosting sponsored by the
            <a
              title="platform.sh"
              href="https://platform.sh?medium=referral&utm_campaign=sponsored_sites&utm_source=drupalcamp_belarus"
              target="_blank"
            >
              <img
                className="platformsh-logo"
                src="https://platform.sh/images/logo-white-2x.png"
                alt="Platform.sh logo"
                style={{ maxWidth: '180px' }}
              />
            </a>
          </div>
        </div>

        <div className="col-md-6 align-right">

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
              <a href="https://join.slack.com/t/drupal-belarus/shared_invite/enQtNTc1MTkwMTUxNzAyLWZlMjVlZmY0YmJlOGM3YzkxN2M0ZjNiZGUwNjhhMDBmY2Q0MDZjZTg4ZGUyNDFiZGM2MmVlY2YwZmJmYzE3Y2U" target="_blank">
                <span className="fa fa-slack" />
              </a>
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
