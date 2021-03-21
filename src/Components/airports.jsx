import 'antd/dist/antd.css';

import React, { useState } from 'react';
import { Layout } from 'antd';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
} from 'react-map-gl';
import AirportGeo from '../asset/airports.json';
import Pins from './pins';
import AirportInfo from './airportInfo';

const { Content } = Layout;

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px',
};
const navStyle = {
  top: 72,
  left: 0,
  padding: '10px',
};

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibG9uZ2ZlaTEiLCJhIjoiY2ttNXRmY2lhMGdrcjJwcXQ4OHcxc29yeiJ9.q1GlW7GMCWIII9bkzerOfw';

export function Airports() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 40.0838,
    longitude: 116.6095,
    zoom: 5,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  const handleClick = (d) => {
    setViewport({
      latitude: d.latitude,
      longitude: d.longitude,
      zoom: 6.5,
      transitionDuration: 500,
    });
    setPopupInfo(d);
  };

  return (
    <Layout>
      <Content style={{ position: 'relative' }}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="92vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Pins data={AirportGeo} onClick={handleClick} />
          {popupInfo && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              closeOnClick={false}
              onClose={setPopupInfo}
            >
              <AirportInfo info={popupInfo} />
            </Popup>
          )}
          <FullscreenControl style={fullscreenControlStyle} />
          <NavigationControl style={navStyle} />
        </ReactMapGL>
      </Content>
    </Layout>
  );
}