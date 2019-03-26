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
    name: 'Kate Marshalkina',
    nickname: 'kalabro',
    position: 'Tech Lead @ SystemSeed',
    countries: ['Russia'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/kalabro',
      },
      {
        type: 'github',
        url: 'https://github.com/kalabro',
      },
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
  {
    name: 'Igor Cheledinov',
    nickname: 'chilic',
    position: 'Solutions Architect @ Freelance',
    countries: ['Belarus'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/chilic',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/chilic',
      },
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
    name: 'Pavel Makhrinsky',
    nickname: 'gumanist',
    position: 'CEO @ Devalma',
    countries: ['Ukraine'],
    links: [
      {
        type: 'facebook',
        url: 'https://www.facebook.com/gumanist',
      },
    ],
  },
  {
    name: 'Evgeniy Maslovskiy',
    nickname: 'spleshka',
    position: 'CTO @ SystemSeed',
    countries: ['Belarus'],
    links: [
      {
        type: 'twitter',
        url: 'https://twitter.com/Spleshka',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/evgeniy-maslovskiy-a568a879',
      },
    ],
  },
  {
    name: 'Alex Schedrov',
    nickname: 'sanchiz',
    position: 'CEO @ Five Jars',
    countries: ['Ukraine'],
    links: [
      {
        type: 'twitter',
        url: 'http://twitter.com/alexschedrov',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/alexschedrov',
      },
    ],
  },
  {
    name: 'Andrey Posudevsky',
    nickname: 'aposudevsky',
    position: 'Team Lead @ We are you',
    countries: ['Netherlands'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/aposudevsky',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/andrey-posudevsky-b7248b58/',
      },
    ],
  },
  {
    name: 'Sergey Korzh',
    nickname: 'skorzh',
    position: 'Senior Developer @ SystemSeed',
    countries: ['Belarus'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/ikorgik',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/sergey-korzh-49a25a34',
      },
    ],
  },
  {
    name: 'Roland Molnár',
    nickname: 'roland.molnar',
    position: 'Senior Developer @ Technocrat',
    countries: ['Hungary'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/moroland',
      },
      {
        type: 'linkedin',
        url: 'http://www.linkedin.com/in/rolandmolnar',
      },
    ],
  },
  {
    name: 'Alexander Dubovskoy',
    nickname: 'adubovskoy',
    position: 'Developer @ Radon',
    countries: ['Russia'],
    links: [
      {
        type: 'facebook',
        url: 'https://www.facebook.com/adubovskoy',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/alexander-dubovskoy-875b3b58',
      }
    ],
  },
  {
    name: 'Alexandr Davyskiba',
    nickname: 'zviryatko',
    position: 'Technical Lead @ Ciklum',
    countries: ['Ukraine'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/zviryatko',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/zviryatko',
      },
    ],
  },
  {
    name: 'Dmitry Morozov',
    nickname: 'webmorozov',
    position: 'Lead Software Engineer @ EPAM',
    countries: ['Belarus'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/webmorozov',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/webmorozov',
      },
    ],
  },
  {
    name: 'Denis Gavrilovich',
    nickname: 'rodman1980',
    position: 'Lead Software Engineer @ EPAM',
    countries: ['Belarus'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/rodman1980',
      },
    ],
  },
  {
    name: 'Ivan Abramenko',
    nickname: 'levmyshkin',
    position: 'Drupal Developer @ Technocrat',
    countries: ['Russia'],
    links: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/c/IvanAbramenko',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/ivan-abramenko/',
      },
    ],
  },
  {
    name: 'Evgenii Nikitin',
    nickname: 'sinn',
    position: 'Drupal Team Leader @ Smile/Adyax',
    countries: ['Russia'],
    links: [
      {
        type: 'linkedin',
        url: 'http://ru.linkedin.com/in/nikitinevgeny',
      },
    ],
  },
];

const Speakers = () => (
  <section className="section align-center speakers mobile-padding">
    <div className="container">

      <span className="icon section-icon icon-education-science-08" />
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
