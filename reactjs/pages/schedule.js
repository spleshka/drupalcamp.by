import React from 'react';

const sessions = [
  {
    time: '08:40 - 09:40 / Registration',
    type: 'break',
    icon: 'icon-alerts-07',
  },
  {
    time: '09:40 - 10:00 / Official Opening',
    type: 'break',
    icon: 'icon-realestate-living-15',
  },
  {
    time: '10:00 - 10:40',
    type: 'session',
    data: [
      {
        title: 'Opening Keynote: [title:placeholder]', // TODO: To specify topic
        speakers: ['Jeffrey A. McGuire'],
        language: 'en',
      },
    ],
  },
  {
    time: 'Coffee break',
    type: 'break',
    icon: 'icon-food-17',
  },
  {
    time: '11:00 - 11:45',
    type: 'session',
    data: [
      {
        title: 'State of Drupal 9',
        speakers: ['Gábor Hojtsy'],
        language: 'en',
      },
      {
        title: 'Войти в IT: Основы Web Frameworks на простых примерах',
        speakers: ['Alexandr Davyskiba'],
        language: 'ru',
      },
      {
        title: 'From User Stories to Use Cases: Tell the Full Story',
        speakers: ['Lauren Kelly'],
        language: 'en',
      },
      {
        title: 'Drupal as an enterprise platform for building and supporting 1000 of sites',
        speakers: ['Dmitry Morozov', 'Denis Gavrilovich'],
        language: 'en',
      },
    ],
  },
  {
    time: 'Coffee break',
    type: 'break',
    icon: 'icon-food-17',
  },
  {
    time: '12:00 - 12:45',
    type: 'session',
    data: [
      {
        title: 'The past, present, and future of eCommerce on Drupal',
        speakers: ['Bojan Živanović'],
        language: 'en',
      },
      {
        title: 'Let’s write secure Drupal code!',
        speakers: ['Bálazs János Tatár'],
        language: 'en',
      },
      {
        title: 'How to make remote working efficient as well as fun',
        speakers: ['Sergey Korzh'],
        language: 'ru',
      },
      {
        title: 'Creating web app with Drupal, GraphQL and React',
        speakers: ['Ivan Abramenko'],
        language: 'en', // TODO: To confirm!!!
      },
    ],
  },
  {
    time: 'Coffee break',
    type: 'break',
    icon: 'icon-food-17',
  },
  {
    time: '13:00 - 13:30',
    type: 'session',
    data: [
      {
        title: 'SERVE THEM ALL! Headless Drupal as a backend for multiple frontend applications',
        speakers: ['Kate Marshalkina', 'Evgeniy Maslovskiy'],
        language: 'en',
      },
      {
        title: 'Tips about Drupal configuration, Drupal 8 caching and BigPipe, esi, cache tags and etc.',
        speakers: ['Igor Cheledinov'],
        language: 'en',
      },
      {
        title: 'Катим спринт к релизу', // TODO: сделать заголовок лучше
        speakers: ['Slava Kasihin'],
        language: 'ru',
      },
      {
        title: 'Tokaido - Seriously fast local Drupal dev environments',
        speakers: ['Roland Molnar'],
        language: 'en',
      },
    ],
  },
  {
    time: 'Lunch',
    type: 'break',
    icon: 'icon-food-16',
  },
  {
    time: '14:30 - 15:15',
    type: 'session',
    data: [
      {
        title: '[title:placeholder]',  // TODO: To specify topic
        speakers: ['Angie Byron'],
        language: 'en',
      },
      {
        title: 'Voice Assistants - change how users with disabilities Get Things Done',
        speakers: ['Alex Schedrov'],
        language: 'en',
      },
      {
        title: 'Working with requirements', // TODO: сделать заголовок лучше
        speakers: ['Pavel Makhrinskyi'],
        language: 'en', // TODO: To confirm
      },
      {
        title: 'Component based theming in Drupal 8',
        speakers: ['Evgenii Nikitin'],
        language: 'ru',
      },
    ],
  },
  {
    time: 'Coffee break',
    type: 'break',
    icon: 'icon-food-17',
  },
  {
    time: '15:30 - 16:15',
    type: 'session',
    data: [
      {
        title: 'Cutting edge web apps powered by Drupal', // TODO: To specify topic
        speakers: ['Andrey Posudevsky'],
        language: 'en', // TODO: To confirm with the speaker
      },
      {
        title: 'Real life Machine Learning use cases for Drupal',
        speakers: ['Alexandr Lyalyuk'],
        language: 'ru',
      },
      {
        title: 'Drupal 8: Journey to the center of the earth',
        speakers: ['Boris Nikulin'],
        language: 'ru',
      },
      {
        title: 'Use Lando, Luke...', // TODO: To update topic title
        speakers: ['Alexander Dubovskloy'],
        language: 'en', // TODO: To confirm with the speaker
      },
    ],
  },
  {
    time: 'Coffee break',
    type: 'break',
    icon: 'icon-food-17',
  },
  {
    time: '16:30 - 17:15',
    type: 'session',
    data: [
      {
        title: '[title:placeholder]', // TODO: To specify topic
        speakers: ['Andy Postnikov'],
        language: 'en', // TODO: To confirm with the speaker
      },
      {
        title: '[title:placeholder]', // TODO: To put topic
        speakers: ['[speaker:placeholder]'], // TODO: To put speaker
        /*language: 'en',*/
      },
      {
        title: 'Panel Talk: Headless VS Traditional Drupal',
        speakers: ['[speaker:placeholder]'], // TODO: To put speakers
        language: 'ru',
      },
      {
        title: '[title:placeholder]', // TODO: To put topic
        speakers: ['[speaker:placeholder]'], // TODO: To put speaker
        /*language: 'en',*/
      },
    ],
  },
  {
    time: 'Coffee break',
    type: 'break',
    icon: 'icon-food-17',
  },
  {
    time: '17:30 - 18:00',
    type: 'session',
    data: [
      {
        title: 'Closing Keynote: [title:placeholder]', // TODO: To specify topic
        speakers: ['Steve Persh'],
        language: 'en',
      },
    ],
  },
  {
    time: '18:00 - 18:15 / Official Closing',
    type: 'break',
    icon: 'icon-party-09',
  },
];

const Schedule = () => (
  <section className="section align-center speakers mobile-padding" style={{background: '#262627'}}>
    <div className="container">

      <span className="icon section-icon icon-office-21"/>
      <h3 style={{ color: 'white' }}>Schedule: Sessions Day</h3>
      <p className="text-alt">May 18, 2019</p>

      <br/>
      <br/>

    </div>

    <div className="container">
      {sessions.map(session => (
        <div className="session" style={{borderBottom: '1px solid #333'}}>

          <div className="row">
            <div className="col-md-12" style={{
              padding: session.type === 'break' ? '20px 0' : '20px 0 0',
              color: session.type === 'break' ? 'rgb(186, 191, 204)' : '#1ac6ff'
            }}>
              <strong className="time">
                <span
                  className={`icon ${session.icon ? session.icon : 'icon-office-24'}`}
                  style={{ marginRight: '8px', verticalAlign: 'middle', color: '#babfcc' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{session.time}</span>
                </strong>
            </div>
          </div>

          {session.data &&
          <div className="row text-center">
            {session.data.map(item => (
              <div
                className={session.data.length === 1 ? 'col-md-12' : 'col-md-3'}
                style={{
                  padding: '20px',
                  color: 'white',
                }}>

                <div className="title">
                  {item.language &&
                  <img
                    className="language"
                    src={`/assets/img/countries/${item.language === 'ru' ? 'russia' : 'united-kingdom'}.svg`}
                    height={12}
                    style={{marginRight: '8px'}}
                    title={`Language: ${item.language === 'ru' ? 'Russian' : 'English'}`}
                  />
                  }
                  <span style={{ fontSize: '16px' }}>{item.title}</span>
                </div>


                {item.speakers &&
                <div className="name highlight" style={{fontSize: '14px'}}>
                  {item.speakers.join(', ')}
                </div>
                }

              </div>
            ))}
          </div>
          }

        </div>
      ))}

    </div>

  </section>
);

export default Schedule;
