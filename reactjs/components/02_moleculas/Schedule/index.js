import React from 'react';
import Link from 'next/link';

const Schedule = () => (
  <section className="section align-center overlay" id="schedule">
    <div className="container">

      <span className="icon section-icon icon-office-21" />
      <h3 className="heading-alt schedule-heading" style={{ color: 'white' }}>Schedule</h3>

      <div className="row">
        <div className="col-md-12">

          <div className="row schedule">
            <ul className="nav nav-schedule">

              <li className="active">
                <a>
                  <h5 className="highlight" style={{ color: '#1ac6ff'}}>Pre Party</h5>
                  <p className="text-alt small">May 17, 2019</p>
                </a>
              </li>

              <li className="active">
                <a>
                  <h5 className="highlight" style={{ color: '#1ac6ff'}}>Sessions Day</h5>
                  <p className="text-alt small">May 18, 2019</p>
                </a>
              </li>

              <li className="active">
                <a>
                  <h5 className="highlight" style={{ color: '#1ac6ff'}}>Contribution Day</h5>
                  <p className="text-alt small">May 19, 2019</p>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <Link href="/schedule">
        <a className="btn btn-lg btn-outline-clr">
          See details
        </a>
      </Link>

    </div>
  </section>
);

export default Schedule;
