import React from 'react';
import Speaker from '../components/01_atoms/Speaker';

const mentors = [
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
    name: 'Balázs János Tatár',
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
];

const Travellers = () => (
  <>
    <section className="section align-center mobile-padding">
      <div className="container">
        <span className="icon section-icon icon-sport-18"/>
        <h3 className="heading-alt">Contribution Day</h3>
        <p className="text-alt">
          Get involved into the Open Source culture!
        </p>
      </div>
    </section>

    <section className="fullwidth-section" style={{ marginBottom: 0}}>

      {/* WHERE */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/contrib/tivali.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Where and When it's happening</h4>
            <p>The event will kick off on <strong>19th of May at 10am</strong> at business center Fortuna (<a href="https://yandex.com/maps/-/CCVHfYm~" target="_blank">Prytyckaha street, 27A</a>). General advice is to arrive at about 9:30am to get everything prepared in time.</p>
            <p><strong>IMPORTANT NOTE:</strong> You must bring a Drupal Camp badge given to you at the registration desk at the conference on Saturday (18th of May) - the building owners have very strict security policy. <a href="https://docs.google.com/spreadsheets/d/1fiGAz3pJianOcC2zzp2_lUoNmysy2BzVfQuajvPsl-w/edit#gid=0" target="_blank">Registration</a> is obligatory as well.</p>
          </article>
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-right"
          style={{backgroundImage: "url(/static/assets/img/contrib/contribution.jpg)"}}
        />
        <div className="col-sm-6 fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>What to expect</h4>
            <p>Learn while helping improve Drupal! Plenty of mentors will be available to help you get started. If you're not sure where to start contributing, or not even sure about the whole contribution thing, this is for you!</p>
            <p>We'll kick things off with a brief introduction, and then we'll help match people with issues that are right for their skill levels and areas of interest. Free training (if needed) is also provided to help new contributors set up a development environment and learn about the contribution process.</p>
          </article>
        </div>
      </div>

      {/* WHO IT IS FOR */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/contrib/community.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Who it's for</h4>
            <p>This Contribution Day is intended for first-time contributors and anyone with Drupal site building / development experience to learn how to contribute to Drupal (core, modules, translations, etc). Our mentors will help match tasks suitable for programmers and non-programmers alike.</p>
            <p>We particularly welcome participants from all experience levels, backgrounds, genders, races, sexual identities, religions, ages, abilities and other marginalized groups in our community to participate. The world is diverse and we can only make the best Drupal experience for everyone with your inclusion.</p>
          </article>
        </div>
      </div>

      {/* WHY COME */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-right"
          style={{backgroundImage: "url(/static/assets/img/contrib/opensource.jpg)"}}
        />
        <div className="col-sm-6 fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Why come</h4>
            <p>If you're like most Drupal users, you've been telling yourself for months that you should start contributing to Drupal. This event is your chance to get started with in-person training and mentoring from friendly, experienced contributors. If you've already started to work on core, distributions, modules or translations, come meet other contributors, hang out in person, and work on manageable tasks in the issue queues. The goal is to help you to improve Drupal ecosystem.</p>
          </article>
        </div>
      </div>

      {/* WHAT TO BRING / PREPARE */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/contrib/laptop.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>What to bring / prepare</h4>
            <p>You're expected to bring just 2 things with you:</p>
            <ul>
              <li>- An interest in Drupal contribution</li>
              <li>- A laptop with or even without a Drupal 8 development environment, because everyone has something to contribute!</li>
            </ul>
          </article>
        </div>
      </div>

    </section>

    <section className="section overlay align-center light-text">
      <div className="container">

        <span className="icon section-icon icon-travel-transportation-04" />
        <h2>Register to Contribution Day now!</h2>
        <p>Make a difference by your contribution to Open Source</p>

        <br/>
        <br/>

        <a
          href="https://docs.google.com/spreadsheets/d/1fiGAz3pJianOcC2zzp2_lUoNmysy2BzVfQuajvPsl-w/edit#gid=0"
          className="btn btn-lg"
          target="_blank"
        >
          Sign Up
        </a>

      </div>
    </section>

    <section className="section align-center speakers">
      <div className="container">

        <span className="icon section-icon icon-education-science-03" />
        <h3>Meet our Mentors</h3>

        <br/>
        <br/>

        <div className="row">
          {mentors.map(speaker => (
            <div className="col-12 col-sm-6 col-lg-3" key={speaker.name}>
              <Speaker {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>

  </>
);

export default Travellers;
