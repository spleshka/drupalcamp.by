import React from 'react';
import Head from 'next/head';
import Package from '../../../package';
import inlineCSS from '../../../styles/theme.scss';

const HtmlHead = () => {
  let stylesheets;

  if (process.env.NODE_ENV === 'production') {
    // In production, serve pre-built CSS file from /assets/{version}/main.css
    const pathToCSS = `/assets/${Package.version}/main.css`;
    stylesheets = <link rel="stylesheet" type="text/css" href={pathToCSS} />;
  } else {
    // eslint-disable-next-line react/no-danger
    stylesheets = <style dangerouslySetInnerHTML={{ __html: inlineCSS }} />;
  }

  return (
    <Head>
      <title>Drupal Camp Belarus, 2019</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Drupal Camp Belarus is an international event full of sessions and contribution activities, bringing together people who use, develop, design and support Drupal world, as well as those exploring joining the Drupal community and guests from other communities." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:title" content="Drupal Camp Belarus, 2019" />
      <meta property="og:description" content="Drupal Camp Belarus is an international event full of sessions and contribution activities, bringing together people who use, develop, design and support Drupal world, as well as those exploring joining the Drupal community and guests from other communities." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://drupalcamp.by" />
      <meta property="og:image" content="http://drupalcamp.by/static/logo.png" />
      <meta name="twitter:card" content="http://drupalcamp.by/static/logo.png" />
      <link rel="shortcut icon" href="/static/favicon.ico" type="image/vnd.microsoft.icon" />
      <link rel="stylesheet" type="text/css" href="/assets/css/style-blue-color.css" />
      {stylesheets}
    </Head>
  );
};

export default HtmlHead;
