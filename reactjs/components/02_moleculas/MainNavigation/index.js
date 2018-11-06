import React from 'react';
import { withRouter } from 'next/router';
import { Link, Router } from '../../../routes';
import { scrollToElement } from '../../../utils/scrollTo';

class MainNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobileMenuOpened: false
    };

    this.mobileVisibilityToggle = this.mobileVisibilityToggle.bind(this);
  }

  mobileVisibilityToggle() {
    this.setState(state => ({
      isMobileMenuOpened: !state.isMobileMenuOpened
    }));
  }

  render() {
    const { router } = this.props;
    return (
      <header className="header header-black" id="navigation">
        <div className="header-wrapper">
          <div className="container">
            <div className="col-xs-12 visible-xs navigation-header">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform"
                className="buy-btn"
                target="_blank"
              >
                Submit Session
              </a>
              <button className="navbar-toggle collapsed" onClick={this.mobileVisibilityToggle}>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div className="col-xs-12 navigation-container">
              <div id="navigation7" className={`navbar-collapse collapse ${this.state.isMobileMenuOpened ? 'in' : ''}`}>
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
                        <a
                          className="navigation-link"
                          target="_blank"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform"
                        >
                          Become a sponsor
                        </a>
                      </li>
                      <li className="navigation-item">
                        <a
                          className="navigation-link"
                          target="_blank"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform"
                        >
                          Download brochure
                        </a>
                      </li>
                      {/*<li className="navigation-item">
                        <Link to="/sponsors">
                          <a className="navigation-link">Our sponsors</a>
                        </Link>
                      </li>*/}
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
                  className="hidden-xs pull-right btn btn-outline-clr btn-sm btn-session"
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
