import React from 'react';

class FrontpageBuyTickets extends React.Component {
  render() {
    return (
      <section id="register" className="section overlay overlay-clr bg-cover bg4 light-text align-center">
        <div className="container">
          <h2>Submit a session now!</h2>
          <p>Become a part of the biggest Belarusian Drupal event ever!<br/>
            Share your experience with hundreds of soulmates while they are still sober.</p>
          <br/>
          <br/>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform"
            target="_blank"
            className="btn btn-lg btn-outline"
          >
            Submit now
          </a>
        </div>
      </section>
    );
  }
}

export default FrontpageBuyTickets;
