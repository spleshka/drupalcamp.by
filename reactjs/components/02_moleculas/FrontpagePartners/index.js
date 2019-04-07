import React from 'react';
import Link from 'next/link';

class FrontpagePartners extends React.Component {
  render() {
    return (
      <section className="section align-center">
        <div className="container">
          <span className="icon section-icon icon-chat-messages-11" />
          <h2>Info Partners</h2>
          <br/>
          <br/>

          <div className="sponsors">

            <div className="sponsor">
              <a href="https://www.kv.by" target="_blank">
                <img src="/assets/img/partners/kv.svg" alt="KV.by" style={{ maxHeight: '70px' }} />
              </a>
            </div>

            <div className="sponsor">
              <a href="https://dev.by" target="_blank">
                <img src="/assets/img/partners/devby.svg" alt="Dev.by" />
              </a>
            </div>

            <div className="sponsor">
              <a href="http://la.by" target="_blank">
                <img src="/assets/img/partners/la.png" alt="LA.by" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FrontpagePartners;
