import GoogleMapReact from 'google-map-react';
import issIcon from '../../assets/iss-icon.png';
import PropTypes from 'prop-types';

import './Map.css';
const Map = ({ center, zoom}) => {
  return (
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCBBeA3In2SDIR-ypo1iwOgAwc8Jt89wKA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <img src={ issIcon } alt="iss-icon" className='iss-icon'/>
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired
};

export default Map;
