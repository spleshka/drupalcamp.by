import React from 'react';

const FrontpageIntro = () => (
  <section className="fullwidth-section" style={{ margin: 0, position: 'relative', zIndex: '100', background: 'white' }}>

    <div className="fullwidth-path">
      <div
        className="fullwidth-section-bg bg-right"
        style={{ backgroundImage: "url(/assets/img/venue.jpg)" }}
      />
      <div className="col-sm-6 fullwidth-column">
        <article>
          <h4 style={{ marginBottom: '20px' }}>By the People for the People</h4>

          <p>
            <strong>Drupal Camp Belarus</strong> is an international 2 days event full of sessions and contribution activities,
            bringing together people who use, develop, design and support Drupal world, as well as those exploring
            joining the Drupal community and guests from other communities.
          </p>

          <div className="row btns-block" style={{ margin: 0, paddingBottom: 0 }}>
            <a style={{ margin: 0 }} href="https://docs.google.com/forms/d/1rjG1ig5nCnM08NM7P1XnIxl-MlcugIQQQltRAcSb21E/viewform" target="_blank" className="btn btn-sm">Become Sponsor</a>
          </div>

        </article>
      </div>
    </div>

    <div className="fullwidth-path">
      <div
        className="fullwidth-section-bg bg-left"
        style={{ backgroundImage: "url(/assets/img/people.jpg)" }}
      />
      <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
        <article>
          <h4 style={{ marginBottom: '20px' }}>Meet the community</h4>

          <p>
            Comfortable venue, <strong>4 tracks</strong> of sessions, <strong>BOFs</strong>,
            mentored <strong>Contribution Day</strong>, tasty <strong>lunch</strong>, coffee/tea/snacks during the day – everything
            to enjoy the talks from experienced speakers and other brightest minds within the Drupal community and beyond.
          </p>

          <p>
            We expect <strong>25+ hand picked sessions</strong> to be presented to <strong>300+ guests</strong> from all over the globe.
          </p>

          <div className="row btns-block" style={{ margin: 0, paddingBottom: 0 }}>
            <a style={{ margin: 0 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdAhC5VUP6d5qTLcJjNJ0KH2UjVT7d5SW5u1_zkd-DWt0cvbw/viewform" target="_blank" className="btn btn-sm">Submit Session</a>
          </div>

        </article>
      </div>
    </div>

    <div className="fullwidth-path">
      <div
        className="fullwidth-section-bg bg-right"
        style={{ backgroundImage: "url(/assets/img/party.jpg)" }}
      />
      <div className="col-sm-6 fullwidth-column">
        <article>
          <h4 style={{ marginBottom: '20px' }}>Did someone say Party?</h4>

          <p>
            As true Drupal community members, we can't live without parties. The night before the event (Friday) we've got planned a marvellous party where everyone
            is welcome to warm-up before the day of learning, enjoy <strong>Belarusian cuisine</strong> and wide variety of new <strong>authentic drinks</strong>.
          </p>

          <p>
            Do you want even more parties & fun? Everyone who helps to make this event happen is invited to a special <strong>THANK YOU PARTY</strong> with national spirit and character!
          </p>

          <div className="row btns-block" style={{ margin: 0, paddingBottom: 0 }}>
            <a style={{ margin: 0 }} href="https://docs.google.com/forms/d/1Phr9Aurs-GSTfwN7U68uT10nYU2ubCHMPxdjhVJ0fqY" target="_blank" className="btn btn-sm">Join as Volunteer</a>
          </div>

        </article>
      </div>
    </div>


  </section>
);

export default FrontpageIntro;
