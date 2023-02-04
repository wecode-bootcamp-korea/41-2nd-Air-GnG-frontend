import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function Location({
  setPosition,
  position,
  prevStep,
  nextStep,
}) {
  const navigate = useNavigate();

  return (
    <MainPage>
      <MainImage
        src="https://www.nzherald.co.nz/resizer/huSdXK7n2C7jDQbglhuoFaRJ0NM=/1440x810/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/5R27442HNURD33RPFNEKQ7AC3I.jpg"
        alt="mainimg"
      />
      <MainDescription>
        <ExitBtn onClick={() => navigate(-4)}>나가기</ExitBtn>
        <HousingType>숙소의 정확한 위치는 어디인가요?</HousingType>
        <MapDisplay
          center={{ lat: 33.38224697287725, lng: 126.55172857777436 }}
          level={9}
          onClick={(_t, mouseEvent) =>
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        >
          {position && <MapMarker position={position} />}
          {/* position.lat:위도 position.lng: 경도 */}
        </MapDisplay>
      </MainDescription>
      <PrevBtn onClick={prevStep}>이전</PrevBtn>
      <NextBtn onClick={nextStep}>다음</NextBtn>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;

const MainImage = styled.img`
  width: 48%;
  height: 100vh;
`;

const MainDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8961e;
  width: 52%;
  height: 100vh;
  padding-left: 50px;
  padding-right: 45px;
`;

const ExitBtn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 25px;
  position: fixed;
  right: 40px;
  top: 35px;
  background-color: #222222;
  border: none;
  color: white;
  cursor: pointer;
`;

const HousingType = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 70px;
`;

const NextBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
`;

const PrevBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #00a6fb;
  color: white;
  position: fixed;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  bottom: 30px;
  left: 50.5%;
  cursor: pointer;
`;

const MapDisplay = styled(Map)`
  width: 100%;
  height: 400px;
  position: relative;
  z-index: 50;
`;
