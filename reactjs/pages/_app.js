import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import HtmlHead from '../components/01_atoms/HtmlHead';
import configureStore from '../store/store';
import ErrorMessage from '../components/01_atoms/ErrorMessage';
import SiteLayout from '../components/04_templates/GlobalLayout';
import '../components/01_atoms/PageProgressBar'; // Beautiful page transition indicator.

class Application extends App {
  static async getInitialProps({ Component, res, ctx }) {
    const initialProps = {
      isServer: !!ctx.req,
      withMenu: true,
    };

    // Call to getInitialProps() from the Page component.
    if (Component.getInitialProps) {
      const childInitialProps = await Component.getInitialProps({
        ...initialProps,
        ...ctx,
      });

      // In case of Server Side rendering we want the server to throw the
      // correct error code.
      if (res && initialProps.statusCode) {
        res.statusCode = initialProps.statusCode;
      }

      return {
        ...initialProps,
        ...childInitialProps,
      };
    }

    return initialProps;
  }

  render() {
    const { Component, store, ...pageProps } = this.props;
    const statusCode = pageProps.statusCode || 200;
    return (
      <Container>
        <Provider store={store}>
          <Fragment>
            <HtmlHead />
            <SiteLayout withMenu={pageProps.withMenu}>
              {statusCode === 200
              && <Component {...pageProps} />
              }
              {statusCode !== 200
              && <ErrorMessage statusCode={statusCode} />
              }
            </SiteLayout>
          </Fragment>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(Application));
