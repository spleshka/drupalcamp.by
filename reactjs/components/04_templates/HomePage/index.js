import React from 'react';
import YouTube from 'react-youtube';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showVideo: false,
    };

    this.onVideoStateChange = this.onVideoStateChange.bind(this);
  }

  onVideoStateChange(event) {
    // Data == 1 means that video has started playing.
    if (event.data === 1) {
      this.setState({ showVideo: true });
    }
    // Data == 0 means that video has stopped.
    else if (event.data === 0) {
      event.target.playVideo();
    }
  }

  render() {
    return (
      <section id="hero" className="hero-section window-height light-text">

        <div className="video-background">
          <div className={`video-foreground ${!this.state.showVideo ? 'hidden' : ''}`}>
            <YouTube
              videoId="MsumvrHKiQE"
              opts={{
                playerVars: {
                  autoplay: 1,
                  loop: 1,
                  mute: 1,
                }
              }}
              onStateChange={this.onVideoStateChange}
            />
          </div>
        </div>

        {/*<ul className="socials-nav">
      <li className="socials-nav-item">
        <a href="https://twitter.com/drupalcampby" target="_blank">
          <span className="fa fa-twitter" />
        </a>
      </li>
    </ul>*/}

        <div className="heading-block centered-block align-center">
          <div className="container">
            <div id="logo">
              <img src="/static/logo.png" />
            </div>
            <h5 className="heading-alt">
              <span className="fa fa-calendar-o base-clr-txt" />18 May, 2019
              <span className="fa fa-map-marker base-clr-txt" />
              <a href="https://goo.gl/maps/7jQGA4hJjR32" target="_blank">Hotel Victoria, Minsk, Belarus</a>
            </h5>
            <h1 className="extra-heading">Drupal Camp</h1>
            {/*<div className="btns-container">
              <a href="#" className="btn btn-md" data-modal-link="email-ticket">
                Get Tickets
              </a>
            </div>*/}
          </div>
        </div>

      </section>
    );
  }
}

export default HomePage;
