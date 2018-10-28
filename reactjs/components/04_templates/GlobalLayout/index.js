import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from '../../03_organisms/GlobalHeader';
import GlobalFooter from '../../03_organisms/GlobalFooter';

const GlobalLayout = ({ children, withMenu }) => (
  <Fragment>
    {withMenu &&
    <GlobalHeader />
    }
    <div className="content">
      {children}
    </div>
    <GlobalFooter />
  </Fragment>
);

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  withMenu: PropTypes.bool.isRequired,
};

export default GlobalLayout;
