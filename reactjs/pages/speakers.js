import React from 'react';
import Speaker from '../components/01_atoms/Speaker';

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
    name: 'Alexandr Lyalyuk',
    nickname: 'lyalyuk',
    position: 'Tech Lead @ Zfort Group',
    countries: ['Ukraine'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/MrLyalyuk',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/alexandr-lyalyuk-4a7662b3/',
      }
    ],
  },
];

const Speakers = () => (
  <section className="section align-center speakers mobile-padding">
    <div className="container">

      <span className="icon section-icon icon-faces-users-04" />
      <h3>Meet our Speakers</h3>

      <br/>
      <br/>

      <div className="row">
      {speakers.map(speaker => (
        <div className="col-12 col-sm-6 col-lg-3" key={speaker.name}>
          <Speaker {...speaker} />
        </div>
      ))}
      </div>

      <br />
      <br />
      <span className="icon section-icon icon-badges-votes-13" />
      <h3>More to come - stay tuned</h3>

    </div>
  </section>
);

export default Speakers;
