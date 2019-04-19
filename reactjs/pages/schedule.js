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
        title: 'Opening Keynote', // TODO: To specify topic
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
        title: '[placeholder]',
        speakers: ['[placeholder]'],
        //language: 'ru',
      },
      {
        title: 'Design patterns? Easy!',
        speakers: ['Olga Rabodzei'],
        language: 'ru',
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
        speakers: ['Balázs János Tatár'],
        language: 'en',
      },
      {
        title: 'Войти в IT: Основы Web Frameworks на простых примерах',
        speakers: ['Alexandr Davyskiba'],
        language: 'ru',
      },
      {
        title: 'Creating web app with Drupal, GraphQL and React',
        speakers: ['Ivan Abramenko'],
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
    time: '13:00 - 13:30',
    type: 'session',
    data: [
      {
        title: 'SERVE THEM ALL! Headless Drupal as a backend for multiple frontend applications',
        speakers: ['Kate Marshalkina', 'Evgeniy Maslovskiy'],
        language: 'en',
      },
      {
        title: 'Drupal Performance tips: configs optimization, partial caching, BigPipe and ESI',
        speakers: ['Igor Cheledinov'],
        language: 'en',
      },
      {
        title: 'Observations about selling offshore services',
        speakers: ['Chris Dykstra'],
        language: 'en',
      },
      {
        title: 'Tokaido: server-grade local dev environment for Drupal developers',
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
        title: 'Tales of Drupal Past: Origin Stories of Drupal Contributor',
        speakers: ['Angie Byron'],
        language: 'en',
      },
      {
        title: 'High Performance Drupal. Hint: you likely need more than Drupal',
        speakers: ['Ben Routson'],
        language: 'en',
      },
      {
        title: 'Working with requirements', // TODO: сделать заголовок лучше
        speakers: ['Pavel Makhrinskyi'],
        language: 'en',
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
        title: 'Headless static websites and PWAs with Gatsby and Drupal. Based on true story.',
        speakers: ['Andrey Posudevsky'],
        language: 'en',
      },
      {
        title: 'Real life Machine Learning use cases for Drupal',
        speakers: ['Alexandr Lyalyuk'],
        language: 'ru',
      },
      {
        title: 'From User Stories to Use Cases: Tell the Full Story',
        speakers: ['Lauren Kelly'],
        language: 'en',
      },
      {
        title: 'Сравнение инструментов локальной разработки: docker4drupal, lando, docksal, ddev и другие',
        speakers: ['Alexander Dubovskoy'],
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
    time: '16:30 - 17:15',
    type: 'session',
    data: [
      {
        title: 'Drupal 8: Best practise tips for developers',
        speakers: ['Andy Postnikov'],
        language: 'en', // TODO: To confirm with the speaker
      },
      {
        title: 'Future of The Voice-Powered Web with Voice Assistants',
        speakers: ['Alex Schedrov'],
        language: 'en',
      },
      {
        title: 'Panel Talk: Headless VS Traditional Drupal',
        speakers: ['[placeholder]'], // TODO: To put speakers
        language: 'en',
      },
      {
        title: 'Как работать удаленно с максимальной эффективностью и не сойти с ума',
        speakers: ['Sergey Korzh'],
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
    time: '17:30 - 18:00',
    type: 'session',
    data: [
      {
        title: 'Closing Keynote: We Make the Internet',
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
