import React from 'react';
import { Link } from '../../../routes';
import Speaker from '../../01_atoms/Speaker';

const speakers = [
  {
    name: 'Jeffrey A. McGuire',
    nickname: 'horncologne',
    position: 'Partner @ Open Strategy Partners',
    countries: ['Germany', 'Italy'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/HornCologne',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/horncologne/',
      }
    ],
  },
  {
    name: 'Steve Persch',
    nickname: 'stevector',
    position: 'Lead Developer Advocate @ Pantheon',
    countries: ['United States of America'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/stevector',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/stevepersch/',
      }
    ],
  },
  {
    name: 'Angie Byron',
    nickname: 'webchick',
    position: 'Director, Community Development @ Acquia',
    countries: ['Canada'],
    links: [
      {
        type: 'twitter',
        url: 'http://twitter.com/webchick',
      },
      {
        type: 'linkedin',
        url: 'http://www.linkedin.com/in/webchick',
      }
    ],
  },
  {
    name: 'Bojan Živanović',
    nickname: 'bojanz',
    position: 'Lead Developer @ Commerce Guys',
    countries: ['Serbia'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/bojan_zivanovic',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/bojanzivanovic/',
      }
    ],
  },
  {
    name: 'Andrey Postnikov',
    nickname: 'andypost',
    position: 'Developer @ Skilld',
    countries: ['Russia'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/andypost_',
      },
      {
        type: 'github',
        url: 'https://github.com/andypost',
      }
    ],
  },
  {
    name: 'Tatár Balázs János',
    nickname: 'tatarbj',
    position: 'CTO @ Petend',
    countries: ['Hungary'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/tatarbj',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/balázs-jános-tatár-45781353/',
      }
    ],
  },
  {
    name: 'Lauren Kelly',
    nickname: 'lauren-kelly',
    position: 'Engagement Manager @ Pantheon',
    countries: ['United States of America'],
    links: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/unreality',
      }
    ],
  },
  {
    name: 'Gábor Hojtsy',
    nickname: 'gábor-hojtsy',
    position: 'Initiative coordinator coordinator @ Acquia',
    countries: ['Hungary'],
    links: [
      {
        type: 'twitter',
        url: 'http://twitter.com/gaborhojtsy',
      },
      {
        type: 'linkedin',
        url: 'http://www.linkedin.com/pub/g%C3%A1bor-hojtsy/54/583/228',
      }
    ],
  },
];

const FrontpageFeaturedSpeakers = () => (
  <section className="section align-center speakers">
    <div className="container">

      <span className="icon section-icon icon-education-science-08" />
      <h3>Meet our Speakers</h3>

      <br/>
      <br/>

      <div className="row">
        {speakers.map(speaker => (
          <div className="col-12 col-sm-3" key={speaker.name}>
            <Speaker {...speaker} />
          </div>
        ))}
      </div>

      <Link href="/speakers">
        <a className="btn btn-outline-clr btn-lg">See all speakers</a>
      </Link>

    </div>
  </section>
);

export default FrontpageFeaturedSpeakers;
