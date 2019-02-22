import React from 'react';
import PropTypes from 'prop-types';

const Speaker = ({ nickname, name, position, countries, links }) => (
  <div className="speaker">
    <div className="photo-wrapper rounded">
      <img src={`/assets/img/speakers/${nickname}.jpg`} alt={name} className="img-responsive" style={{ width: '100%', maxWidth: '200px' }} />
    </div>
    <h3 className="name">{name}</h3>
    <p className="text-alt">
      <small>{position}</small>
    </p>
    <ul className="speaker-socials">
      {countries.map(country => (
        <li className="country"><img src={`/assets/img/countries/${country.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={country} title={country} /></li>
      ))}

      {links.length > 0 &&
      <li><a href={`https://drupal.org/u/${nickname}`} target="_blank"><span className="fa fa-drupal"/></a></li>
      }

      {links.length > 0 && links.map(link => (
        <li key={link.type}><a href={link.url} target="_blank"><span className={`fa fa-${link.type}`} /></a></li>
      ))}
    </ul>
    <br />
  </div>
);

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.array,
};

Speaker.defaultProps = {
  countries: [],
  links: [],
};

export default Speaker;
