/*global kakao */
import React from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function MapModal({ data }) {
  return (
    <MapDisplay
      id="map"
      center={{ lat: 33.38224697287725, lng: 126.55172857777436 }}
      level={9}
    >
      {data &&
        data.map(el => {
          return (
            <MapMarker
              key={el.id}
              position={{ lat: el.latitude, lng: el.longitude }}
            />
          );
        })}
    </MapDisplay>
  );
}

const MapDisplay = styled(Map)`
  width: 100%;
  height: 100vh;
`;
