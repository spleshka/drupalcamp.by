import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const socials = [
  {
    url: 'https://join.slack.com/t/drupal-belarus/shared_invite/enQtNTc1MTkwMTUxNzAyLWZlMjVlZmY0YmJlOGM3YzkxN2M0ZjNiZGUwNjhhMDBmY2Q0MDZjZTg4ZGUyNDFiZGM2MmVlY2YwZmJmYzE3Y2U',
    imageURL: '/static/assets/img/social/slack.png',
    label: 'Slack',
  },
  {
    url: 'https://t.me/drupal_camp_belarus',
    imageURL: '/static/assets/img/social/telegram.png',
    label: 'Telegram',
  },
  {
    url: 'https://twitter.com/drupalcampby',
    imageURL: '/static/assets/img/social/twitter.png',
    label: 'Twitter',
  },
  {
    url: 'https://www.facebook.com/Drupal-Camp-Belarus-561950297656804/',
    imageURL: '/static/assets/img/social/facebook.png',
    label: 'Facebook',
  },
];


class Newsletter extends React.Component {

  render() {
    return (
      <section id="sign_up" className="section  overlay light-text align-center">
        <div className="container">
          <span className="icon section-icon icon-chat-messages-16" />
          <h2>Keep me <span className="highlight">updated</span></h2>
          <small>Subscribe to our latest news!</small>
          <br/>
          <br/>
          <br/>

          <div className="row">
            {socials.map(social => (
              <div className="col-md-3" style={{ marginBottom: '30px' }}>
                <a href={social.url} target="_blank" style={{ color: 'white', textDecoration: 'none', display: 'block' }}>
                  <img src={social.imageURL} title={social.label} alt={social.label} style={{ height: '96px'}} />
                  <div>{social.label}</div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }
}

export default Newsletter;
