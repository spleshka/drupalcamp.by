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
/*  {
    name: 'Daniel Wehner',
    nickname: 'dawehner',
    position: 'Senior Engineer @ Times Higher Education',
    countries: ['Germany'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/da_wehner',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/daniel-wehner-70994385/',
      }
    ],
  },*/
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
    name: 'Bojan Živanović',
    nickname: 'bojanz',
    position: 'Developer @ Commerce Guys',
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
    name: 'Pedro Cambra',
    nickname: 'pcambra',
    position: 'Founder @ Cambrico',
    countries: ['Spain'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/pcambra',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/pcambra/',
      }
    ],
  },
];

const FrontpageFeaturedSpeakers = () => (
  <section className="section align-center speakers">
    <div className="container">

      <span className="icon section-icon icon-faces-users-04" />
      <h3>Meet our Speakers</h3>

      <br/>
      <br/>

      <div className="row">
        {speakers.map(speaker => (
          <div className="col-12 col-sm-4" key={speaker.name}>
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
