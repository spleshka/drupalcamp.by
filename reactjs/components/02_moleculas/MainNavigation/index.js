import React from 'react';
import { withRouter } from 'next/router';
import { Link, Router } from '../../../routes';
import { scrollToElement } from '../../../utils/scrollTo';

class MainNavigation extends React.Component {

  render() {
    const { router } = this.props;
    return (
      <header className="header header-black" id="navigation">
        <div className="header-wrapper">
          <div className="container">
            <div className="col-xs-12 visible-xs navigation-header">
              <a href="#" className="buy-btn">Buy Tickets</a>
              <button className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#navigation7" aria-expanded="false"
                      aria-controls="navigation3">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div className="col-xs-12 navigation-container">
              <div id="navigation7" className="navbar-collapse collapse">
                <ul className="navigation-list pull-left light-text">
                  <li className="navigation-item">
                    <Link to="/">
                      <a className={`navigation-link ${router.route === '/' ? 'active' : ''}`}>Home</a>
                    </Link>
                  </li>
                  {/*<li className="navigation-item">
                    <Link to="/schedule">
                      <a className={`navigation-link ${router.route === '/schedule' ? 'active' : ''}`}>Schedule</a>
                    </Link>
                  </li>*/}
                  {/*<li className="navigation-item">
                    <Link to="/tickets">
                      <a className={`navigation-link ${router.route === '/tickets' ? 'active' : ''}`}>Tickets</a>
                    </Link>
                  </li>*/}
                  <li className="navigation-item dropdown">
                    <a className={`navigation-link dropdown-toggle ${router.route === '/sponsors' || router.route === '/become-sponsor' ? 'active' : ''}`}>Sponsors</a>
                    <ul className="dropdown-menu">
                      <li className="navigation-item">
                        <Link to="/become-sponsor">
                          <a className="navigation-link">Become a sponsor</a>
                        </Link>
                      </li>
                      <li className="navigation-item">
                        <Link to="/sponsors">
                          <a className="navigation-link">Our sponsors</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/*<li className="navigation-item">
                    <Link to="/speakers">
                      <a className={`navigation-link ${router.route === '/speakers' ? 'active' : ''}`}>Speakers</a>
                    </Link>
                  </li>*/}
                 {/* <li className="navigation-item">
                    <Link to="/travellers">
                      <a className={`navigation-link ${router.route === '/travellers' ? 'active' : ''}`}>Travellers</a>
                    </Link>
                  </li>*/}
                  <li className="navigation-item">
                    <a
                      className="navigation-link"
                      onClick={() => router.route === '/' ? scrollToElement('contacts') : Router.pushRoute('/#contacts')}
                    >
                      Contacts
                    </a>
                  </li>
                </ul>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform"
                  className="hidden-xs pull-right buy-btn"
                  target="_blank"
                >
                  Submit Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(MainNavigation);
