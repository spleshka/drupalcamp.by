import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker } from 'yandex-map-react';

const YandexMap = ({ lat, lng, height, width, scrollZoom, zoom }) => (
  <Map
    center={[lat, lng]}
    zoom={zoom}
    width={width}
    height={height}
    scrollZoom={scrollZoom}
    state={{ controls: ['zoomControl'], behaviors: ['multiTouch', 'dblClickZoom'] }}
    loadOptions={{ lang: 'en_US' }}
  >
    <Marker lat={lat} lon={lng} />
  </Map>
);

YandexMap.defaultProps = {
  height: '560px',
  width: '100%',
  scrollZoom: false,
  zoom: 15,
};

YandexMap.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  scrollZoom: PropTypes.bool,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

export default YandexMap;
