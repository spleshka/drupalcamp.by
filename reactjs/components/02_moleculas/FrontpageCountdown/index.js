import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

/**
 *
 */

const data = [
  {
    count: 20,
    label: 'speakers',
  },
  {
    count: 30,
    label: 'days',
  },
  {
    count: 40,
    label: 'workshops',
  },
  {
    count: 50,
    label: 'speeches',
  },
];

class FrontpageCountdown extends React.Component {

  render() {
    return (
      <section id="counters" className="section align-center overlay bg-cover bg5 light-text">
        <div className="container">
          <div className="row counters-wrapper">
            {data.map(item => (
              <div key={item.label} className="col-sm-3">
                <div className="counter-block counter-block-no-border">
                  <div className="counter-box">
                    <div className="counter-content">
                      <span className="count">
                        <TrackVisibility once>
                         {({ isVisible }) => (isVisible
                           ? (
                             <CountUp
                               end={item.count}
                               duration={2}
                             />
                           ) : 0)
                         }
                         </TrackVisibility>
                      </span>
                      <p className="title">{item.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default FrontpageCountdown;
