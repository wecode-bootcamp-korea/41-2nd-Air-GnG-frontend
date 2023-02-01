/*global kakao */
import React, { useEffect, useState } from 'react';
import { FcHome, GiOrangeSlice } from 'react-icons/fc';
import { Circle, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const { kakao } = window;

export default function Kakaomap({ item }) {
  const arr = item[0];
  return (
    <MapDisplay id="map">
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: arr.latitude,
          lng: arr.longitude,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: arr.latitude,
            lng: arr.longitude,
          }}
          image={{
            src: './images/yunhwan/mandarin.png', // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: { x: 27, y: 30 }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        />
        <Circle
          center={{
            lat: arr.latitude,
            lng: arr.longitude,
          }}
          radius={50}
          strokeWeight={5} // 선의 두께입니다
          strokeColor="#75B8FA" // 선의 색깔입니다
          strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle="dash" // 선의 스타일 입니다
          fillColor="#CFE7FF" // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
      </Map>
    </MapDisplay>
  );
}

const MapDisplay = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 500px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
