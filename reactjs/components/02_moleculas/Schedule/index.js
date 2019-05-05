import React from 'react';
import Link from 'next/link';

const Schedule = () => (
  <section className="section align-center overlay">
    <div className="container">

      <span className="icon section-icon icon-office-21" />
      <h3 className="heading-alt schedule-heading" style={{ color: 'white', marginBottom: '50px' }}>Schedule</h3>

      <div className="row">
        <div className="col-md-12">

          <div className="row">
            <ul className="programm">

              <li className="active">
                <div style={{ margin: '30px 0'}}>
                  <h5 className="highlight" style={{ color: '#1ac6ff'}}>Pre Party</h5>
                  <p className="text-alt small">May 17, 2019</p>
                </div>

                {/*<a className="btn btn-lg btn-outline-clr" style={{ margin: '0 50px' }} href="https://www.meetup.com/drupal-minsk/events/261043038/" target="_blank">
                  View details
                </a>*/}
              </li>

              <li className="active">
                <div style={{ margin: '30px 0'}}>
                  <h5 className="highlight" style={{ color: '#1ac6ff'}}>Conference Day</h5>
                  <p className="text-alt small">May 18, 2019</p>
                </div>

                <Link href="/schedule">
                  <a className="btn btn-lg btn-outline-clr" style={{ margin: '0 50px 30px' }}>
                    View details
                  </a>
                </Link>
              </li>

              <li className="active">
                <div style={{ margin: '30px 0'}}>
                  <h5 className="highlight" style={{ color: '#1ac6ff'}}>Contribution Day</h5>
                  <p className="text-alt small">May 19, 2019</p>
                </div>

                <Link href="/contribution-day">
                  <a className="btn btn-lg btn-outline-clr" style={{ margin: '0 50px' }}>
                    View details
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>



    </div>
  </section>
);

export default Schedule;
