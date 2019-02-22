import React from 'react';
import Speaker from '../components/01_atoms/Speaker';

const team = [
  {
    name: 'Evgeniy Maslovskiy',
    nickname: 'spleshka',
    position: 'Chief Technology Officer @ SystemSeed',
    countries: ['Belarus'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/spleshka',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/evgeniy-maslovskiy-a568a879/',
      },
    ]
  },
  {
    name: 'Yauhen Zenko',
    nickname: 'zeuty',
    position: 'Technical Lead @ Colours',
    countries: ['Netherlands'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/zeuty',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/yzenko/',
      },
    ]
  },
  {
    name: 'Vitaly Ioskevich',
    nickname: 'ioskevich',
    position: 'Director of Engineering @ DrupalSquad',
    countries: ['Belarus'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/ipunker',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/ioskevich/',
      },
    ]
  },
];

const volunteers = [
  {
    name: 'Darya Shapovalova',
    nickname: 'darya.shapovalova',
    position: 'Automation Test Engineer @ DrupalSquad',
  },
  {
    name: 'Nikolai Tatianenko',
    nickname: 'nikolai.tatianenko',
    position: 'Lead Software Engineer @ EPAM Systems',
  },
  {
    name: 'Andrej Podlubnyj',
    nickname: 'andrej.podlubnyj',
    position: 'IT Consultant',
  },
  {
    name: 'Alex Domasevich',
    nickname: 'alex.domasevich',
    position: 'Team Lead @ Drupal Teams',
  },
  {
    name: 'Igor Cheledinov',
    nickname: 'igor.cheledinov',
    position: 'Solutions Architect @ DrupalSquad',
  },
  {
    name: 'Alexander Sukhodolsky',
    nickname: 'alexander.sukhodolsky',
    position: 'Software Engineer @ DrupalSquad',
  },
  {
    name: 'Andrei Tabolin',
    nickname: 'andrei.tabolin',
    position: 'Senior Software Engineer @ EPAM Systems',
  },
];

const OrganizersPage = () => (
  <>
    <section id="organizers" className="section align-center mobile-padding">
      <div className="container">
        <span className="icon section-icon icon-faces-users-03" />
        <h3>Meet Organizers</h3>
{/*        <p className="text-alt">
          People who <span className="highlight">make the event happen</span>.
        </p>*/}

        <br/>
        <br/>

        <div className="row">
        {team.map(organizer => (
          <div className="col-12 col-sm-4" key={organizer.name}>
            <Speaker {...organizer} />
          </div>
        ))}
        </div>

      </div>
    </section>

    <section id="organizers" className="section align-center">
      <div className="container">
        <span className="icon section-icon icon-faces-users-03" />
        <h3>Meet Volunteers</h3>
        <p className="text-alt">
          People who <span className="highlight">make the event happen</span>.
        </p>

        <br/>
        <br/>

        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {volunteers.map(volunteer => (
          <div className="col-12 col-sm-4 col-md-3" key={volunteer.name}>
            <Speaker {...volunteer} />
          </div>
        ))}
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
