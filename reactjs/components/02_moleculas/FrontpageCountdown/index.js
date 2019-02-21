import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

/**
 *
 */

const data = [
  {
    count: 2,
    label: 'days',
  },
  {
    count: 25,
    suffix: '+',
    label: 'speakers',
  },
  {
    count: 300,
    suffix: '+',
    label: 'visitors',
  },
  {
    count: 4,
    label: 'tracks',
  },
];

class FrontpageCountdown extends React.Component {

  render() {
    return (
      <section id="counters" className="section overlay align-center light-text">
        <div className="container">
          <div className="row counters-wrapper">
            {data.map(item => (
              <div key={item.label} className="col-sm-3">
                <div className="counter-block counter-block-no-border">
                  <div className="counter-box">
                    <div className="counter-content">
                      <span className="count">
                        {Number.isFinite(item.count) &&
                        <TrackVisibility once>
                          {({isVisible}) => (isVisible
                            ? (
                              <>
                                <CountUp
                                  end={item.count}
                                  duration={2}
                                />
                                {item.suffix && item.suffix}
                              </>
                            ) : 0)
                          }
                        </TrackVisibility>
                        }
                        {!Number.isFinite(item.count) && item.count}
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
