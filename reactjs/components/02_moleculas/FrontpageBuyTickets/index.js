import React from 'react';
import Link from 'next/link';

class FrontpageBuyTickets extends React.Component {
  render() {
    return (
      <section id="register" className="section  align-center">
        <div className="container">

          <h2>Get your ticket now!</h2>
          <p>Become a part of the biggest Belarusian Drupal event ever.</p>

          <br/>
          <br/>

          <Link href="/tickets">
            <a className="btn btn-lg">
              Give me my ticket
            </a>
          </Link>

        </div>
      </section>
    );
  }
}

export default FrontpageBuyTickets;
