/*global kakao */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsMap } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
const { kakao } = window;

export default function MapModal({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let container = document.getElementById('map');
    if (!container) return;
    let options = {
      center: new kakao.maps.LatLng(33.38224697287725, 126.55172857777436),
      level: 9,
    };
    let map = new kakao.maps.Map(container, options);
    data.forEach(el => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.latitude, el.longitude),
      });
    });
  }, [isOpen]);

  return (
    <>
      <MapButton onClick={handleOpen}>
        <MapmodalText>{isOpen ? '목록 보기' : '지도 표시하기'}</MapmodalText>
        {isOpen ? <Listicon /> : <Mapicon />}
      </MapButton>
      {isOpen && <MapDisplay id="map" />}
    </>
  );
}

const MapButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 70px;
  width: 150px;
  height: 50px;
  margin: 0 auto;
  background-color: black;
  border-radius: 20px;
  cursor: pointer;
  z-index: 16;
`;

const MapmodalText = styled.span`
  color: white;
  font-size: 12px;
`;

const Mapicon = styled(BsMap)`
  margin-left: 5px;
  font-size: 14px;
  color: white;
`;

const Listicon = styled(FaListUl)`
  margin-left: 5px;
  font-size: 14px;
  color: white;
`;

const MapDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 15;
`;

// Mock Data below

// const ITEMS = [
//   {
//     id: 1,
//     title: '1번 숙소',
//     review: 4.79,
//     images: [
//       'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1675012848706-ff1b1fd7c675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
//       'https://plus.unsplash.com/premium_photo-1670390747519-0df3dd705d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1674993815218-287eb3f9ce0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
//       'https://images.unsplash.com/photo-1675079382790-cb3c2292c9e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//     ],
//     price: 122640,
//     latitude: 33.48755975,
//     longitude: 126.9019001,
//   },
//   {
//     id: 2,
//     title: '2번 숙소',
//     review: 5.0,
//     images: [
//       'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
//       'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     ],
//     price: 133640,
//     latitude: 33.49393717,
//     longitude: 126.9535452,
//   },
//   {
//     id: 3,
//     title: '3번 숙소',
//     review: 5.0,
//     images: [
//       'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
//       'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     ],
//     price: 133640,
//     latitude: 33.5199036,
//     longitude: 126.9542202,
//   },
//   {
//     id: 4,
//     title: '4번 숙소',
//     review: 5.0,
//     images: [
//       'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
//       'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     ],
//     price: 133640,
//     latitude: 33.51871579,
//     longitude: 126.8977316,
//   },
//   {
//     id: 5,
//     title: '5번 숙소',
//     review: 5.0,
//     images: [
//       'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
//       'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     ],
//     price: 133640,
//     latitude: 33.52098366,
//     longitude: 126.8570831,
//   },
//   {
//     id: 6,
//     title: '6번 숙소',
//     review: 5.0,
//     images: [
//       'https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       'https://images.unsplash.com/photo-1674784722614-451bbad3f507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
//       'https://images.unsplash.com/photo-1675059581159-72e42f205e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://images.unsplash.com/photo-1674708059513-5f77494844db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       'https://plus.unsplash.com/premium_photo-1673491311321-7ddfcd9b7582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     ],
//     price: 133640,
//     latitude: 33.55325228,
//     longitude: 126.8225717,
//   },
// ];
