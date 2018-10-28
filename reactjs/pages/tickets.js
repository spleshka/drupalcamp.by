import React from 'react';

const Tickets = () => (
  <section className="section align-center">
    <div className="container">
      <h5 className="heading-alt">Event tickets</h5>
      <p className="text-alt" style={{ marginBottom: '80px' }}>Chose the best <span
        className="highlight">pricing</span></p>

      <div className="row">
        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Early Bird</h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li><span className="fa fa-check check-icon" />Free Snacks
                </li>
                <li><span className="fa fa-check check-icon" />Custom Badge
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Certificate
                </li>
              </ul>
              <ul>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Regular Seating
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Free Snacks
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Custom Badge
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Certificate
                </li>
              </ul>
            </div>
            <a href="#" className="buy-btn">
              <div className="centered">
                <div className="price"><span className="currency">$</span>24
                </div>
                <h6 className="heading-alt">Buy now</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Students</h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li><span className="fa fa-check check-icon" />Free Snacks
                </li>
                <li><span className="fa fa-check check-icon" />Custom Badge
                </li>
                <li><span className="fa fa-check check-icon" />Certificate
                </li>
              </ul>
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Free Snacks
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Custom Badge
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Certificate
                </li>
              </ul>
            </div>
            <a href="#" className="buy-btn">
              <div className="centered">
                <div className="price">Free
                </div>
                <h6 className="heading-alt">Get now</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Normal price</h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li><span className="fa fa-check check-icon" />Free Snacks
                </li>
                <li><span className="fa fa-check check-icon" />Custom Badge
                </li>
                <li><span className="fa fa-check check-icon" />Certificate
                </li>
              </ul>
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Free Snacks
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Custom Badge
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Certificate
                </li>
              </ul>
            </div>
            <a href="#" className="buy-btn">
              <div className="centered">
                <div className="price"><span className="currency">$</span>49
                </div>
                <h6 className="heading-alt">Buy now</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="package-panel">
            <h6 className="package-title">Individual sponsor</h6>
            <div className="package-detail">
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li><span className="fa fa-check check-icon" />Free Snacks
                </li>
                <li><span className="fa fa-check check-icon" />Custom Badge
                </li>
                <li><span className="fa fa-check check-icon" />Certificate
                </li>
              </ul>
              <ul>
                <li><span className="fa fa-check check-icon" />Regular
                  Seating
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Free Snacks
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Custom Badge
                </li>
                <li className="disabled"><span
                  className="fa fa-times absent-icon" />Certificate
                </li>
              </ul>
            </div>
            <a href="#" className="buy-btn">
              <div className="centered">
                <div className="price"><span className="currency">$</span>100
                </div>
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
