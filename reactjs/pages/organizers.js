import React from 'react';

const OrganizersPage = () => (
  <>
  <section id="organizers" className="section align-center">
    <div className="container">
      <span className="icon section-icon icon-faces-users-03"/>
      <h3>Meet Organizers</h3>
      <p className="text-alt">
        People who <span className="highlight">make the event happen</span>.
      </p>
      <br/>
      <br/>

      <div className="col-sm-4">
        <div className="speaker">
          <div className="photo-wrapper rounded">
            <img src="/assets/img/organizers/spleshka.png" alt="Evgeniy Maslovskiy" className="img-responsive" style={{ width: '150px', height: '150px' }} />
          </div>
          <h3 className="name">Evgeniy Maslovskiy</h3>
          <p className="text-alt">
            <small>Chief Technology Officer @ SystemSeed</small>
          </p>
          <ul className="speaker-socials">
            <li><a href="https://twitter.com/spleshka" target="_blank"><span className="fa fa-twitter"/></a></li>
            <li><a href="https://www.linkedin.com/in/evgeniy-maslovskiy-a568a879/" target="_blank"><span className="fa fa-linkedin"/></a></li>
            <li><a href="https://www.drupal.org/u/Spleshka" target="_blank"><span className="fa fa-drupal"/></a></li>
          </ul>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="speaker">
          <div className="photo-wrapper rounded">
            <img src="/assets/img/organizers/zeuty.jpeg" alt="Evgeniy Zenko" className="img-responsive" style={{ width: '150px', height: '150px' }} />
          </div>
          <h3 className="name">Evgeniy Zenko</h3>
          <p className="text-alt">
            <small>Technical Lead @ Colours</small>
          </p>
          <ul className="speaker-socials">
            <li><a href="https://twitter.com/zeuty" target="_blank"><span className="fa fa-twitter"/></a></li>
            <li><a href="https://www.linkedin.com/in/yzenko/" target="_blank"><span className="fa fa-linkedin"/></a></li>
            <li><a href="https://www.drupal.org/u/zeuty" target="_blank"><span className="fa fa-drupal"/></a></li>
          </ul>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="speaker">
          <div className="photo-wrapper rounded">
            <img src="/assets/img/organizers/ioskevich.jpg" alt="Vitaly Ioskevich" className="img-responsive" style={{ width: '150px', height: '150px' }} />
          </div>
          <h3 className="name">Vitaly Ioskevich</h3>
          <p className="text-alt">
            <small>Director of Engineering @ DrupalSquad</small>
          </p>
          <ul className="speaker-socials">
            <li><a href="https://twitter.com/ipunker" target="_blank"><span className="fa fa-twitter"/></a></li>
            <li><a href="https://www.linkedin.com/in/ioskevich/" target="_blank"><span className="fa fa-linkedin"/></a></li>
            <li><a href="https://www.drupal.org/u/ioskevich" target="_blank"><span className="fa fa-drupal"/></a></li>
          </ul>
        </div>
      </div>

    </div>
  </section>

    <section id="organizers" className="section align-center" style={{ paddingTop: 0 }}>
      <div className="container">
        <span className="icon section-icon icon-faces-users-04"/>
        <h3>Meet Organizations</h3>
        <p className="text-alt">
          Companies who <span className="highlight">make the event happen</span>.
        </p>
        <br/>
        <br/>

        <div className="col-sm-4">
          <div className="speaker">
            <div className="photo-wrapper" style={{ height: '150px', display: 'flex', width: '300px', border: '2px solid #e9e9e9', padding: '20px' }}>
              <img src="/assets/img/organizers/drupalsquad.png" alt="DrupalSquad / Anakreon" className="img-responsive" style={{ margin: 'auto' }} />
            </div>
            {/*<h3 className="name">DrupalSquad / Anakreon</h3>*/}
            <ul className="speaker-socials">
              <li><a href="https://drupalsquad.com" target="_blank"><span className="fa fa-external-link"/></a></li>
              <li><a href="https://twitter.com/drupalsquad" target="_blank"><span className="fa fa-twitter"/></a></li>
              <li><a href="https://www.linkedin.com/company/drupal-squad/about/" target="_blank"><span className="fa fa-linkedin"/></a></li>
              <li><a href="https://www.drupal.org/node/1738596" target="_blank"><span className="fa fa-drupal"/></a></li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="speaker">
            <div className="photo-wrapper" style={{ height: '150px', display: 'flex', width: '300px', border: '2px solid #e9e9e9', padding: '20px' }}>
              <img src="/assets/img/organizers/colours.jpg" alt="Colours" className="img-responsive" style={{ margin: 'auto' }} />
            </div>
            {/*<h3 className="name">Colours</h3>*/}
            <ul className="speaker-socials">
              <li><a href="https://colours.nl" target="_blank"><span className="fa fa-external-link"/></a></li>
              <li><a href="https://twitter.com/Coloursinternet" target="_blank"><span className="fa fa-twitter"/></a></li>
              <li><a href="https://www.linkedin.com/company/colours_2" target="_blank"><span className="fa fa-linkedin"/></a></li>
              <li><a href="https://www.drupal.org/colours" target="_blank"><span className="fa fa-drupal"/></a></li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="speaker">
            <div className="photo-wrapper" style={{ height: '150px', display: 'flex', width: '300px', border: '2px solid #e9e9e9', padding: '20px' }}>
              <img src="/assets/img/organizers/systemseed.png" alt="SystemSeed" className="img-responsive" style={{ margin: 'auto' }} />
            </div>
            {/*<h3 className="name">SystemSeed</h3>*/}
            <ul className="speaker-socials">
              <li><a href="https://systemseed.com" target="_blank"><span className="fa fa-external-link"/></a></li>
              <li><a href="https://twitter.com/systemseed" target="_blank"><span className="fa fa-twitter"/></a></li>
              <li><a href="https://www.linkedin.com/company/systemseed" target="_blank"><span className="fa fa-linkedin"/></a></li>
              <li><a href="https://www.drupal.org/systemseed" target="_blank"><span className="fa fa-drupal"/></a></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </>
);

export default OrganizersPage;
