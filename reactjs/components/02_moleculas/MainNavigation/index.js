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
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onMenuItemClick() {
    this.setState({ isMobileMenuOpened: false });
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
                  <Link to="/" prefetch>
                    <a className={`navigation-link ${router.route === '/' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>Home</span>
                    </a>
                  </Link>
                </li>

                <li className="navigation-item">
                  <Link to="/speakers" prefetch>
                    <a className={`navigation-link ${router.route === '/speakers' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>Speakers</span>
                    </a>
                  </Link>
                </li>

                {/*<li className="navigation-item">
                  <Link to="/tickets" prefetch>
                    <a className={`navigation-link ${router.route === '/tickets' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>Tickets</span>
                    </a>
                  </Link>
                </li>*/}

                <li className="navigation-item">
                  <Link to="/schedule" prefetch>
                    <a className={`navigation-link ${router.route === '/schedule' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>Schedule</span>
                    </a>
                  </Link>
                </li>

                <li className="navigation-item">
                  <Link to="/contribution-day" prefetch>
                    <a className={`navigation-link ${router.route === '/contribution-day' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>Contribution Day</span>
                    </a>
                  </Link>
                </li>

                <li className="navigation-item dropdown">
                  <Link to="/sponsors">
                    <a className={`navigation-link dropdown-toggle ${router.route === '/sponsors' || router.route === '/become-sponsor' ? 'active' : ''}`}>Sponsors</a>
                  </Link>
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

                  </ul>
                </li>

                <li className="navigation-item">
                  <Link to="/travellers" prefetch>
                    <a className={`navigation-link ${router.route === '/travellers' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>For Travellers</span>
                    </a>
                  </Link>
                </li>

                <li className="navigation-item">
                  <Link to="/team" prefetch>
                    <a className={`navigation-link ${router.route === '/team' ? 'active' : ''}`}>
                      <span onClick={this.onMenuItemClick}>Team</span>
                    </a>
                  </Link>
                </li>
              </ul>

              <Link to="/tickets" prefetch>
                <a className="hidden-xs pull-right btn btn-outline-clr btn-sm btn-session">
                  Get Ticket
                </a>
              </Link>

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
