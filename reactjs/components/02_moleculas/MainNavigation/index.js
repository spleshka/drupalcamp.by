import React from 'react';
import { withRouter } from 'next/router';
import { Link, Router } from '../../../routes';
import { scrollToElement } from '../../../utils/scrollTo';
import * as breakpoints  from '../../../utils/breakpoint';
import { Sticky } from 'react-sticky';

class MainNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobileMenuOpened: false,
      isMobile: false,
    };

    this.mobileVisibilityToggle = this.mobileVisibilityToggle.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onContactLinkClick = this.onContactLinkClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onContactLinkClick() {
    const { router } = this.props;
    if (router.route === '/') {
      scrollToElement('contacts');
      this.setState({ isMobileMenuOpened: false });
    }
    else {
      Router.pushRoute('/#contacts');
    }
  }

  mobileVisibilityToggle() {
    this.setState(state => ({
      isMobileMenuOpened: !state.isMobileMenuOpened
    }));
  }

  /**
   * Reacts on window resize event and changes display
   * of the block items from slider (on mobile) to
   * simple grid (on tablet / desktop) and the other
   * way around.
   */
  onWindowResize() {
    const { isMobile } = this.state;

    if (breakpoints.isUp('md') && isMobile) {
      this.setState({ isMobile: false });
    }

    if (breakpoints.isDown('md') && !isMobile) {
      this.setState({ isMobile: true });
    }
  }

  render() {
    const { router } = this.props;
    const { isMobile } = this.state;

    const header = (
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
                <li className="navigation-item">
                  <Link to="/tickets">
                    <a className={`navigation-link ${router.route === '/tickets' ? 'active' : ''}`}>Tickets</a>
                  </Link>
                </li>
                <li className="navigation-item dropdown">
                  <a className={`navigation-link dropdown-toggle ${router.route === '/sponsors' || router.route === '/become-sponsor' ? 'active' : ''}`}>Sponsors</a>
                  <ul className="dropdown-menu">
                    <li className="navigation-item">
                      <a
                        className="navigation-link"
                        target="_blank"
                        href="https://docs.google.com/forms/d/1rjG1ig5nCnM08NM7P1XnIxl-MlcugIQQQltRAcSb21E/viewform"
                      >
                        Become a sponsor
                      </a>
                    </li>
                    <li className="navigation-item">
                      <a
                        className="navigation-link"
                        target="_blank"
                        href="/static/SponsorshipDrupalCampBelarus2019.pdf"
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
                  <Link to="/organizers">
                    <a className={`navigation-link ${router.route === '/organizers' ? 'active' : ''}`}>Organizers</a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <a
                    className="navigation-link"
                    onClick={this.onContactLinkClick}
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
    );

    return (
      <>
        {isMobile &&
        <header className="header header-black" id="navigation" >
          {header}
        </header>
        }

        {!isMobile &&
        <Sticky>{({style}) =>
          <header className="header header-black" id="navigation" style={style}>
            {header}
          </header>
        }</Sticky>
        }
      </>
    );
  }
}

export default withRouter(MainNavigation);
