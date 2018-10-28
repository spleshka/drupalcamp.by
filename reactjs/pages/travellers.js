import React from 'react';

const Travellers = () => (
  <>
    <section className="section" style={{ padding: "100px 0 30px" }}>
      <div className="container">

        <div className="col-sm-6 align-center img-column">
          <img src="/assets/img/imac-371x412.png" alt=""/>
        </div>

        <div className="col-sm-6 align-left">
          <article style={{ maxWidth: "480px" }}>
            <h3>Where business meets innovation</h3>
            <p>
              <small className="text-alt">
                Start your own IT business and picking the right niche in less then
                &nbsp;<span className="highlight">30 days</span>
              </small>
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </p>
            <a href="#" className="btn btn-outline-clr" style={{ margin: "30px 0 0" }}>
              Medium button
            </a>
          </article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="col-sm-6 align-right">
          <article style={{ maxWidth: "480px" }}>
            <h3>Where business meets innovation</h3>
            <p>
              <small className="text-alt">
                Start your own IT business and picking the right niche in less then
                &nbsp;<span className="highlight">30 days</span>
              </small>
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </p>
            <a href="#" className="link-btn" style={{ margin: "30px 0 0" }}>
              Read full story
            </a>
          </article>
        </div>

        <div className="col-sm-6 align-center img-column">
          <img src="/assets/img/imac-371x412.png" alt=""/>
        </div>
      </div>
    </section>

  </>
);

export default Travellers;
