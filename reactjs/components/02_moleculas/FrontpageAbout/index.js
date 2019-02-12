import React from 'react';

class FrontpageAbout extends React.Component {

  render() {
    return (
      <section id="about" className="section align-center">
        <div className="container">
          <span className="icon section-icon icon-multimedia-12" />
          <h3>Drupal Camp Belarus 2019</h3>
          <p className="text-alt">
            International <span className="highlight">Drupal</span>, <span className="highlight">Beer</span> & <span className="highlight">Potato</span> lovers united.
          </p>
          <br/>
          <br/>

          <div className="tabs-wrapper tabs-horizontal">

            <div className="tab-content">
              <div id="horizontal_tab1" className="tab-pane fade active in">
                <div className="col-sm-5 img-column">
                  <img src="/assets/img/event.jpg" alt="" className="img-responsive" />
                </div>
                <div className="col-sm-7 align-left">
                  <p/>
                  <p>
                    <strong>Drupal Camp Belarus</strong> is an international one-day event full of sessions and contribution activities,
                    bringing together people who use, develop, design and support Drupal world, as well as those exploring
                    joining the Drupal community and guests from other communities.
                  </p>
                  <p>
                    Well-located comfortable venue, <strong>4 tracks</strong> of sessions and <strong>BOFs</strong>, tasty lunch, all-day coffee/tea/water – everything
                    to enjoy the talks from top-level speakers, some of the most influential people and brightest minds within the Drupal community and beyond.
                  </p>
                  <p>
                    We expect <strong>28 high quality sessions</strong> to be presented to <strong>300+ guests</strong> from all over the globe.
                  </p>
                  <p>
                    As true Drupal community members, we can't live without parties. The evening before the event we've planned a marvellous <strong>event</strong> where everyone
                    is welcome to warm-up before the day of learning, enjoy <strong>Belarusian cuisine</strong> and wide variety of new <strong>authentic drinks</strong>.
                    As well as that, we've got <strong>great news for speakers and volunteers</strong>: they are invited to enjoy the post event party in the countryside with national spirit and character!
                  </p>
                  <div className="row btns-block">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform" target="_blank" className="btn">Submit Session</a>
                    <a href="https://docs.google.com/forms/d/1Phr9Aurs-GSTfwN7U68uT10nYU2ubCHMPxdjhVJ0fqY" target="_blank" className="btn">Join as Volunteer</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default FrontpageAbout;
