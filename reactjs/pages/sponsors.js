import React from 'react';
import Speaker from '../components/01_atoms/Speaker';

const platinumSponsors = [
  {
    name: 'DrupalSquad',
    imageURL: '/assets/img/organizers/drupalsquad.png',
    socials: [
      {
        type: 'external-link',
        url: 'https://drupalsquad.com'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/drupalsquad'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/company/drupal-squad/about'
      },
      {
        type: 'drupal',
        url: 'https://www.drupal.org/node/1738596'
      },
    ]
  },
];

const goldSponsors = [
/*  {
    name: 'Colours',
    imageURL: '/assets/img/organizers/colours.jpg',
    socials: [
      {
        type: 'external-link',
        url: 'https://colours.nl'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Coloursinternet'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/company/colours_2'
      },
      {
        type: 'drupal',
        url: 'https://www.drupal.org/colours'
      },
    ]
  },*/
];

const silverSponsors = [
  {
    name: 'SystemSeed',
    imageURL: '/assets/img/organizers/systemseed.png',
    socials: [
      {
        type: 'external-link',
        url: 'https://systemseed.com'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/systemseed'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/company/systemseed'
      },
      {
        type: 'drupal',
        url: 'https://www.drupal.org/systemseed'
      },
    ]
  },
  {
    name: 'EPAM',
    imageURL: '/assets/img/sponsors/epam.png',
    socials: [
      {
        type: 'external-link',
        url: 'https://www.epam.com'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/epamsystems'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/company/epam-systems'
      },
      {
        type: 'drupal',
        url: 'https://www.drupal.org/epam-systems'
      },
    ]
  },
];

const bronzeSponsors = [
  {
    name: 'IBBY',
    imageURL: '/assets/img/organizers/Ibby.png',
    socials: [
      {
        type: 'external-link',
        url: 'https://ib.by'
      },
    ]
  },
  {
    name: 'Z-Wolves',
    imageURL: '/assets/img/sponsors/zwolves.svg',
    socials: [
      {
        type: 'external-link',
        url: 'https://zwolves.com'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/z_wolves'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/company/z-wolves-development'
      },
      {
        type: 'drupal',
        url: 'https://www.drupal.org/z-wolves-development'
      },
    ]
  },
];

const individualSponsors = [
  {
    name: 'Alexander Dunin',
    nickname: 'dunin',
  },
  {
    name: 'Kate Marshalkina',
    nickname: 'kalabro',
  },
  {
    name: 'Alexay Sivets',
    nickname: 'alexey.sivets',
  },
  {
    name: 'Boris Yakovito',
    nickname: 'username',
  },
  {
    name: 'Alexander Dubovskoy',
    nickname: 'adubovskoy',
  },
  {
    name: 'Nikolay Shapovalov',
    nickname: 'username',
  },
  {
    name: 'Maksim Yudin',
    nickname: 'maksim.yudin',
  },
  {
    name: 'Anand Vasan',
    nickname: 'username',
  },
  {
    name: 'David Colwell',
    nickname: 'username',
  },
  {
    name: 'Elena Sysoeva',
    nickname: 'username',
  },
  {
    name: 'Vladyslav Bogatyrov',
    nickname: 'username',
  },
];

const Sponsors = () => (
  <>

    <section className="section align-center speakers mobile-padding">
      <div className="container">
        <span className="icon section-icon icon-shopping-02" />
        <h3>Meet our Sponsors</h3>
      </div>
    </section>

    {platinumSponsors.length > 0 &&
    <section className="section align-center" style={{ padding: 0 }}>
      <div className="container">
        <h5 className="heading-alt">Platinum Sponsor</h5>
        <br/>
        <br/>
        {platinumSponsors.map(sponsor => (
          <div className="col-sm-12">
            <div className="speaker">
              <div className="photo-wrapper" style={{
                height: '150px',
                display: 'flex',
                width: '350px',
                border: '2px solid #e9e9e9',
                padding: '20px'
              }}>
                <img src={sponsor.imageURL} alt={sponsor.name} title={sponsor.name} className="img-responsive" style={{margin: 'auto'}}/>
              </div>
              <ul className="speaker-socials">
                {sponsor.socials.map(social => (
                  <li><a href={social.url} target="_blank"><span className={`fa fa-${social.type}`}/></a></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    }

    {goldSponsors.length > 0 &&
    <section className="section align-center"  style={{ paddingBottom: 0 }}>
      <div className="container">
        <h5 className="heading-alt">Gold Sponsors</h5>
        <br/>
        <br/>
        {goldSponsors.map(sponsor => (
          <div className="col-sm-12">
            <div className="speaker">
              <div className="photo-wrapper" style={{
                height: '150px',
                display: 'flex',
                width: '350px',
                border: '2px solid #e9e9e9',
                padding: '20px'
              }}>
                <img src={sponsor.imageURL} alt={sponsor.name} title={sponsor.name} className="img-responsive" style={{margin: 'auto'}}/>
              </div>
              <ul className="speaker-socials">
                {sponsor.socials.map(social => (
                  <li><a href={social.url} target="_blank"><span className={`fa fa-${social.type}`}/></a></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    }

    {silverSponsors.length > 0 &&
    <section className="section align-center"  style={{ paddingBottom: 0 }}>
      <div className="container">
        <h5 className="heading-alt">Silver Sponsors</h5>
        <br/>
        <br/>
        {silverSponsors.map(sponsor => (
          <div className="col-sm-6">
            <div className="speaker">
              <div className="photo-wrapper" style={{
                height: '150px',
                display: 'flex',
                width: '350px',
                border: '2px solid #e9e9e9',
                padding: '20px'
              }}>
                <img src={sponsor.imageURL} alt={sponsor.name} title={sponsor.name} className="img-responsive" style={{margin: 'auto'}}/>
              </div>
              <ul className="speaker-socials">
                {sponsor.socials.map(social => (
                  <li><a href={social.url} target="_blank"><span className={`fa fa-${social.type}`}/></a></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    }

    {bronzeSponsors.length > 0 &&
    <section className="section align-center"  style={{ paddingBottom: 0 }}>
      <div className="container">
        <h5 className="heading-alt">Bronze Sponsors</h5>
        <br/>
        <br/>
        {bronzeSponsors.map(sponsor => (
          <div className="col-sm-6">
            <div className="speaker">
              <div className="photo-wrapper" style={{
                height: '150px',
                display: 'flex',
                width: '350px',
                border: '2px solid #e9e9e9',
                padding: '20px'
              }}>
                <img src={sponsor.imageURL} alt={sponsor.name} title={sponsor.name} className="img-responsive" style={{margin: 'auto', maxHeight: '100%'}}/>
              </div>
              <ul className="speaker-socials">
                {sponsor.socials.map(social => (
                  <li><a href={social.url} target="_blank"><span className={`fa fa-${social.type}`}/></a></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    }

    <section className="section align-center" style={{ paddingBottom: 0 }} >
      <div className="container">
        <h5 className="heading-alt">Individual Sponsors</h5>
        <br/>
        <br/>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {individualSponsors.map(sponsor => (
            <div className="col-12 col-sm-4 col-md-3" key={sponsor.name}>
              <Speaker {...sponsor} />
            </div>
          ))}
        </div>

      </div>
    </section>

  </>
);

export default Sponsors;
