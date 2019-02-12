import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StickyContainer } from 'react-sticky';
import GlobalHeader from '../../03_organisms/GlobalHeader';
import GlobalFooter from '../../03_organisms/GlobalFooter';

const GlobalLayout = ({ children, withMenu }) => (
  <Fragment>

    {withMenu &&
    <StickyContainer lassName="content">
      <GlobalHeader/>
      {children}
    </StickyContainer>
    }

    {!withMenu &&
    <div className="content">
      {children}
    </div>
    }

    <GlobalFooter />
  </Fragment>
);

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  withMenu: PropTypes.bool.isRequired,
};

export default GlobalLayout;
