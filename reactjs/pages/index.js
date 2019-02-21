import React from 'react';
import { withRouter } from 'next/router';
import FrontpageHeroVideo from '../components/02_moleculas/FrontpageHeroVideo';
import MainNavigation from '../components/02_moleculas/MainNavigation';
import FrontpageIntro from '../components/02_moleculas/FrontpageIntro';
import FrontpageFeaturedSpeakers from '../components/02_moleculas/FrontpageFeaturedSpeakers';
import FrontpageCountdown from '../components/02_moleculas/FrontpageCountdown';
import FrontpageBuyTickets from '../components/02_moleculas/FrontpageBuyTickets';
import FrontpageLocation from '../components/02_moleculas/FrontpageLocation';
import Schedule from '../components/02_moleculas/Schedule';
import Newsletter from '../components/02_moleculas/Newsletter';
import { scrollToElement } from '../utils/scrollTo';
import { StickyContainer } from 'react-sticky';

class HomePage extends React.Component {

  static getInitialProps() {
    // Don't show global menu. We'll render it within body.
    return {
      withMenu: false,
    }
  }

  componentDidMount() {
    // Handling contacts menu item click after page is reloaded.
    const { router } = this.props;
    if (router.asPath === '/#contacts') {
      scrollToElement('contacts');
    }
  }

  render() {
    return (
      <>
        <FrontpageHeroVideo />
        <StickyContainer>
          <MainNavigation />
          <FrontpageFeaturedSpeakers />
          <FrontpageCountdown />
          <FrontpageIntro />
          <FrontpageBuyTickets />
          <Schedule />
          <Newsletter/>
          <FrontpageLocation />
        </StickyContainer>
      </>
    );
  }
}

export default withRouter(HomePage);
