import React from 'react';

const Tickets = () => (
  <section className="section align-center">
    <div className="container">
      <h5 className="heading-alt">Event tickets</h5>

      <p>Students can get <span className="highlight">free scholarship</span> to attend the event.<br/>
        Write us an email at <span className="highlight">info@drupalcamp.by</span> with the query to obtain a free ticket.</p>

      <div className="row">

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Early Bird <small>(until April, 2019)</small></h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Sessions, BOFs</li>
                <li><span className="fa fa-check check-icon" />Welcome bag</li>
                <li><span className="fa fa-check check-icon" />Free lunch</li>
                <li><span className="fa fa-check check-icon" />Free coffee & snacks</li>
                <li className="disabled"><span className="fa fa-times absent-icon" />Individual Sponsor Promotion</li>
                <li className="disabled"><span className="fa fa-times absent-icon" />Invite to special after-party event</li>
              </ul>
            </div>
            <a href="https://bezkassira.by/buy/5234/" target="_blank" className="buy-btn">
              <div className="centered">
                <div className="price"><span className="currency">$</span>25</div>
                <div><small>50 BYN</small></div>
                <h6 className="heading-alt">Buy now</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Normal Price <small>(in April, 2019)</small></h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Sessions, BOFs</li>
                <li><span className="fa fa-check check-icon" />Welcome bag</li>
                <li><span className="fa fa-check check-icon" />Free lunch</li>
                <li><span className="fa fa-check check-icon" />Free coffee & snacks</li>
                <li className="disabled"><span className="fa fa-times absent-icon" />Individual Sponsor Promotion</li>
                <li className="disabled"><span className="fa fa-times absent-icon" />Invite to special after-party event</li>
              </ul>
            </div>
            <a target="_blank" className="buy-btn" style={{ opacity: 0.4 }}>
              <div className="centered">
                <div className="price"><span className="currency">$</span>35</div>
                <div><small>70 BYN</small></div>
                <h6 className="heading-alt">Not available</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Late Bird <small>(from May, 2019)</small></h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Sessions, BOFs</li>
                <li><span className="fa fa-check check-icon" />Welcome bag</li>
                <li><span className="fa fa-check check-icon" />Free lunch</li>
                <li><span className="fa fa-check check-icon" />Free coffee & snacks</li>
                <li className="disabled"><span className="fa fa-times absent-icon" />Individual Sponsor Promotion</li>
                <li className="disabled"><span className="fa fa-times absent-icon" />Invite to special after-party event</li>
              </ul>
            </div>
            <a target="_blank" className="buy-btn" style={{ opacity: 0.4 }}>
              <div className="centered">
                <div className="price"><span className="currency">$</span>50</div>
                <div><small>100 BYN</small></div>
                <h6 className="heading-alt">Not available</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Individual Sponsor</h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Sessions, BOFs</li>
                <li><span className="fa fa-check check-icon" />Welcome bag</li>
                <li><span className="fa fa-check check-icon" />Free lunch</li>
                <li><span className="fa fa-check check-icon" />Free coffee & snacks</li>
                <li><span className="fa fa-check check-icon" />Individual Sponsor Promotion</li>
                <li><span className="fa fa-check check-icon" />Invite to special after-party event</li>
              </ul>
            </div>
            <a href="https://bezkassira.by/buy/5234/" target="_blank" className="buy-btn">
              <div className="centered">
                <div className="price"><span className="currency">$</span>100</div>
                <div><small>200 BYN</small></div>
                <h6 className="heading-alt">Buy now</h6>
              </div>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
);

export default Tickets;
