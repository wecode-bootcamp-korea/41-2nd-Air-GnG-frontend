import React from 'react';
import styled from 'styled-components';
import {
  AiFillPicture,
  AiOutlineWifi,
  AiFillCar,
  AiFillVideoCamera,
} from 'react-icons/ai';
import { GiForkKnifeSpoon, GiBathtub, GiBarbecue } from 'react-icons/gi';
import { FaSwimmingPool } from 'react-icons/fa';
import { MdFireExtinguisher } from 'react-icons/md';

export default function Facilities() {
  return (
    <Div>
      <Height>
        <Width>
          <AiFillPicture />
          <span>풍경</span>
        </Width>
        <Width>
          <AiFillCar />
          <span>주차완비</span>
        </Width>
        <Width>
          <AiFillVideoCamera />
          <span>보안카메라</span>
        </Width>
        <Width>
          <AiOutlineWifi />
          <span>무선 인터넷</span>
        </Width>
        <Width>
          <FaSwimmingPool />
          <span>수영장-온수</span>
        </Width>
        <Width>
          <GiBarbecue />
          <span>바베큐장</span>
        </Width>
        <Width>
          <GiBathtub />
          <span>욕조</span>
        </Width>
        <Width>
          <GiForkKnifeSpoon />
          <span>주방</span>
        </Width>
        <Width>
          <MdFireExtinguisher />
          <span>소방경보</span>
        </Width>
      </Height>
    </Div>
  );
}

const Div = styled.div`
  width: 60%;
  height: 240px;
  font-size: 24px;
  margin-top: 15px;
  span {
    font-size: 16px;
  }
`;
const Height = styled.div`
  height: 205px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Width = styled.div`
  width: 45%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  span {
    margin-left: 5px;
  }
`;
