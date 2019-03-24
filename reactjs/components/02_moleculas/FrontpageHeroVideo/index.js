import React from 'react';
import YouTube from 'react-youtube';
import { scrollToElement } from '../../../utils/scrollTo';

class FrontpageHeroVideo extends React.Component {

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

      // In 120 seconds of playing the video jump back to the beginning.
      setTimeout(() => {
        event.target.seekTo(5);
      }, 120000)
    }
    // Data == 0 means that video has stopped.
    else if (event.data === 0) {
      event.target.playVideo();
    }
  }

  render = () => (
    <section id="hero" className="hero-section window-height light-text">

      <div className="video-background">
        <div className={`video-foreground ${!this.state.showVideo ? 'hidden' : ''}`}>
          <YouTube
            videoId="yMiGjuCY0xE"
            opts={{
              playerVars: {
                autoplay: 1,
                mute: 1,
                start: 5,
              },
            }}
            onStateChange={this.onVideoStateChange}
          />
        </div>
      </div>

      <div className="heading-block centered-block align-center">
        <div className="container">
          <div id="logo">
            <img src="/static/logo.png" />
          </div>
          <h5 className="heading-alt">

            <span className="event-item">
             <span className="fa fa-calendar-o base-clr-txt" />18-19 May, 2019
            </span>

            <span className="event-item">
              <span className="fa fa-map-marker base-clr-txt" />
              <a href="https://yandex.com/maps/-/CBBd62HOKB" target="_blank">Hotel Renaissance, Minsk, Belarus</a>
            </span>

          </h5>
          <h1 className="extra-heading">Drupal Camp</h1>

        </div>
      </div>

      <div className="down-arrow" onClick={() => scrollToElement('navigation')}>
        <i className="arrow" />
      </div>

    </section>
  )
}

export default FrontpageHeroVideo;